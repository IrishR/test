var testEngeen = angular.module('testEngeen', []);

testEngeen.controller('mainController', ['$scope', 'directives', function ($scope, directives) {
       

        $scope.viewWindow = function (attr, $index) { // открыть окно просмотра текущей записи в таблице
            $scope.del = {};
            $scope.currLook = $scope.codifiers[$index];
             $scope.currLook.index = $index;
             if($scope.currLook.numb == undefined){
                 $scope.del.response = 'no';
             }
        };

        

        $scope.getCodifire = function () {
            $scope.currUrl = 'admin/ecb/codifiers';
            if ($scope.alreadyCode == undefined) {
                reqSend.get($scope)
                        .then(function (tasks) {
                            $scope.currCodifier = tasks.data;
                            $scope.alreadyCode = true;
                        }, function (tasks) {
                            tasks.errorMsg ? alert(tasks.errorMsg) : alert('К сожалению не удалось получить информацию. Повторите пожалуйста попытку позже.');
                        });


            }
            $scope.getPattern();
        };

       
    }]);