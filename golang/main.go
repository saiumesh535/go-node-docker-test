package main

import (
	"fmt"
	"net/http"
	"golang.org/x/crypto/bcrypt"
)

func hashPassword() (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte("somebigstringtoconnect"), 13)
	return string(bytes), err
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	hashed, _ := hashPassword();
	fmt.Fprintf(w, hashed)
}

func main() {
	http.HandleFunc("/gocrypto", indexHandler)
	http.ListenAndServe(":3003", nil)
}
