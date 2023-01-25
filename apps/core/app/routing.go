package app

import (
	"github.com/go-chi/chi/v5"
	"github.com/olahol/melody"
	"net/http"
)

func CreateRouter(m *melody.Melody) *chi.Mux {
	router := chi.NewRouter()

	router.Get("/ws", func(w http.ResponseWriter, r *http.Request) {
		m.HandleRequest(w, r)
	})

	m.HandleMessage(func(s *melody.Session, msg []byte) {
		m.BroadcastFilter(msg, func(q *melody.Session) bool {
			return q.Request.URL.Path == s.Request.URL.Path
		})
	})

	apiRouter := chi.NewRouter()
	apiRouter.Mount("/api", router)

	return apiRouter
}
