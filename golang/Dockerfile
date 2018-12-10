FROM golang:1.8 as builder
WORKDIR /go/src/app
COPY golang .
RUN go get -d -v ./...
RUN go install -v ./...
RUN go build -o main .
CMD ["./main"]
