package main

import (
	"fmt"
	"github.com/averagebit/cloak/core/internal"
	"math/rand"
	"reflect"

	"github.com/go-faker/faker/v4"
)

func createUser() internal.User {
	user := internal.User{}
	username := faker.Username()
	handleID, _ := faker.RandomInt(1000, 2000, 1)

	user.Username = username
	user.Handle = fmt.Sprintf("%s#%d", username, handleID[0])

	return user
}

func createUserList() []internal.User {
	users := make([]internal.User, 3)

	for i := 0; i < len(users); i++ {
		users[i] = createUser()
	}

	_ = faker.AddProvider("users", func(v reflect.Value) (interface{}, error) {
		return users, nil
	})

	return users
}

func createMessages(users []internal.User) []internal.Message {
	message := internal.Message{}
	err := faker.FakeData(&message)

	if err != nil {
		fmt.Println(err)
	}

	max := 4
	messages := make([]internal.Message, max)

	for i := 0; i < len(messages); i++ {
		messages[i] = message
		messages[i].User = users[rand.Intn(len(users))]
	}

	_ = faker.AddProvider("messagelist", func(v reflect.Value) (interface{}, error) {
		return messages, nil
	})

	return messages
}

func createRooms() internal.Room {
	room := internal.Room{}
	err := faker.FakeData(&room)

	if err != nil {
		fmt.Println(err)
	}

	_ = faker.AddProvider("rooms", func(v reflect.Value) (interface{}, error) {
		rooms := make([]internal.Room, 1)
		rooms[0] = room
		return rooms, nil
	})

	return room
}

func main() {
	users := createUserList()
	messages := createMessages(users)
	room := createRooms()

	space := internal.Space{}

	err := faker.FakeData(&space)

	if err != nil {
		fmt.Println(err)
	}

	fmt.Println(space)
	fmt.Println(users)
	fmt.Println(room)
	fmt.Println(messages)
}
