
// // Load YouTube Player API asynchronously
// var tag = document.createElement('script');
// tag.src = 'https://www.youtube.com/iframe_api';
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// // YouTube Player API callback
// var player;
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player-container', {
//     videoId: 'ivcK7xa8Vzk', // Replace with the actual YouTube video ID
//     playerVars: {
//       autoplay: 0, // Disable autoplay
//       controls: 1, // Show video controls
//       modestbranding: 1, // Hide YouTube logo
//       rel: 0, // Hide related videos
//     },
//     events: {
//       'onReady': onPlayerReady,
//     },
//   });
// }

// // Resize the video player when the window is resized
// window.onresize = function() {
//   resizePlayer();
// };

// // Called when the YouTube video player is ready
// function onPlayerReady(event) {
//   resizePlayer();
// }

// // Resize the YouTube video player to fit the container
// function resizePlayer() {
//   var container = document.getElementById('player-container');
//   var width = container.offsetWidth;
//   var height = (width / 16) * 9; // Assuming 16:9 aspect ratio
//   player.setSize(width, height);
// }
