window.onload = function() {

	var bufferLoader = new BufferLoader(
		Audio.audioContext,
		[
			"A4.mp3",
			"A5.mp3",
			"C4.mp3",
			"C5.mp3",
			"D4.mp3",
			"D5.mp3",
			"E4.mp3",
			"E5.mp3",
			"G4.mp3",
			"G5.mp3",
		],
		finishedLoading
	);
  	bufferLoader.load();

	function finishedLoading(bufferList) {
		Audio.init(bufferList);

		var canvas = document.getElementById("canvas");
		var view = new View(canvas);

		canvas.addEventListener("mousedown", view.handleClick.bind(view), false);
		setInterval(view.updateDisplay.bind(view), view.frameRate);
	}

};

