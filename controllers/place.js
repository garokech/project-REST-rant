const router = require('express').Router()
const req = require('express/lib/request')
const { get } = require('express/lib/response')
const places = require('../models/places.js')

router.get('/', (req, res) => {   
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/rice.jpg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee.jpg'
  }]  
  
  res.render('places/index',{places})
  })

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places stub')
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

router.get('/new', (req, res) => {
  res.render('places/new')
})
router.get('/:id', (req, res) => {
  res.send('GET /places/:id stub')
})
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})
router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})
router.get('/:id/edit', (req, res) => {
  res.send('GET /places/:id/edit stub')
})
router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})
router.delete('/:id/rant/:rantId', (req, res) => {
  res.send('GET /places/:id/rant/:rantId stub')
})
module.exports = router
