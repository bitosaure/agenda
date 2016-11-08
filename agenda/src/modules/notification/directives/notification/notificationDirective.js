'use strict';

angular.module('eklabs.angularStarterPack.notification')
    .directive('notification',function($log){
        return {
            templateUrl : 'eklabs.angularStarterPack/modules/notification/directives/notification/notificationView.html',
            scope : {

            },link : function(scope, notification){

                scope.showUnreaded = true;
                scope.showReaded = false;

                scope.changeVisibility = function(b) {

                    //Si b est égal à true, on se focalise sur les notifications non vue
                    if(b){
                        if(scope.showUnreaded)
                            scope.showUnreaded = false;
                        else
                            scope.showUnreaded = true;
                    }else{
                        if(scope.showReaded)
                            scope.showReaded = false;
                        else
                            scope.showReaded = true;
                    }

                };

                scope.notifications = notification.getNotifications();


            }
        }
    });