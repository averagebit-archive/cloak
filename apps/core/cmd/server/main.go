package main

import (
	"github.com/averagebit/cloak/core/app"
	"github.com/averagebit/cloak/core/generated/cloak_service/cloak_serviceconnect"
	"github.com/rs/cors"
	"golang.org/x/net/http2"
	"golang.org/x/net/http2/h2c"
	"net/http"
)

func main() {
	cloak := &app.CloakService{}
	mux := http.NewServeMux()
	path, handler := cloak_serviceconnect.NewCloakServiceHandler(cloak)

	mux.Handle(path, handler)
	router := app.CreateRouter()

	mux.Handle("/", router)

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
