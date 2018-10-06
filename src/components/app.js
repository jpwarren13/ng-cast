angular
  .module("video-player")

  .component("app", {
    templateUrl: "src/templates/app.html",
    controller: function appController() {
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos ? this.videos[0] : null;
      this.onClick = function(video) {
        //console.log(this, video);

        this.currentVideo = video;
      };
      this.onClick = this.onClick.bind(this);
      this.result = function(searchQuery) {
        let query = {
          key: YOUTUBE_API_KEY,
          maxResults: 5,
          order: "viewCount",
          type: "video",
          q: searchQuery,
          part: "snippet",
          videoEmbeddable: "true",
          videoSyndicated: "true"
        };
        return $http({
          method: "GET",
          url: "https://www.googleapis.com/youtube/v3/search",
          data: query
        }).then(
          function success(response) {
            console.log(response);
            return response;
          },
          function error(response) {
            console.log("You fucking idiot", response);
          }
        );
      };
    }
  });
