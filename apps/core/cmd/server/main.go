package main

import (
	"context"
	"flag"
	"fmt"
	"google.golang.org/grpc/credentials/insecure"
	"log"
	"net"
	"net/http"
	"time"

	gw "github.com/averagebit/cloak/core/generated/cloak_service" // Update
	"github.com/golang/glog"
	"google.golang.org/grpc"
)

const (
	listenAddress = "0.0.0.0:9090"
)

var (
	// command-line options:
	// gRPC server endpoint
	grpcServerEndpoint = flag.String("grpc-server-endpoint", "localhost:9090", "gRPC server endpoint")
)

type cloakService struct {
	// NOTE: this has to be here to satisfy the interface, otherwise the compiler will complain
	gw.UnimplementedCloakServiceServer
}

func (t *cloakService) Echo(ctx context.Context, req *gw.StringMessage) (*gw.StringMessage, error) {
	log.Println("Got time here!")
	return &gw.StringMessage{Value: time.Now().String()}, nil
}

func run() error {
	ctx := context.Background()
	ctx, cancel := context.WithCancel(ctx)
	defer cancel()

	lis, err := net.Listen("tcp", listenAddress)

	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	s := grpc.NewServer()
	gw.RegisterCloakServiceServer(s, &cloakService{})

	go func() {
		fmt.Println("GRPC Server started")
		if err := s.Serve(lis); err != nil {
			log.Fatalf("failed to serve: %v", err)
		}
	}()

	// Register gRPC server endpoint
	// Note: Make sure the gRPC server is running properly and accessible
	//m := melody.New()
	//mux := runtime.NewServeMux()
	//
	//mux.Handle("GET", "/ws", func(w http.ResponseWriter, r *http.Request) {
	//	m.HandleRequest(w, r)
	//})
	//
	//m.HandleMessage(func(s *melody.Session, msg []byte) {
	//	m.BroadcastFilter(msg, func(q *melody.Session) bool {
	//		return q.Request.URL.Path == s.Request.URL.Path
	//	})
	//})

	opts := []grpc.DialOption{grpc.WithTransportCredentials(insecure.NewCredentials())}
	err = gw.RegisterCloakServiceHandlerFromEndpoint(ctx, mux, *grpcServerEndpoint, opts)

	if err != nil {
		return err
	}
	// Start HTTP server (and proxy calls to gRPC server endpoint)
	fmt.Println("HTTP Server started")
	return http.ListenAndServe(":8081", mux)
}

func main() {
	flag.Parse()
	defer glog.Flush()

	if err := run(); err != nil {
		glog.Fatal(err)
	}
}
