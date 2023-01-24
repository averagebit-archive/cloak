package main

import (
	"github.com/averagebit/cloak/core/app"
	"github.com/olahol/melody"
	"net/http"
)

func main() {
	m := melody.New()
	r := app.CreateRouter(m)
	http.ListenAndServe(":5000", r)
}
