package app

import (
	"encoding/json"
	"fmt"
	"github.com/go-chi/chi/v5"
	"github.com/olahol/melody"
	"net/http"
)

func getSpace(w http.ResponseWriter, r *http.Request) {
	spaceID := chi.URLParam(r, "spaceID")

	// TODO: change to UUID
	user1 := User{ID: 1, Username: "luke", Handle: "luke#1"}
	user2 := User{ID: 2, Username: "average", Handle: "average#1"}
	users := []User{user1, user2}
	space := Space{ID: 1, Name: "@me", Rooms: []string{"room1", "room2"}, Users: users}

	if spaceID == "@me" {
		err := json.NewEncoder(w).Encode(SpaceResponse{Status: "ok", Space: space})

		if err != nil {
			w.WriteHeader(422)
			w.Write([]byte(fmt.Sprintf("error: %v", err)))
		}

		return
	}

	return
}

func getRoom(w http.ResponseWriter, r *http.Request) {

}

func CreateRouter(m *melody.Melody) *chi.Mux {
	user1 := User{ID: 1, Username: "luke", Handle: "luke#1"}
	user2 := User{ID: 2, Username: "average", Handle: "average#1"}
	users := []User{user1, user2}

	router := chi.NewRouter()

	router.Post("/login", func(w http.ResponseWriter, r *http.Request) {
		var userRequest LoginRequest

		if err := json.NewDecoder(r.Body).Decode(&userRequest); err != nil {
			http.Error(w, "Failed to parse request body", http.StatusBadRequest)
			return
		}

		// TODO: this needs to call the DB and find the user not some
		// cringe loop
		var activeUser User
		for _, user := range users {
			if user.Username == userRequest.Username {
				fmt.Println(user.Username)
				activeUser = user
			}
		}

		w.Header().Set("Content-Type", "application/json")

		if activeUser == (User{}) {
			err := json.NewEncoder(w).Encode(LoginResponse{Status: "failed"})

			if err != nil {
				fmt.Println(err)
			}

			return
		}

		err := json.NewEncoder(w).Encode(LoginResponse{Status: "ok"})

		if err != nil {
			fmt.Println(err)
		}

		return
	})

	router.Route("/space", func(r chi.Router) {
		r.Get("/{spaceID}", getSpace)
		//r.Get("/room/{roomID}", func() {
		//	fmt.Println("yeeeeee")
		//})
	})

	//
	//router.Get("/ws", func(w http.ResponseWriter, r *http.Request) {
	//	m.HandleRequest(w, r)
	//})
	//
	//m.HandleMessage(func(s *melody.Session, msg []byte) {
	//	m.BroadcastFilter(msg, func(q *melody.Session) bool {
	//		return q.Request.URL.Path == s.Request.URL.Path
	//	})
	//})

	apiRouter := chi.NewRouter()
	apiRouter.Mount("/api", router)

	return apiRouter
}
