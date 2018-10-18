function shout(string) {
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  string.toUpperCase()
  string = uppercase
  return console.log(uppercase)
}

function logWhisper(string){
  string.toLowerCase()
  return console.log(string)
}

function sayHiToGrandma(string){
  if (string.toLowerCase() === string){
    return 'I can\'t hear you!'
  }
  if (string.toUpperCase() === string){
    return 'YES INDEED!'
  }
  if (string === 'I love you, Grandma.'){
    return 'I love you, too.'
  }
}
