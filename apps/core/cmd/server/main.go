package main

import (
	"github.com/averagebit/cloak/core/app"
	"golang.org/x/net/http2"
	"golang.org/x/net/http2/h2c"
	"net/http"
)

func main() {
	handler := app.CreateHandler()
	http.ListenAndServe(
		"localhost:8080",
		// Use h2c so we can serve HTTP/2 without TLS.
		h2c.NewHandler(handler, &http2.Server{}),
	)
}
