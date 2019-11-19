
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

let deferredPrompt;
let btnAdd = document.querySelector('.add');

window.addEventListener('beforeinstallprompt', (e) => {
	console.log('======================================')
	e.preventDefault();

	btnAdd.style.display = 'block';
	// Stash the event so it can be triggered later.
	deferredPrompt = e;
});

btnAdd.addEventListener('click', (e) => {
	// hide our user interface that shows our A2HS button
	btnAdd.style.display = 'none';
	// Show the prompt
	deferredPrompt.prompt();
	// Wait for the user to respond to the prompt
	deferredPrompt.userChoice
		.then((choiceResult) => {
			if (choiceResult.outcome === 'accepted') {
				console.log('User accepted the A2HS prompt'); alert('YOU JUST SUPER COOL APP. CONGRATULATIONS! but not yet hehe')
			} else {
				console.log('User dismissed the A2HS prompt');
			}
			deferredPrompt = null;
		});
});
window.addEventListener('appinstalled', (evt) => {
	console.log('a2hs installed');
	alert('YOU JUST SUPER COOL APP. CONGRATULATIONS!')
});




