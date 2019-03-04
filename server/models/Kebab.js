const mongoose = require('mongoose')

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let kebabSchema = new mongoose.Schema({
  name: { type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE, unique: [true, 'Kebab already exists.'] },
  ingredients: [{ type: mongoose.Schema.Types.String }],
  description: { type: mongoose.Schema.Types.String },
  size: { type: mongoose.Schema.Types.String },
  price: { type: mongoose.Schema.Types.Number, required: REQUIRED_VALIDATION_MESSAGE },
  image: { type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE },
  likes: [{ type: mongoose.Schema.Types.String }],
  reviews: []
})

let Kebab = mongoose.model('Kebab', kebabSchema);

let kebabsObject = [
  {
    "name": "Chicken burger",
    "description": "A sweet burger with chicken and vegetables. Its just amazing",
    "price": 2,
    "image": "http://kebap13.com/img/upload/thumbs/9558a1d6fcf4e8d8bdd655ee872f6fc3.jpg",
    "ingredients": ["chicken", "vegetables", "sauce of your choice"],
    "size": "Small"
  },
  {
    "name": "Chicken doner Small",
    "description": "A sweet doner with chicken, vegetables and fired potatoes. Its just amazing",
    "price": 2,
    "image": "http://kebap13.com/img/upload/thumbs/9558a1d6fcf4e8d8bdd655ee872f6fc3.jpg",
    "ingredients": ["arabic bread", "chicken", "fried potatoes", "salad", "vegetables", "sauce of choice"],
    "size": "Small"
  },
  {
    "name": "Chicken doner Medium",
    "description": "A sweet doner with chicken, vegetables and fired potatoes. Its just amazing",
    "price": 3.50,
    "image": "http://kebap13.com/img/upload/thumbs/9558a1d6fcf4e8d8bdd655ee872f6fc3.jpg",
    "ingredients": ["arabic bread", "chicken", "fried potatoes", "salad", "vegetables", "sauce of choice"],
    "size": "Medium"
  },
  {
    "name": "Chicken doner Large",
    "description": "A sweet doner with chicken, vegetables and fired potatoes. Its just amazing",
    "price": 5.30,
    "image": "http://kebap13.com/img/upload/thumbs/9558a1d6fcf4e8d8bdd655ee872f6fc3.jpg",
    "ingredients": ["arabic bread", "chicken", "fried potatoes", "salad", "vegetables", "sauce of choice"],
    "size": "Large"
  },
  {
    "name": "Extra burger",
    "description": "A extra burger with chicken, vegetables and fired potatoes. Its just amazing",
    "price": 3.30,
    "image": "http://kebap13.com/img/upload/thumbs/9558a1d6fcf4e8d8bdd655ee872f6fc3.jpg",
    "ingredients": ["toasted bread", "chicken", "fried potatoes", "salad", "vegetables", "sauce of choice"],
    "size": "Medium"
  }
]

module.exports = Kebab;
module.exports.seedKebabs = () => {
  Kebab.find({})
    .then((kebabs) => {
      if (kebabs.length > 0) return;

      Kebab.create(kebabsObject);
    });
}