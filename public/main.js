angular
  .module("scoreboardApp", [])
  .controller("mainController", ($scope) => {

    $scope.updateScore = "";
    $scope.displayScore = () => {
      $scope.updateName = $scope.score;
    }
    $scope.displayName = "";
    $scope.updateName = () => {
      $scope.displayName = $scope.name;
    }
  }
  );