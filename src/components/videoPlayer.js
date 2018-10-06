angular.module('video-player')

.component('videoPlayer', {
  templateUrl: "src/templates/videoPlayer.html",
  controller: function videoPlayerController() {
    this.video = window.exampleVideoData[0];
  }
});
  