angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    vid: '<'
  },
  templateUrl: "src/templates/videoListEntry.html",
  controller: function VideoListController(){
  }
});
