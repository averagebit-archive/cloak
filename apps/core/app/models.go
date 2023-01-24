package app

type Room struct {
	ID       int       `json:"id"`
	Name     string    `json:"name"`
	Users    []User    `json:"users"`
	Messages []Message `json:"messages,omitempty"`
}

type Space struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
	// TODO: change to UUID
	Rooms []string `json:"rooms"`
	Users []User   `json:"users"`
}

type Message struct {
	ID      int    `json:"id"`
	Content string `json:"content"`
	User    User   `json:"user"`
}

type User struct {
	ID       int    `json:"id"`
	Username string `json:"username"`
	Handle   string `json:"handle"`
}

type LoginRequest struct {
	Username string `json:"username"`
}

type LoginResponse struct {
	Status string `json:"status"`
}

type SpaceResponse struct {
	Status string `json:"status"`
	Space  Space  `json:"space"`
}
