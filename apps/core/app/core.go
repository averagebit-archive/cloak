package app

import (
	"context"
	"fmt"
	"github.com/averagebit/cloak/core/generated/cloak_service"
	"github.com/bufbuild/connect-go"
	"log"
)

type CloakService struct {
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
