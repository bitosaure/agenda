'use strict';

angular.module('eklabs.angularStarterPack.notification')
    .directive('notification',function($log, notificationService){
        return {
            templateUrl : 'eklabs.angularStarterPack/modules/notification/directives/notification/notificationView.html',
            scope : {
                callback    : '=?',
                json      : '=?'
            },link : function(scope){

                var bjson = false;
                var bcallback = false;

                var notification_actions = {
                    erase : function(){
                        if(scope.notifications)
                                if(!bcallback && !bjson)
                                    scope.notifications = undefined;
                    },

                    remote : function(){
                        notificationService.getNotifications().then(function(response){
                            scope.notifications = response;
                        });
                    },

                    local : function(json){
                        scope.notifications = json;
                    }


                };

                scope.$watch('json', function(json){
                        if(json){
                            bjson = true;
                            notification_actions.local(json);
                        }else{
                            bjson = false;
                            notification_actions.erase();
                        }
                });

                
                scope.$watch('callback', function(callback){
                    if(callback){
                        callback.valid();
                        bcallback = true;
                        notification_actions.remote();
                    }else{
                        bcallback = false;
                        notification_actions.erase();
                    }
                });


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



            }
        }
    });