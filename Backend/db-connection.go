package main

import (
	"fmt"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

// creating database var as DB and an error as err
var DB *gorm.DB
var err error

// creating a variable DNS for storing the root url.
const DNS = "uvxftzgum5jkfknl:0WNTiZ6i5NK5JO6vXy0T@tcp(bqsu1zipihyjjpfhsluo-mysql.services.clever-cloud.com)/bqsu1zipihyjjpfhsluo?parseTime=true"

// connecting to MySQL database
func InitialMigration() {
	DB, err = gorm.Open(mysql.Open(DNS), &gorm.Config{})
	if err != nil {
		fmt.Println(err.Error())
		panic("Cannot connect to databse")
	}
	DB.AutoMigrate(&User{}, &Product{})
}
