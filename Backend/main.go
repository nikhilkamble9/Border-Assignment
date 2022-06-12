package main

import (
	"io"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

func hello(w http.ResponseWriter, r *http.Request) {
	io.WriteString(w, "Welcome to golang api")
}
func initializetherouter() {
	r := mux.NewRouter()
	// // user route
	// r.HandleFunc("/users", GetUsers).Methods("GET")
	// r.HandleFunc("/users/{id}", GetUser).Methods("GET")
	// r.HandleFunc("/users", CreateUser).Methods("POST")
	// r.HandleFunc("/users/{id}", UpdateUser).Methods("PUT")
	// r.HandleFunc("/users/{id}", DeleteUser).Methods("DELETE")

	//main page
	r.HandleFunc("/", hello)
	//enabling cors in mux
	headers := handlers.AllowedHeaders([]string{"Content-Type", "Authorization", "X-Requested-With"})
	methods := handlers.AllowedMethods([]string{"GET", "POST", "PUT", "DELETE"})
	origins := handlers.AllowedOrigins([]string{"*"})

	//user dummy routes
	r.HandleFunc("/login", Login).Methods("POST", "OPTIONS")
	r.HandleFunc("/home", Home).Methods("POST")
	r.HandleFunc("refresh", Refresh).Methods("POST")

	// product route
	r.HandleFunc("/products", GetProducts).Methods("GET")
	r.HandleFunc("/products/{id}", GetProduct).Methods("GET")
	r.HandleFunc("/products", CreateProduct).Methods("POST")
	r.HandleFunc("/products/{id}", UpdateProduct).Methods("PUT")
	r.HandleFunc("/products/{id}", DeleteProduct).Methods("DELETE")

	//port
	port := os.Getenv("PORT")
	if port == "" {
		log.Fatal("$PORT must be set")
	}
	// connecting to the port with routes
	log.Fatal(http.ListenAndServe(":"+port, handlers.CORS(headers, methods, origins)(r)))
}

func main() {
	InitialMigration()
	initializetherouter()
}
