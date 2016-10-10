// An Alexa Skill's lifecycle lasts **One Session** which has three parts:
// New Session
//   -LaunchRequest: Invocation name
//   -IntentRequest: Intents
//   -SessionEndRequest: Exiting the skill

//Signature for  Lambda function. Requied for all skills
exports.handler = (event, context) => {
  if(event.session.new)
    console.log("NEW SESSION")

//Do different actions depending if event is: Launch Request, Intent Request, or Session End
switch(event.request.type){

  case: "LaunchRequest":
    console.log(`LAUNCH REQUEST`)
    break;

  case: "IntentRequest":
    console.log(`INTENT REQUEST`)
    //This is where all the Intents go
    switch(event.request.intent.name){
    case: "/*AnIntent*/"
    //If the
    context.succeed(
                  generateResponse(
                    buildSpeechletResponse(`Current view count is ${viewCount}`, true),
                    {}
                  )
    break;

    default:
    break;    
}
  case "SessionEndedRequest":
        // Session Ended Request
        console.log(`SESSION ENDED REQUEST`)
        break;


  default:
    context.fail(`INVALID REQUEST TYPE: ${event.request.type}`)
}

}

//Helpers:
buildSpeechletResponse = (outputText, shouldEndSession) => {

  return {
    outputSpeech: {
      type: "PlainText",
      text: outputText
    },
    shouldEndSession: shouldEndSession
  }

}

generateResponse = (speechletResponse, sessionAttributes) => {

  return {
    version: "1.0",
    sessionAttributes: sessionAttributes,
    response: speechletResponse
  }

}
