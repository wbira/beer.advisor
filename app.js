var config = require('./config.json'),
    botbuilder = require('botbuilder'),
    connector = new botbuilder.ConsoleConnector().listen(),
    bot = new botbuilder.UniversalBot(connector),
    recognizer = new botbuilder.LuisRecognizer(config.luisModelUrl),
    dialog = new botbuilder.IntentDialog({ recognizers = [recognizer]});
    



