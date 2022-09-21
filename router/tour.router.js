const express=require('express')
const { route } = require('../app')
const router=express.Router()
const tourController=require('../controller/tour.controller')

router.route('/tours')
.post(tourController.createTours)
.get(tourController.getAllTours)
router.route('/tours/:id')
.get(tourController.getATour)


router.route('/tour')
.get(tourController.getAllTours)


router.route('/tour/trending')
.get(tourController.mostTrendingTour)

router.route('/tour/cheapest')
.get(tourController.cheapestTour)

router.route('/tour/:id')
.patch(tourController.updateAToor)

module.exports=router

