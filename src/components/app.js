angular
  .module("video-player")

  .component("app", {
    templateUrl: "src/templates/app.html",
    controller: function appController(youTube) {
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
      this.onClick = video => {
        //console.log(this, video);

        this.currentVideo = video;
      };

      this.onSearch = q => {
        console.log(q);
        youTube.youtubeSearch(q, this.changeVideos);
      };
      this.changeVideos = videos => {
        console.log(videos);
        this.videos = videos;
      };
      // this.onSearch = this.onSearch.bind(this);
    }
  });
