angular.module("video-player").service("youTube", function($http) {
  // TODO

  this.youtubeSearch = function(searchQuery, callback) {
    console.log("My Search:", searchQuery);
    let query = {
      key: window.YOUTUBE_API_KEY,
      maxResults: 5,
      order: "viewCount",
      type: "video",
      q: searchQuery,
      part: "snippet",
      embeddable: true
    };
    return $http({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: query
    }).then(
      function success(response) {
        console.log(response);
        callback(response.data.items);
      },
      function error(response) {
        console.log("You idiot", response);
      }
    );
  };
});
