angular
  .module("video-player")

  .component("search", {
    templateUrl: "src/templates/search.html",
    bindings: {
      result: "<",
      search: "<"
    },
    controller: function() {}
  });
