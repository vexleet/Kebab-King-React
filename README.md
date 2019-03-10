# Kebab-King-React
“Kebab King” is a web application for a fast food and more specifically its about kebabs.
 
## Installation
These instructions will get you a copy of the project up and running on your local machine.

### Clone
- Clone this repo to your local machine using `https://github.com/vexleet/Kebab-King-React.git` or download ZIP

### Setup
> Install packages in server and run the server
```shell
$ cd server
$ npm install
$ node index
```

> Install packages in root folder and run the app
```shell
$ npm install
$ npm start
```

# Functionality 

##### •	User Login 
    - o Login in current application using email and password of already registered user. 
##### •	User Register 
    - o Register a new user by providing email, password and username. 
##### •	User Logout 
    - o Logouts from the application. 
##### •	Home 
    - o List top-six kebabs by user likes
##### •	Menu
    - o List all kebabs. Nine per page
    - o Search kebabs by their name
    - o Add kebab to the cart or view details
##### •	Kebab Details
    - o Show kebab details
    - o Add kebab review
    - o Each user can like/unlike the kebab
##### •	Cart
    - o Users add kebabs to the cart
    - o Users select quantity of the chosen product
    - o Users have option to remove product from the cart
    - o Users have option to checkout or to continue shopping
##### •	My orders
    - o List user orders
    - o Navigate to order details
##### •	Order Details
    - o Shows full order details
##### •	Kebab add 
    - o Admin route only
    - o Create a new kebab entry and save it to the database
##### •	Kebab edit 
    - o Admin route only
    - o Edit existing kebab entry and save it to the database
##### •	Kebab delete
    - o Admin route only
    - o Remove kebab entry from the database
##### •	Pending orders 
    - o Admin route only
    - o View all pending orders
    - o Navigate to order details
    - o Approve order

## Built With
- [NodeJS](https://nodejs.org/en/) - Server
- [ExpressJS](http://expressjs.com) - Framework used for server
- [MongoDB](https://www.mongodb.com) - For storing data
- [React](https://reactjs.org) - Framework used for client side