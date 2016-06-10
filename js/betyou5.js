(function () {
	var app = angular.module('betYou5',[]);

	app.controller('GameController', ['$scope', function($scope){

		$scope.namePlayer1 = "";
		$scope.namePlayer2 = "";
		$scope.scoreP1 = 0;
		$scope.scoreP2 = 0;
		$scope.maxScore = 200;
		$scope.dice1 = 0;
		$scope.dice2 = 0;
		$scope.playerTurn = false;
		$scope.playerNameTurn = $scope.namePlayer1;
		$scope.winner = "";

		$scope.rollDice = function(){

			var newDice1 = Math.floor((Math.random() * 6) + 1);
			var newDice2 = Math.floor((Math.random() * 6) + 1);

			$scope.diceTotal = newDice1 + newDice2;

			$scope.dice1 = newDice1;
			$scope.dice2 = newDice2;
			
			

			// Change between both player and sums according it player.
			$scope.playerNameTurn = $scope.namePlayer1;
			var newPlayerTurn = false;
			
			if ($scope.playerTurn === false){
				$scope.scoreP1 = $scope.scoreP1 + $scope.diceTotal;
				newPlayerTurn = true;
				$scope.playerTurn = newPlayerTurn;
				$scope.playerNameTurn = $scope.namePlayer2;
			}
			else if ($scope.playerTurn === true){
				$scope.scoreP2 = $scope.scoreP2 + $scope.diceTotal;
				newPlayerTurn = false;
				$scope.playerTurn = newPlayerTurn;
				$scope.playerNameTurn = $scope.namePlayer1;
			}



			if ($scope.scoreP1 >= $scope.maxScore || $scope.scoreP2 >= $scope.maxScore )
			{
				$scope.mainMenu = 'stats';
			}
		}

		$scope.gameStats = function() {


			if ($scope.scoreP1 > $scope.scoreP2)
				winner = $scope.namePlayer1;
			else
				winner = $scope.namePlayer2;

			return winner;
		}

		$scope.resetGame = function(){

			$scope.scoreP1 = 0;
			$scope.scoreP2 = 0;
			$scope.maxScore = 200;
			$scope.namePlayer1 = "";
			$scope.namePlayer2 = "";
			$scope.mainMenu = 'index';
		}

		$scope.gameStats();
		$scope.resetGame();
		$scope.rollDice();
	

	}]);
})();