'use strict';

angular.module('eklabs.angularStarterPack.event')
    .directive('event', function($log, listEventFactory, personFactory){
        return {
            templateUrl : 'eklabs.angularStarterPack/modules/event/directives/event/eventView.html',
            scope : {
                user        : '=',
                callback    : '=?'
            },link : function(scope){
                scope.case = 0;
                scope.update_event = false;

                listEventFactory.eventList().then(function(events){
                    scope.events = events;
                });

                scope.loadEvent = function(event_id){
                    listEventFactory.getEventById(event_id).then(function(event){
                        scope.event = event;
                        scope.case = 1;
                    });
                };

                scope.loadEvents = function(){
                    listEventFactory.eventList().then(function(events){
                        scope.events = events;
                    });
                };

                scope.createEvent = function(){
                    event.create();
                }

                scope.openFormCreateEvent = function(){
                    personFactory.getAll().then(function(persons){
                        scope.attendee_list = persons;
                        scope.case = 2;
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