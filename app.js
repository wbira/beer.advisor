var config = require('./config.json'),
    botbuilder = require('botbuilder'),
    connector = new botbuilder.ConsoleConnector().listen(),
    bot = new botbuilder.UniversalBot(connector),
    recognizer = new botbuilder.LuisRecognizer(config.luisModelUrl),
    dialog = new botbuilder.IntentDialog({ recognizers: [recognizer] });


bot.dialog('/', dialog);
dialog.matches('FindBrewery', [
    function (session, args, next) {
        var brewery = botbuilder.EntityRecognizer.findEntity(args.entities, 'Brewery');
        console.log(args);        
    }
]);

dialog.matches('FindBeer', [
    function (session, args, next) {
        var beer = botbuilder.EntityRecognizer.findEntity(args.entities, 'Beer');
        console.log(args);
    }
]);

dialog.onDefault(botbuilder.DialogAction.send("Sorry, I didn't understand you."));


