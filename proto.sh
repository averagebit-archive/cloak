protoc -I=proto cloak.proto --js_out=import_style=commonjs,binary:./generated \
--grpc-web_out=import_style=commonjs,mode=grpcwebtext:./generated \
--go_out=./generated --go_opt=paths=source_relative --go-grpc_out=./generated --go-grpc_opt=paths=source_relative



