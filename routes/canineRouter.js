const express = require('express')
const Canine = require('../models/canine')
const canineRouter = express.Router()


//GET All
canineRouter.get('/', ( req, res, next) => {
    Canine.find((err, allData) => {
        if(err){
            res.sendStatus(500)
            return next( err )
        }
        return res.status(200).send(allData)
    })
})

//GET One
canineRouter.get('/:dogId', ( req, res, next) => {
    Canine.find(
        { _id: req.params.dogId},
        (err, dog) => {
        if(err){
            res.sendStatus(500)
            return next(200)
        }
        return res.status(200).send(dog)
    })
})


//POST 
canineRouter.post('/', (req, res, next) => {
    const newDog = new Canine(req.body)
    newDog.save((err, data) => {
        if(err) {
            res.sendStatus(500)
            return next(err)
        }
        return res.status(200).send(data)
    })
})

//UPDATE
canineRouter.put('/:dogId', (req, res, next) => {
    Canine.findOneAndUpdate(
        {_id: req.params.dogId},
        req.body,
        {new: true},
        (err, update) => {
        if(err) {
            res.sendStatus(500)
            return next(err)
        }
        return res.status(200).send(update)
    })
})

//DELETE
canineRouter.delete('/:dogId', (req, res, next) => {
    Canine.findByIdAndDelete(
        {_id: req.params.dogId},
        (err, dog) => {
        if(err) {
            res.sendStatus(500)
            return next(err)
        }
        return res.status(200).send(`Successfully DELETED`)
    })
})

// GET by walkDays
canineRouter.get( "/search/walkdays", ( req, res, next ) => {
    Canine.find( { walkDays: req.query.walkDays }, ( err, canines ) => {
        if( err ) {
            res.status( 500 )
            return next( err )
        }
        return res.status( 200 ).send( canines )
    } )
} )

module.exports = canineRouter