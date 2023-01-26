package main

import (
	"context"
	"fmt"
	"github.com/averagebit/cloak/core/generated/cloak_service"
	"github.com/averagebit/cloak/core/generated/cloak_service/cloak_serviceconnect"
	"github.com/bufbuild/connect-go"
	"github.com/rs/cors"
	"golang.org/x/net/http2"
	"golang.org/x/net/http2/h2c"
	"log"
	"net/http"
)

type cloakService struct {
}

func (s *cloakService) Echo(
	ctx context.Context,
	req *connect.Request[cloak_service.StringMessage],
) (*connect.Response[cloak_service.StringMessage], error) {
	log.Println("Request headers: ", req.Header())
	res := connect.NewResponse(&cloak_service.StringMessage{
		Value: fmt.Sprintf("Hello, there."),
	})
	res.Header().Set("Greet-Version", "v1")
	return res, nil
}

func main() {
	cloak := &cloakService{}
	mux := http.NewServeMux()
	path, handler := cloak_serviceconnect.NewCloakServiceHandler(cloak)
	mux.Handle(path, handler)

	c := cors.New(cors.Options{
		AllowedOrigins: []string{"http://localhost:3000"},
		AllowedHeaders: []string{"*"},
		Debug:          true,
	})

	corsHandler := c.Handler(mux)

	http.ListenAndServe(
		"localhost:8080",
		// Use h2c so we can serve HTTP/2 without TLS.
		h2c.NewHandler(corsHandler, &http2.Server{}),
	)
}
