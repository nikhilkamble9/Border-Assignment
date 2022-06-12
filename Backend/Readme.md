To build the app - go build -> 

// package to install to build golang rest api
  - go get -u github.com/gorilla/mux
  - go get github.com/gorilla/handlers
  - go get -u gorm.io/gorm
  - go get -u gorm.io/driver/mysql
  - go get github.com/dgrijalva/jwt-go
  - go install -tags 'postgres' github.com/golang-migrate/migrate/v4/cmd/migrate@v4.15.1
