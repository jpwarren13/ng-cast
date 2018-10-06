angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    vids: '<',
    video: '<',
    onClick: '<'
  },
  templateUrl: "src/templates/videoListEntry.html",
  controller: function VideoListController(){
  }
});