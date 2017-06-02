const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const APP_TOKEN = 'EAAEV0aMrMXMBAGOqs8qQogap7H1lQFtpE1ztzPVU9qg4i8ZC0WNguJiGtrNUG9iWlT5bzlaSp52iGQH975stZBWj844hh8WevXGmqbmkaUcIKWuNAADpz1zDlS6rQ8AbnknNiHQDBzCmxMqQF1Go8QYT7i85ai3diQ4ZCZBfMwZDZD'

var app = express()

app.use(bodyParser.json())

app.listen(8080, function(){
	console.log('Server listen localhost:3000')
})

app.get('/', function(req, res){
	res.send('Abriendo el puerto desde local')

})
