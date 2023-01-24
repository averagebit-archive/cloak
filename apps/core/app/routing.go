package app

import (
	"github.com/go-chi/chi/v5"
	"github.com/olahol/melody"
	"net/http"
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

func CreateRouter(m *melody.Melody) *chi.Mux {
	//user1 := User{ID: 1, Username: "luke", Handle: "luke#1"}
	//user2 := User{ID: 2, Username: "average", Handle: "average#1"}
	//users := []User{user1, user2}

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
