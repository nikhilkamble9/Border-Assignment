package main

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
	"gorm.io/gorm"
)

// creating product model known as struct in golang
type Product struct {
	gorm.Model
	Company string `json:"company"`
	Name    string `json:"name"`
	Price   string `json:"price"`
	Image   string `json:"image"`
	Details string `json:"details"`
}

// product details router interface
func GetProducts(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var product []Product
	DB.Find(&product)
	json.NewEncoder(w).Encode(&product)
}

func GetProduct(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	var product Product
	DB.First(&product, params["id"])
	json.NewEncoder(w).Encode(&product)
}

func CreateProduct(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var product Product
	json.NewDecoder(r.Body).Decode(&product)
	DB.Create(&product)
	json.NewEncoder(w).Encode(&product)
}

func UpdateProduct(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	var product Product
	DB.First(&product, params["id"])
	json.NewDecoder(r.Body).Decode(&product)
	DB.Save(&product)
	json.NewEncoder(w).Encode(product)
}

func DeleteProduct(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	var product Product
	DB.Delete(&product, params["id"])
	json.NewEncoder(w).Encode(product)
}
