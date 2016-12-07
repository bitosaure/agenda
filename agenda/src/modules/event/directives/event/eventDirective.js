'use strict';

angular.module('eklabs.angularStarterPack.event')
    .directive('event', function($log, eventService){
        return {
            templateUrl : 'eklabs.angularStarterPack/modules/event/directives/event/eventView.html',
            scope : {
                user        : '=',
                callback    : '=?'
            },link : function(scope){
                scope.case = 0;
                scope.update_event = false;

                eventService.getEvents().then(function(response){
                    console.log(response);
                    scope.events = response;
                });
                scope.loadEvents = function(){
                    eventService.getEvents().then(function(response){
                        console.log(response);
                        scope.events = response;
                    });
                };

                scope.openFormCreateEvent = function(){
                    eventService.getAttendees().then(function(response){
                        console.log(response);
                        scope.case = 2;
                        scope.event = new eventFactory();
                        scope.attendee_list =  response;
                    });
                };

                scope.createEvent = function(){
                    console.log(scope.event);
                    eventService.createEvent(scope.event).then(function(response){
                       scope.case = 0;
                    });
                };

                scope.openEvent = function(event_id){
                    console.log(event_id);
                    scope.event = scope.events[event_id];
                    scope.case = 1;
                };

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