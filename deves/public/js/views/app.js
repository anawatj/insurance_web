/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var url = "http://localhost:8686/deves/";
var app = angular.module('deves', ['kendo.directives', 'ui.bootstrap']);
app.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function () {
                scope.$apply(function () {
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);

app.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function (file, uploadUrl) {
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        })
        .success(function () {
        })
        .error(function () {
        });
    }
}]);


app.factory('$dialogUtils', function() {
    return {
        confirm: function(str, callback) {
            bootbox.confirm({
                message: str,
                buttons: {
                    "cancel": {
                        label: "ยกเลิก"
                    },
                    "confirm": {
                        label: "ตกลง",
                        className: "btn-primary"
                    }
                },
                callback: callback
            });
        },
        alert: function(str, callback) {
            bootbox.alert(str, callback);
        },
        dialog: function(str, buttons) {
        	bootbox.dialog({
        		  message: str,
        		  title: "Shawpat",
        		  buttons: buttons
        		});
        }
    };
});

app.factory('$pageUtils', function() {
    return {
        createParamStringFromObject: function(obj) {
        	var paramString = "";
        	for(var attr in obj) {
    			if(obj.hasOwnProperty(attr)) 
    			{
    				if(obj[attr] == "" || (typeof obj[attr] === "undefined"))
    				{
    					delete obj[attr];
    				}
    			}
    		}
        	if(!(typeof obj === "undefined")) {
    			paramString = $.param( obj );	
    		}
        	return paramString;
        },
    	washValues_new:function(obj) 
    	{
    		for(var attr in obj) {
    			if(obj.hasOwnProperty(attr)) 
    			{
    				if(attr==="@id" || attr==="@ref"){
    					delete obj[attr];
    				}
    				else if ($.isArray(obj[attr]) || typeof obj[attr] === "object") {
    					this.washValues(obj[attr]);
    				}
    				else if (obj[attr]) { // <== isDefined and not null
    					if(obj[attr].hasOwnProperty("@id")) {
    						delete obj[attr]["@id"];
    					}
    					if(obj[attr].hasOwnProperty("@ref")) {
    						delete obj[attr]["@ref"];
    					}
						if (obj[attr].hasOwnProperty("id")) {
							if (obj[attr].id == "") {
								obj[attr] = undefined;
							}
						}
					}
    				else if (obj[attr] == "")
    				{
    					obj[attr] = undefined;
    				}
    			}
    		}
    	},

    	washValues:function(obj) 
    	{
    		for(var attr in obj) {
    			if(obj.hasOwnProperty(attr)) 
    			{
					if (obj[attr]) { // <== isDefined and not null
						if (obj[attr].hasOwnProperty("id")) {
							if (obj[attr].id == "") {
								obj[attr] = undefined;
							}
						}
					}
    				else if (obj[attr] == "")
    				{
    					obj[attr] = undefined;
    				}
    				
    			}
    		}
    	},
    	
    	convertDateToShow: function(date) {
    		if(date){
                return date.substring(6, 8)+"/"+date.substring(4, 6)+"/"+date.substring(0, 4);   			
    		}else {
    			return date;
    		}
        },        
    	convertStrDateToShow: function(date) {
    		return date.substring(6, 8)+"/"+date.substring(4, 6)+"/"+date.substring(0, 4);   			
        },        
        convertDateISO: function(date) {
        	if(date){
        		return new Date(date).toISOString();
        	}
        	else{
        		return undefined;
        	}
        },
    	yyyymmddToDate: function(yyyymmdd) {
    		if(yyyymmdd && yyyymmdd.length == 8){
                return new Date(yyyymmdd.substring(0, 4)+"-"+yyyymmdd.substring(4, 6)+"-"+yyyymmdd.substring(6, 8));   			
    		}else {
    			return null;
    		}
        },
        getUrlVars : function()
        {
            var vars = [], hash;
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for(var i = 0; i < hashes.length; i++)
            {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
            return vars;
        },
        getCurrentTime : function() 
        {
			var now = new Date();
			var hour = now.getHours();
			var minute = now.getMinutes();

			if (hour.toString().length == 1) {
				var hour = '0' + hour;
			}
			if (minute.toString().length == 1) {
				var minute = '0' + minute;
			}

			var dateTime = hour + ':' + minute
			return dateTime;
		}

    };
});


app.constant('config', {
	paginationSize: 5,
	pageSize: 10 
});

app.run(function($rootScope, $dialogUtils, $pageUtils) {
// $rootScope.dialogUtils = $dialogUtils;
//	$rootScope.pageUtils = $pageUtils;
});