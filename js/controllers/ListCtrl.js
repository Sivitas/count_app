angular.module(appName).controller('ListCtrl', ['$scope', 'Counter', function($scope, Counter) {
    $scope.test = 123;
    $scope.items = Counter.getList(1);
}]);

