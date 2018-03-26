const getRandomNumber = () => {
  return Math.ceil(Math.random() * 10);
}

angular
  .module("scoreboardApp", [])
  .controller("mainController", ($scope) => {

    $scope.updateTeam1Score = "";
    $scope.displayTeam1Score = () => {
      $scope.updateTeam1Score = $scope.score;
    }

    $scope.updateTeam2Score = "";
    $scope.displayTeam2Score = () => {
      $scope.updateTeam1Score = $scope.score;
    }
    $scope.displayTeam1Name = "";
    $scope.updateTeam1Name = () => {
      // $scope.displayTeam1Name = $scope.name;
      $scope.displayTeam1Name = $scope.updateTeam1Name;
    }

    $scope.displayTeam2Name = "";
    $scope.updateTeam2Name = () => {
      // $scope.displayTeam1Name = $scope.name;
      $scope.displayTeam2Name = $scope.updateTeam2Name;
    }
    $scope.updatTeam1Score = 0;
    $scope.addNumber = () => {
      $scope.addNumber.push(updateTeam1Score);
    }

    $scope.updatTeam2Score = 0;
    $scope.addNumber = () => {
      $scope.addNumber.push(updateTeam2Score);
    }
  }
  );