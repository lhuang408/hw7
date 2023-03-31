var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

console.log("Page load")
video = document.getElementById("player1");
video.autoplay = false;
console.log("Auto play is set to false")
video.loop = false;
console.log("Loop is set to false")
video.load();

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
	document.querySelector("#volume").textContent = document.querySelector("#slider").value + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate - 0.1;
	console.log("Slow down");
	console.log("Speed: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate + 0.1;
	console.log("Speed up");
	console.log("Speed: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime = video.currentTime + 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Skip Ahead");
	console.log("Time: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (document.querySelector("#mute").innerHTML == "Mute") { 
		document.querySelector("#mute").innerHTML = "Unmute";
		video.muted = true;
		console.log("Muted");
	} else {
		document.querySelector("#mute").innerHTML = "Mute";
		video.muted = false;
		console.log("Unmuted");
	}
});

document.querySelector("#slider").oninput = function() {
	video.volume = document.querySelector("#slider").value * 0.01;
	console.log("Changed Volume");
	document.querySelector("#volume").textContent = document.querySelector("#slider").value + "%";
}

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Old School");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Original");
});

