/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


app.controller('motorMainCtrl',
        function ($scope,
                $http,
                $pageUtils,
                $dialogUtils,
                config,
                $modal,
                $q)
        {
            $scope.type = {};
            $scope.model = {brand: {id: 0}, model: {id: 0}, year: 2015};
            $scope.brands = [];
            $scope.models = [];
            $scope.init = function ()
            {
                $scope.urlParameter = $pageUtils.getUrlVars();
                $scope.type = $scope.urlParameter.type;
                $http.get(url + "common/getListBrand")
                        .success(function (data)
                        {
                            $scope.brands = data;
                        });
            };
            $scope.brandChange = function (brandId)
            {
                $http.get(url + "common/getListModel", {params: {id: brandId}})
                        .success(function (data)
                        {
                            $scope.models = data;
                        })
            };
            $scope.buyMotor = function ()
            {
                var modalInstance = $modal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: url + "motor/modal",
                    controller: 'motorModalCtrl',
                    size: 'lg',
                    resolve: {
                        params: function () {
                            return {};
                        }
                    }
                });

                modalInstance.result.then(function (selectedItem) {
                
                });
            }

        }
);