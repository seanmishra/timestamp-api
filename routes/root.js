const express = require('express')
const moment = require('moment')

const router = express.Router()

router.route('/:timestamp')
    .get((request, response) => {
        let timestamp = moment(new Date(request.params.timestamp))
        if(timestamp.isValid()) {
            response.json({
                'unix': timestamp.format('X'),
                'natural': timestamp.format('Do MMMM, YYYY')
            })
        } else {
            response.status(400).json({
                'unix': null,
                'natural': null
            })
        }
    })

module.exports = router