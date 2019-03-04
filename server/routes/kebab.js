const express = require('express')
const authCheck = require('../config/auth-check')
const Kebab = require('../models/Kebab')

const router = new express.Router()

function validateKebabCreateForm(payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  payload.price = parseFloat(payload.price)

  if (!payload || typeof payload.name !== 'string' || payload.name.length < 3) {
    isFormValid = false
    errors.name = 'Kebab name must be at least 3 symbols.'
  }

  if (!payload || typeof payload.size !== 'string' || payload.size.length < 3) {
    isFormValid = false;
    errors.name = 'Size must be at least 3 symbols';
  }

  if (!payload || typeof payload.description !== 'string' || payload.description.length < 10 || payload.description.length > 200) {
    isFormValid = false
    errors.description = 'Description must be at least 10 symbols and less than 120 symbols.'
  }

  if (!payload || !payload.price || payload.price < 0) {
    isFormValid = false
    errors.price = 'Price must be a positive number.'
  }

  if (!payload || typeof payload.image !== 'string' || !(payload.image.startsWith('https://') || payload.image.startsWith('http://')) || payload.image.length < 14) {
    isFormValid = false
    errors.image = 'Please enter valid Image URL. Image URL must be at least 14 symbols.'
  }

  if (!isFormValid) {
    message = 'Check the form for errors.'
  }

  return {
    success: isFormValid,
    message,
    errors
  }
}

router.post('/create', authCheck, (req, res) => {
  const kebabObj = req.body;

  if (req.user.roles.indexOf('Admin') > -1) {
    const validationResult = validateKebabCreateForm(kebabObj)
    if (!validationResult.success) {
      return res.status(200).json({
        success: false,
        message: validationResult.message,
        errors: validationResult.errors
      })
    }

    Kebab
      .create(kebabObj)
      .then((createdKebab) => {
        res.status(200).json({
          success: true,
          message: 'Kebab added successfully.',
          data: createdKebab
        })
      })
      .catch((err) => {
        console.log(err)
        let message = 'Something went wrong :( Check the form for errors.'
        if (err.code === 11000) {
          message = 'Kebab with the given name already exists.'
        }
        return res.status(200).json({
          success: false,
          message: message
        })
      })
  } else {
    return res.status(200).json({
      success: false,
      message: 'Invalid credentials!'
    })
  }
})

router.post('/edit/:id', authCheck, (req, res) => {
  if (req.user.roles.indexOf('Admin') > -1) {
    const kebabId = req.params.id
    const kebabObj = req.body
    const validationResult = validateKebabCreateForm(kebabObj)
    if (!validationResult.success) {
      return res.status(200).json({
        success: false,
        message: validationResult.message,
        errors: validationResult.errors
      })
    }

    Kebab
      .findById(kebabId)
      .then(existingKebab => {
        existingKebab.name = kebabObj.name
        existingKebab.author = kebabObj.author
        existingKebab.genres = kebabObj.genres
        existingKebab.description = kebabObj.description
        existingKebab.price = kebabObj.price
        existingKebab.image = kebabObj.image

        existingKebab
          .save()
          .then(editedKebab => {
            res.status(200).json({
              success: true,
              message: 'Kebab edited successfully.',
              data: editedKebab
            })
          })
          .catch((err) => {
            console.log(err)
            let message = 'Something went wrong :( Check the form for errors.'
            if (err.code === 11000) {
              message = 'Kebab with the given name already exists.'
            }
            return res.status(200).json({
              success: false,
              message: message
            })
          })
      })
      .catch((err) => {
        console.log(err)
        const message = 'Something went wrong :( Check the form for errors.'
        return res.status(200).json({
          success: false,
          message: message
        })
      })
  } else {
    return res.status(200).json({
      success: false,
      message: 'Invalid credentials!'
    })
  }
})

router.get('/all', (req, res) => {
  Kebab
    .find()
    .then(kebabs => {
      res.status(200).json(kebabs)
    })
})

router.post('/review/:id', authCheck, (req, res) => {
  const id = req.params.id
  const review = req.body.review
  const username = req.user.username

  if (review.length < 4) {
    const message = 'Review must be at least 4 characters long.'
    return res.status(200).json({
      success: false,
      message: message
    })
  }

  Kebab
    .findById(id)
    .then(kebab => {
      if (!kebab) {
        return res.status(200).json({
          success: false,
          message: 'Product not found.'
        })
      }

      let reviewObj = {
        review,
        createdBy: username
      }

      let reviews = kebab.reviews
      reviews.push(reviewObj)
      kebab.reviews = reviews
      kebab
        .save()
        .then((kebab) => {
          res.status(200).json({
            success: true,
            message: 'Review added successfully.',
            data: kebab
          })
        })
        .catch((err) => {
          console.log(err)
          const message = 'Something went wrong :( Check the form for errors.'
          return res.status(200).json({
            success: false,
            message: message
          })
        })
    })
    .catch((err) => {
      console.log(err)
      const message = 'Something went wrong :( Check the form for errors.'
      return res.status(200).json({
        success: false,
        message: message
      })
    })
})

router.post('/like/:id', authCheck, (req, res) => {
  const id = req.params.id
  const username = req.user.username
  Kebab
    .findById(id)
    .then(kebab => {
      if (!kebab) {
        const message = 'Product not found.'
        return res.status(200).json({
          success: false,
          message: message
        })
      }

      let likes = kebab.likes
      if (!likes.includes(username)) {
        likes.push(username)
      }
      kebab.likes = likes
      kebab
        .save()
        .then((kebab) => {
          res.status(200).json({
            success: true,
            message: 'Kebab liked successfully.',
            data: kebab
          })
        })
        .catch((err) => {
          console.log(err)
          const message = 'Something went wrong :('
          return res.status(200).json({
            success: false,
            message: message
          })
        })
    })
    .catch((err) => {
      console.log(err)
      const message = 'Something went wrong :('
      return res.status(200).json({
        success: false,
        message: message
      })
    })
})

router.post('/unlike/:id', authCheck, (req, res) => {
  const id = req.params.id
  const username = req.user.username
  Kebab
    .findById(id)
    .then(kebab => {
      if (!kebab) {
        let message = 'Product not found.'
        return res.status(200).json({
          success: false,
          message: message
        })
      }

      let likes = kebab.likes
      if (likes.includes(username)) {
        const index = likes.indexOf(username)
        likes.splice(index, 1)
      }

      kebab.likes = likes
      kebab
        .save()
        .then((kebab) => {
          res.status(200).json({
            success: true,
            message: 'Product unliked successfully.',
            data: kebab
          })
        })
        .catch((err) => {
          console.log(err)
          const message = 'Something went wrong :('
          return res.status(200).json({
            success: false,
            message: message
          })
        })
    })
    .catch((err) => {
      console.log(err)
      const message = 'Something went wrong :('
      return res.status(200).json({
        success: false,
        message: message
      })
    })
})

router.delete('/delete/:id', authCheck, (req, res) => {
  const id = req.params.id
  if (req.user.roles.indexOf('Admin') > -1) {
    Kebab
      .findById(id)
      .then((kebab) => {
        kebab
          .remove()
          .then(() => {
            return res.status(200).json({
              success: true,
              message: 'Kebab deleted successfully!'
            })
          })
      })
      .catch(() => {
        return res.status(200).json({
          success: false,
          message: 'Entry does not exist!'
        })
      })
  } else {
    return res.status(200).json({
      success: false,
      message: 'Invalid credentials!'
    })
  }
})

module.exports = router
