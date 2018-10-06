angular.module('video-player')
.component('videoList', {
  templateUrl: "src/templates/videoList.html",
  controller: function VideoListController(){
    this.videos = window.exampleVideoData[0]
   
  }
});
