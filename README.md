# go-node-docker-test
Building docker images for node and golang

1. clone the project
2. npm install in cd node
3. run app-compose shell file

once you run those commands, node will run on port 3000 on host machine.

This is basic project to show how containers can communicate each other via http

visit http://localhost:3000/gocrypto - hashing in golang using bcrypt

and http://localhost:3000/nodecrypto - hashing in node using bcryptjs

## Benchmarks


| Command      | server         | Requests Processed |
| :---         |     :---:      |          ---:      |
| autocannon -c 10 -d 50 http://localhost:3000/nodecrypto   | node     | 10         |
| autocannon -c 10 -d 50 http://localhost:3000/gocrypto   | go     | 105         |