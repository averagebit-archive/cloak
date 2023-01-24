package main

import (
	"database/sql"
	"fmt"
	"github.com/averagebit/cloak/core/app"
	"github.com/go-faker/faker/v4"
	_ "github.com/golang-migrate/migrate/v4/source/file"
	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
	"log"
	"math/rand"
	"os"
	"reflect"
)

func createUser() app.User {
	user := app.User{}
	username := faker.Username()
	handleID, _ := faker.RandomInt(1000, 2000, 1)

	user.Username = username
	user.Handle = fmt.Sprintf("%s#%d", username, handleID[0])

	return user
}

func createUserList() []app.User {
	users := make([]app.User, 3)

	for i := 0; i < len(users); i++ {
		users[i] = createUser()
	}

	_ = faker.AddProvider("users", func(v reflect.Value) (interface{}, error) {
		return users, nil
	})

	return users
}

func createMessages(users []app.User) []app.Message {
	message := app.Message{}
	err := faker.FakeData(&message)

	if err != nil {
		fmt.Println(err)
	}

	max := 4
	messages := make([]app.Message, max)

	for i := 0; i < len(messages); i++ {
		messages[i] = message
		messages[i].User = users[rand.Intn(len(users))]
	}

	_ = faker.AddProvider("messagelist", func(v reflect.Value) (interface{}, error) {
		return messages, nil
	})

	return messages
}

func createRooms() app.Room {
	room := app.Room{}
	err := faker.FakeData(&room)

	if err != nil {
		fmt.Println(err)
	}

	_ = faker.AddProvider("rooms", func(v reflect.Value) (interface{}, error) {
		rooms := make([]app.Room, 1)
		rooms[0] = room
		return rooms, nil
	})

	return room
}

func connectedDB() *sql.DB {
	err := godotenv.Load()

	if err != nil {
		log.Fatal("Error loading .env file")
	}

	dbHost := os.Getenv("DB_HOST")

	db, err := sql.Open("postgres", dbHost)

	if err != nil {
		panic(err)
	}

	return db
}

func main() {
	db := connectedDB()
	users := createUserList()
	messages := createMessages(users)
	room := createRooms()

	space := app.Space{}

	err := faker.FakeData(&space)

	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(users, messages, room, space)

	spaceID := insertSpace(db, space)
	roomID := insertRoom(db, room)
	addRoomToSpace(db, spaceID, roomID)

	// should probs be in a single statement and not a loop
	for _, user := range users {
		id := insertUsers(db, user)
		addUserToSpace(db, spaceID, id)
		addUserToRoom(db, roomID, id)
	}
}

func insertUsers(db *sql.DB, user app.User) int {
	sqlStatement := "INSERT INTO users (username, handle) VALUES ($1, $2) RETURNING id;"

	lastInsertId := 0
	err := db.QueryRow(sqlStatement, user.Username, user.Handle).Scan(&lastInsertId)

	if err != nil {
		panic(err)
	}

	return lastInsertId
}

func insertSpace(db *sql.DB, space app.Space) int {
	sqlStatement := "INSERT INTO spaces (name) VALUES ($1) RETURNING id;"

	lastInsertId := 0
	err := db.QueryRow(sqlStatement, space.Name).Scan(&lastInsertId)

	if err != nil {
		panic(err)
	}

	return lastInsertId
}

func insertRoom(db *sql.DB, room app.Room) int {
	sqlStatement := "INSERT INTO rooms (name) VALUES ($1) RETURNING id;"

	lastInsertId := 0
	err := db.QueryRow(sqlStatement, room.Name).Scan(&lastInsertId)

	if err != nil {
		panic(err)
	}

	return lastInsertId
}

func addRoomToSpace(db *sql.DB, spaceID int, roomID int) {
	sqlStatement := `
	INSERT INTO spaces_rooms
    (space_id, room_id) VALUES (
   	(SELECT id FROM spaces WHERE id = $1),
    (SELECT id FROM rooms WHERE id = $2)
   );
	`

	_, err := db.Exec(sqlStatement, spaceID, roomID)

	if err != nil {
		panic(err)
	}
}

func addUserToSpace(db *sql.DB, spaceID int, userID int) {
	sqlStatement := `
	INSERT INTO spaces_users
    (space_id, user_id) VALUES (
   	(SELECT id FROM spaces WHERE id = $1),
    (SELECT id FROM users WHERE id = $2)
   );
	`
	_, err := db.Exec(sqlStatement, spaceID, userID)

	if err != nil {
		panic(err)
	}
}

func addUserToRoom(db *sql.DB, roomID int, userID int) {
	query := `
	INSERT INTO rooms_users
    (room_id, user_id) VALUES (
   	(SELECT id FROM rooms WHERE id = $1),
    (SELECT id FROM users WHERE id = $2)
   );
	`
	_, err := db.Exec(query, roomID, userID)

	if err != nil {
		panic(err)
	}
}
