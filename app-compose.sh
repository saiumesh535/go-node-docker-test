./build-go-image.sh
./build-node-image.sh
docker-compose -f "docker-compose.yml" up -d --build