function shout(string) {
  uppercase = string.toUpperCase()
  string = uppercase
}

function whisper(string){
  lowercase = string.toLowerCase()
  string = lowercase
}

function logShout(string){
  uppercase = string.toUpperCase()
  string = uppercase
  return console.log(uppercase)
}

function logWhisper(){
  lowercase = string.toLowerCase()
  string = lowercase
  return console.log(lowercase)
}

function sayHiToGrandma(){
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
