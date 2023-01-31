package app

import (
	"context"
	"database/sql"
	"fmt"
	"github.com/averagebit/cloak/core/generated/cloak_service"
	"github.com/bufbuild/connect-go"
	"github.com/google/uuid"
	"log"
)

type CloakService struct {
	db *sql.DB
}

func (s *CloakService) Echo(
	ctx context.Context,
	req *connect.Request[cloak_service.StringMessage],
) (*connect.Response[cloak_service.StringMessage], error) {
	log.Println("Request headers: ", req.Header())
	res := connect.NewResponse(&cloak_service.StringMessage{
		Value: fmt.Sprintf("Hello, there."),
	})
	res.Header().Set("Greet-Version", "v1")
	return res, nil
}

func (s *CloakService) Login(
	ctx context.Context,
	req *connect.Request[cloak_service.LoginRequest],
) (*connect.Response[cloak_service.LoginResponse], error) {
	log.Println("Request headers: ", req.Header())
	usr := req.Msg.Username

	q := `
		SELECT * FROM users where username = $1
	`

	rows := s.db.QueryRow(q, usr)

	var (
		id       int64
		username string
		handle   string
	)

	if err := rows.Scan(&id, &username, &handle); err != nil {
		log.Fatal(err)
	}

	log.Printf("id %d username is %s\n", id, username, handle)

	res := connect.NewResponse(&cloak_service.LoginResponse{
		Handle:   handle,
		Username: username,
		Token:    uuid.New().String(),
	})
	return res, nil
}
