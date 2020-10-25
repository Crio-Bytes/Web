
// Detecting mouseclick event
for(var i=1;i<=7;i++){
	document.getElementsByClassName("drum")[i-1].addEventListener("click",Clicker);	
}

// Detecting keyboard press
document.addEventListener("keypress",Keyboarder);