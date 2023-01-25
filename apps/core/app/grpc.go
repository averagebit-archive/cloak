package app

import (
	"context"
	"fmt"
	cloakProtoService "github.com/averagebit/cloak/core/generated/cloak_service"
	"google.golang.org/grpc"
	"log"
	"net"
	"time"
)

const (
	listenAddress = "0.0.0.0:9090"
)

//func getSpace(w http.ResponseWriter, r *http.Request) {
//	spaceID := chi.URLParam(r, "spaceID")
//
//	// TODO: change to UUID
//	user1 := User{ID: 1, Username: "luke", Handle: "luke#1"}
//	user2 := User{ID: 2, Username: "average", Handle: "average#1"}
//	users := []User{user1, user2}
//	space := Space{ID: 1, Name: "@me", Rooms: []string{"room1", "room2"}, Users: users}
//
//	if spaceID == "@me" {
//		err := json.NewEncoder(w).Encode(SpaceResponse{Status: "ok", Space: space})
//
//		if err != nil {
//			w.WriteHeader(422)
//			w.Write([]byte(fmt.Sprintf("error: %v", err)))
//		}
//
//		return
//	}
//
//	return
//}
//
//func getRoom(w http.ResponseWriter, r *http.Request) {
//
//}

// user1 := User{ID: 1, Username: "luke", Handle: "luke#1"}
// user2 := User{ID: 2, Username: "average", Handle: "average#1"}
// users := []User{user1, user2}

type cloakService struct {
	// NOTE: this has to be here to satisfy the interface, otherwise the compiler will complain
	cloakProtoService.UnimplementedCloakServiceServer
}

func (t *cloakService) GetCurrentTime(ctx context.Context, req *cloakProtoService.GetCurrentTimeRequest) (*cloakProtoService.GetCurrentTimeResponse, error) {
	log.Println("Got time here!")
	return &cloakProtoService.GetCurrentTimeResponse{CurrentTime: time.Now().String()}, nil
}

func RunRPC() {
	log.Printf("CloakService starting on %s", listenAddress)

	lis, err := net.Listen("tcp", listenAddress)

	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	s := grpc.NewServer()

	fmt.Println(lis, s)
	cloakProtoService.RegisterCloakServiceServer(s, &cloakService{})

	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
