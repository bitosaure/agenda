'use strict';

angular.module('eklabs.angularStarterPack.calendrier')
    .directive('calendrier',function($log){
        return {
            templateUrl : 'eklabs.angularStarterPack/modules/calendrier/directives/calendrier/calendrierFormView.html',
            scope : {
                user        : '=',
                callback    : '=?'
            },link : function(scope){
                scope.eventSources = [];
                

                /**
                 * 
                 */
                scope.$watch('user', function(myUser){
                    scope.myUser = myUser;
                });


                /**
                 * Default Actions
                 * @type {{onValid: default_actions.onValid}}
                 */
                var default_actions = {
                  onValid : function(user){
                      $log.info('my user is : ',user)
                    }
                };

                /**
                 * Catch Callback
                 */
                scope.$watch('callback', function(callback){
                    if(callback instanceof Object){
                        scope.actions = angular.extend({},default_actions,callback);
                    }else{
                        scope.actions = default_actions;
                    }
                });

            }
        }
    });