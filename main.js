window.onload = function() {
	roll();
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
		
}
function roll() {
    var today = new Date();
    var m = today.getMinutes();
    var s = today.getSeconds();
	var nm = 14 - m;
	var ns = 60 - s;
	if(ns ==60) {
	ns ="0";
	nm = nm + 1;
	}
	
	if(m>=45) {
	nm = nm+45;
	} 
	else if (m>=30) {
	nm = nm + 30;
	}
	else if (m>=15) {
	nm = nm + 15;
	}
	var nns = checkTime(ns);
	var nnm = checkTime(nm);
	
	document.getElementById("timer1").innerHTML = nnm + ":" + nns;
	setTimeout(roll,500);
}

function one() {
	document.getElementById("mainwrap").style.display = "none";
	document.getElementById("gamediv").style.animationName = "bb";
	document.getElementById("gamediv").style.display = "block";
}
function two() {
	document.getElementById("mainwrap").style.display = "none";
	document.getElementById("gamediv").style.animationName = "bb";
	document.getElementById("gamediv").style.display = "block";
}
function three() {
	document.getElementById("mainwrap").style.display = "none";
	document.getElementById("gamediv").style.animationName = "bb";
	document.getElementById("gamediv").style.display = "block";
}
function four() {
	document.getElementById("mainwrap").style.display = "none";
	document.getElementById("gamediv").style.animationName = "bb";
	document.getElementById("gamediv").style.display = "block";
}
function five() {
	document.getElementById("mainwrap").style.display = "none";
	document.getElementById("gamediv").style.animationName = "bb";
	document.getElementById("gamediv").style.display = "block";
}