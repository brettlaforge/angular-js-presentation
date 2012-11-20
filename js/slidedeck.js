var app = angular.module('slidedeck', []);

app.directive('body', function() {
	return {
		restrict: 'E',
		link: function(scope, element) {
			angular.element(window).bind('keydown', function(event) {
				switch (event.keyCode) {
					case 37 || 38:
						if (scope.current > 1) {
							scope.current--;
							scope.$apply();
						}
						break;
					case 39 || 40:
						if (scope.current < scope.count) {
							scope.current++;
							scope.$apply();
						}
						break;
				}
			});
		}
	}
});

app.directive('slide', function($location) {
	return {
		restrict: 'C',
		link: function(scope, element) {
			var id = ++scope.count;
			var state = 'future';
			scope.$watch('current', function(newValue) {
				$location.search('current', newValue);
				element.removeClass(state);
				switch (scope.current) {
					case (id + 1):
						state = 'previous';
						break;
					case (id):
						state = 'current';
						break;
					case (id - 1):
						state = 'next';
						break;
					default:
						state = (scope.current > id) ? 'past' : 'future';
						break;
				}
				element.addClass(state)
			});
		}
	};
});

app.controller('DeckCtrl', function($scope, $location) {

	$scope.title = 'Presentation';
	$scope.count = 0;
	
	$scope.init = function() {
		if ($location.search().hasOwnProperty('current')) {
			try {
				$scope.current = Number($location.search().current);
				return;
			} catch(derr) {}
		}
		$scope.current = 1;
	};
	
	$scope.next = function() {
		if ($scope.current < $scope.count) {
			$scope.current++;
		}
	};
	
	$scope.previous = function() {
		if ($scope.current > 1) {
			$scope.current--;
		}
	};
	
	$scope.init();
});

app.controller('SlideCtrl', function($scope) {

});
