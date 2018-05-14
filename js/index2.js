var app = angular.module("ServiceStatus", []);

app.controller("mainController", function($scope, $http) {
  var successFunction = function(response) {
    $scope.data = response;
  };

  $http
    .get(
      "https://api.tfl.gov.uk/Line/metropolitan/Status/"
    )
    .then(
      function(response, status, headers, config) {
        successFunction(response.data);
      },
      function(response) {
        errorFunction(response);
      }
    );
});

$(function() {
  $(".filters a").click(function() {
    var activeItem = $(this).parents("li");
    $(".filters li").removeClass("is-active");
    activeItem.addClass("is-active");
      
    var modeFilter = $(this).data("filter");
    $(".status .columns").hide();
    if (modeFilter == "all") {
      $(".status .columns").show();
    } else {
      $("." + modeFilter).show();
    }
  });
});