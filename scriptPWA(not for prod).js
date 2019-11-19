//11.12.2018 
// working on:
// -ios 11 and under
// -android
// -browser apps
// -windows - to test? 


//1.add meta tags to index.html

	<!-- Add to home screen for Safari on iOS -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-title" content="Template PWA">
    <link rel="apple-touch-icon" href="img/icon-256x256.png">
    <!-- Windows -->
    <meta name="msapplication-TileImage" content="img/icon-256x256.png">
    <meta name="msapplication-TileColor" content="#2F3BA2">

//2.add service worker
	
	2.1 create file and fill it with code for manipulating data (see service-worker.js in this project);
	2.2 check if service worker is supported and register it (see index.html - end of file);

//3.add manifest.json file (see manifest.json)
//SHOULD INCLUDE:
	
	1. name 
	2. short_name : one word or several connected with '_'
	3. icons for different devices(phone,pc,browser) - must be added to appSHELL
	4. start_url - default file for project(index.html)
	5. display = fullscreen, standalone, minimal-ui, browser
	6. background_color(not sure if required)
	7. theme_color(not sure if required)


