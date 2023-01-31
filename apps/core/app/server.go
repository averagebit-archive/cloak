package app

import (
	"database/sql"
	"github.com/averagebit/cloak/core/generated/cloak_service/cloak_serviceconnect"
	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
	"github.com/rs/cors"
	"log"
	"net/http"
	"os"
)

func connectToDB() *sql.DB {
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

func CreateHandler() http.Handler {
	db := connectToDB()
	cloak := &CloakService{
		db: db,
	}

	mux := http.NewServeMux()
	path, handler := cloak_serviceconnect.NewCloakServiceHandler(cloak)

	mux.Handle(path, handler)
	router := CreateRouter()

	mux.Handle("/", router)

	c := cors.New(cors.Options{
		AllowedOrigins: []string{"http://localhost:3000"},
		AllowedHeaders: []string{"*"},
		Debug:          true,
	})

	corsHandler := c.Handler(mux)
	return corsHandler
}
