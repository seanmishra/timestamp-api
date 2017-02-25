const express = require('express')
const methodFilter = require('./middleware/method-filter')
const root = require('./routes/root')
const slash = require('express-slash')

const app = express()
app.use(methodFilter)

//static serving with workaround for proxy
app.get('/', (req, res) => { res.redirect(301, 'api/') })
app.use('/api/' ,express.static('./public/'))

app.use('/', root)
app.use(slash())

app.listen(1337, () => { console.log('Listening on port 1337') })