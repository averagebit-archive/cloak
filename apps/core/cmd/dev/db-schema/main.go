package main

import (
	"database/sql"
	"fmt"
	"github.com/golang-migrate/migrate/v4"
	"github.com/golang-migrate/migrate/v4/database/postgres"
	_ "github.com/golang-migrate/migrate/v4/source/file"
	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
	"log"
	"os"
)

func main() {
	err := godotenv.Load()

	if err != nil {
		log.Fatal("Error loading .env file")
	}

	dbHost := os.Getenv("DB_HOST")
	db, err := sql.Open("postgres", dbHost)

	if err != nil {
		panic(err)
	}

	driver, err := postgres.WithInstance(db, &postgres.Config{})

	if err != nil {
		panic(err)
	}

	// NOTE: relative path to core folder
	m, err := migrate.NewWithDatabaseInstance(
		"file://./db/dev",
		"postgres", driver)

	if err != nil {
		panic(err)
	}

	err = m.Up()

	if err != nil {
		fmt.Println(err)
	}
}
