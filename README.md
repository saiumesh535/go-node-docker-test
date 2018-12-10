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

``C:\Users\SaiUmesh>autocannon -c 10 -d 50 http://localhost:3000/nodecrypto
Running 50s test @ http://localhost:3000/nodecrypto
10 connections

Stat         Avg    Stdev  Max
Latency (ms) 9116.9 330.17 9299.22
Req/Sec      0.2    1.15   8
Bytes/Sec    62.4 B 358 B  2.52 kB

10 requests in 50s, 3.15 kB read
40 errors (40 timeouts)

C:\Users\SaiUmesh>autocannon -c 10 -d 50 http://localhost:3000/gocrypto
Running 50s test @ http://localhost:3000/gocrypto
10 connections

Stat         Avg     Stdev  Max
Latency (ms) 4574.27 378.38 5478.4
Req/Sec      2.1     2.85   10
Bytes/Sec    625 B   848 B  2.97 kB

105 requests in 50s, 31.2 kB read``