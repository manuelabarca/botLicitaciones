const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const APP_TOKEN = 'EAAEV0aMrMXMBAGOqs8qQogap7H1lQFtpE1ztzPVU9qg4i8ZC0WNguJiGtrNUG9iWlT5bzlaSp52iGQH975stZBWj844hh8WevXGmqbmkaUcIKWuNAADpz1zDlS6rQ8AbnknNiHQDBzCmxMqQF1Go8QYT7i85ai3diQ4ZCZBfMwZDZD'

var app = express()

app.use(bodyParser.json())

app.listen(3000, function(){
        console.log('Server listen localhost:3000')
})

app.get('/', function(req, res){
        res.send('Abriendo el puerto desde local')

})


app.get('/webhook', function(req, res){
	if(req.query['hub.verify_token'] === 'hello_token'){
	res.send(req.query['hub.challenge'])
}else{
	res.send("Tu no tienes que estar aqui")
	}
})

app.post('/webhook', function(req, res){
	var data = req.body
	if(data.object == 'page'){
	data.entry.forEach(function(pageEntry){
	pageEntry.messaging.forEach(function(messagingEvent){
	if(messagingEvent.message){
	var senderID = messagingEvent.sender.id
	var messageText = messagingEvent.message.text
	var messageData = {
	recipient :{
	id: senderID
},
	message: 
{

	text: 'Solo se repetir: '+messageText}

}
	request({
		uri: 'https://graph.facebook.com/v2.6/me/messages',
		qs: {access_token: APP_TOKEN},
		method: 'POST',
		json: messageData
		}, function(error, response, data){
			if(error)
			console.log('No es posible enviar el mensaje')
			else
			console.log('Mensaje enviado')
})
		}	
	})
})
}
	res.sendStatus(200)
})
