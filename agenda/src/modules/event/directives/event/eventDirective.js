'use strict';

angular.module('eklabs.angularStarterPack.event')
    .directive('event', function($log, listEventFactory, personFactory, eventFactory){
        return {
            templateUrl : 'eklabs.angularStarterPack/modules/event/directives/event/eventView.html',
            scope : {
                eventid       : '=?'
            },link : function(scope){

                console.log(scope.eventid);
                /**
                 * Load one event from the database
                 */
                scope.loadEvent = function(event_id){
                    listEventFactory.getEventById(event_id).then(function(event){
                        if(event.id != undefined){
                            scope.event = event;
                            scope.event.setAttendeesProperties();
                            scope.case = 1;
                            scope.update_event = false;
                            personFactory.getAll().then(function(persons){
                                scope.attendee_list = persons;
                            });
                        }else{
                            scope.loadEvents();
                        }
                    });

                };

                /**
                 * Load all the events from the database
                 */
                scope.loadEvents = function(){
                    listEventFactory.eventList().then(function(events){
                        scope.events = events;
                        scope.case = 0;
                        scope.update_event = false;
                    });
                };

                /**
                 * Initialisation of the directive
                 */
                scope._init = function(){
                    if(scope.eventid == undefined){
                        scope.loadEvents();
                    }else{
                        scope.loadEvent(scope.eventid);
                    }
                }

                scope._init();

                /**
                 * Load the form to update an event
                 */
                scope.openFormUpdateEvent = function(){
                    scope.update_attendees = scope.event.getIdAttendees();
                    scope.update_event = true;
                }

                /**
                 * Load the form to create an event
                 */
                scope.openFormCreateEvent = function(){
                    personFactory.getAll().then(function(persons){
                        scope.attendee_list = persons;
                        scope.case = 2;
                        scope.event = {};
                    });
                };

                /**
                 * Create an event on database
                 */
                scope.createEvent = function(){
                    scope.event.eventStatus = "Open";
                    scope.event.visibility = "Public";
                    scope.event.image = null;
                    console.log(scope.event.attendees);
                    var event_tmp = new eventFactory(scope.event);
                    event_tmp.create().then(function(response){
                        scope.loadEvents();
                    });
                }

                /**
                 * Update an event on database
                 */
                scope.updateEvent = function(){
                    console.log(scope.update_attendees);
                    scope.event.setAttendees(scope.update_attendees);
                    console.log(scope.update_attendees);
                    scope.event.update().then(function(response){
                        scope.loadEvent(scope.event.id);
                    });
                }

                /**
                 * Delete an event on database
                 */
                scope.delete_event = function(){
                    scope.event.delete().then(function(response){
                        scope.loadEvents();
                    });
                }

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