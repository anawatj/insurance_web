/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


app.controller('motorModalCtrl',function(
          $scope,
        $http,
        $q,
        $pageUtils,
        $modalInstance,
        params,
        $modal
        )
{
    $scope.model={};
    $scope.occupations=[];
    $scope.nationalities=[];
    $scope.provinces=[];
    $scope.amphurs=[];
    $scope.districts=[];
    $scope.init=function()
    {
        
    };
});