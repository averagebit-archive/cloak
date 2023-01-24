seed_db:
	echo "initiating schema"
	/usr/local/go/bin/go run cmd/dev/db-schema/main.go
	/usr/local/go/bin/go run cmd/dev/db-seed/main.go

start_db:
	docker container start cloak-core

make_db:
	echo "creating new database."
	docker run --name cloak-core -e POSTGRES_PASSWORD=pwd -e POSTGRES_DB=database -d -p 5432:5432 postgres

remake_db:
	echo "Setting up database..."
	make drop_db
	make make_db
	sleep 3
	make seed_db
	echo "Database setup complete."

drop_db:
	echo "removing old database."
	docker rm -f cloak-core

run_proxy:
	docker container start cloak-proxy

create_proxy:
	docker rm -f cloak-core
	docker run -d --name cloak-proxy --network host cloak-proxy

build_proxy:
	docker build -t cloak-proxy ./envoy

bootstrap:
	echo "bootstrapping..."
	make start_db
	make run_proxy
