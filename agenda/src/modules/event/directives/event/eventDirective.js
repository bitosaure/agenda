'use strict';

angular.module('eklabs.angularStarterPack.event')
    .directive('event', function($log, listEventFactory, personFactory, eventFactory){
        return {
            templateUrl : 'eklabs.angularStarterPack/modules/event/directives/event/eventView.html',
            scope : {
                event       : '=?'
            },link : function(scope){
                scope.case = 0;
                scope.update_event = false;

                scope.event = {
                    "name" : "PPPP",
                    "organizer" : "DDDDD",
                    "description" : "CECEC",
                    "location" : "EEEE",
                    "endDate" : new Date(),
                    "startDate" : new Date()
                };

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
                    scope.event.eventStatus = "Open";
                    scope.event.visibility = "Public";
                    scope.event.image = null;
                    console.log(scope.event.attendees);
                    var event_tmp = new eventFactory(scope.event);
                    event_tmp.create();
                }

                scope.openFormCreateEvent = function(){
                    personFactory.getAll().then(function(persons){
                        scope.attendee_list = persons;
                        scope.case = 2;
                        //scope.event = {};
                    });
                };


                scope.openFormCreateEvent();

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