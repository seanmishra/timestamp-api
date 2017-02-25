const express = require('express')
const moment = require('moment')

const router = express.Router({
    'caseSensitive': true,
    'strict': true
})

router.route('/:timestamp')
    .get((request, response) => {
        let timestamp = request.params.timestamp
        if(Date.parse(timestamp)) timestamp = moment(timestamp)
        else timestamp = moment.unix(timestamp)
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