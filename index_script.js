function greet()
{
  var username = document.getElementById("username").value;
  speech(username);
  document.getElementById("des").innerHTML = "Hello " + username +"! Ready for the Halloween season?";
  document.getElementById("nameform").style.display="none";        
  document.getElementById("button").style.display="visible";
  document.getElementById("des").style.display="";
  document.getElementById("button").style.visibility="visible";
  return false;
}

function speech(username)
{
  var voices = speechSynthesis.getVoices();
  var msg = new SpeechSynthesisUtterance();
  msg.voice = voices[17];
  msg.rate = 1;
  msg.pitch = 1.3;
  msg.text = "Hello " + username + "! Ready for the Halloween season?";
  window.speechSynthesis.speak(msg);
}