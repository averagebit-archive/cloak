package internal

type User struct {
	Username string
	Handle   string
}

type Message struct {
	Content string
	User    User
}

type Room struct {
	Name     string
	Users    []User    `faker:"users"`
	Messages []Message `faker:"messagelist"`
}

type Space struct {
	Name  string
	Rooms []Room `faker:"rooms"`
	Users []User `faker:"users"`
}
