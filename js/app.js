
var butt = document.querySelector('.butt1');
butt.addEventListener('click', function() {
console.log('hello');
	document.querySelector('.divIMG').src = 'img/babun.jpg';
	document.querySelector('.divIMGa').src = 'img/babun.jpg';
});

var butt2 = document.querySelector('.butt2');
butt2.addEventListener('click', function() {

	console.log("send message");

	console.log(navigator.serviceWorker);

	//var a = navigator.serviceWorker.controller;
	//a.clearAllCache();

	navigator.serviceWorker.controller.postMessage({'clearAllCache': 'world'})
	
});





