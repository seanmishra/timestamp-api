module.exports = (request, response, next) => {
    if(request.method !== 'GET')
        response.status(400).send('Bad Request. Only GET requests are acceptable.')
    else next()
}