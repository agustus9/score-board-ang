const getRandomNumber = () => {
  return Math.ceil(Math.random() * 10);
}

angular
  .module("scoreboardApp", [])
  .controller("mainController", ($scope) => {
    $scope.team1Score =0 ;
   
    

    $scope.updateTeam1Score = () => {
      $scope.team1Score++;
    }

    $scope.team2Score =0 ;
    $scope.updateTeam2Score = () => {
      $scope.team2Score++;
    }
    
    $scope.team1Name = "";
    $scope.updateTeam1Name = () => {
      $scope.displayTeam1Name = $scope.name;
      // $scope.team1Name = $scope.updateTeam1Name;
    }

    $scope.displayTeam2Name = "";
    $scope.updateTeam2Name = () => {
      // $scope.displayTeam1Name = $scope.name;
      $scope.displayTeam2Name = $scope.updateTeam2Name;
    }
    // $scope.updatTeam1Score = 0;
    // $scope.addNumber = () => {
    //   $scope.addNumber.push(updateTeam1Score);
    // }

    // $scope.updatTeam2Score = 0;
    // $scope.addNumber = () => {
    //   $scope.addNumber.push(updateTeam2Score);
    // }
  }
  );