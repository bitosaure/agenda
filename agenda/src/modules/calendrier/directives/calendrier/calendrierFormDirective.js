'use strict';

angular.module('eklabs.angularStarterPack.calendrier')
    .directive('calendrier',function($log){
        return {
            templateUrl : 'eklabs.angularStarterPack/modules/calendrier/directives/calendrier/calendrierFormView.html',
            scope : {
                eventSources : '=?',
                callback    : '=?'

            },link : function(scope, compile,uiCalendarConfig){
                var date = new Date();
                var d = date.getDate();
                var m = date.getMonth();
                var y = date.getFullYear();

                scope.calEventsExt = {
                    color: '#f00',
                    textColor: 'yellow',
                    events: [
                        {type:'party',title: 'Lunch',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
                        {type:'party',title: 'Lunch 2',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
                        {type:'party',title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
                    ]
                };


                /* Change View */
                scope.changeView = function(view,calendar) {
                    uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
                };
                /* Change View */
                scope.renderCalender = function(calendar) {
                    if(uiCalendarConfig.calendars[calendar]){
                        uiCalendarConfig.calendars[calendar].fullCalendar('render');
                    }
                };


                /* alert on eventClick */
                scope.alertOnEventClick = function( date, jsEvent, view){
                    $scope.alertMessage = (date.title + ' was clicked ');
                };
                /* alert on Drop */
                scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view){
                    $scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
                };
                /* alert on Resize */
                scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view ){
                    $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
                };
                /* add and removes an event source of choice */
                scope.addRemoveEventSource = function(sources,source) {
                    var canAdd = 0;
                    angular.forEach(sources,function(value, key){
                        if(sources[key] === source){
                            sources.splice(key,1);
                            canAdd = 1;
                        }
                    });
                    if(canAdd === 0){
                        sources.push(source);
                    }
                };
                /* add custom event*/
                scope.addEvent = function() {
                    $scope.events.push({
                        title: 'Open Sesame',
                        start: new Date(y, m, 28),
                        end: new Date(y, m, 29),
                        className: ['openSesame']
                    });
                };
                /* remove event */
                scope.remove = function(index) {
                    $scope.events.splice(index,1);
                };
                /* Change View */
                scope.changeView = function(view,calendar) {
                    uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
                };
                /* Change View */
                scope.renderCalender = function(calendar) {
                    if(uiCalendarConfig.calendars[calendar]){
                        uiCalendarConfig.calendars[calendar].fullCalendar('render');
                    }
                };






                /* Render Tooltip */
                scope.eventRender = function( event, element, view ) {
                    element.attr({'tooltip': event.title,
                        'tooltip-append-to-body': true});
                    compile(element)(scope);
                };
                //scope.uiConfig.calendar.dayNames = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
                //scope.uiConfig.calendar.dayNamesShort = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];



                //scope.eventSources = [scope.calEvents,scope.calEvents2];
                console.log("Bonjour");
                console.log(scope.events);

                scope.uiConfig = {
                    calendar:{
                        monthNames:["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"],
                        dayNames : ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
                        dayNamesShort : ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
                        height: 450,
                        editable: true,
                        header:{
                            left: 'month agendaWeek basicDay ',
                            center: 'title',
                            right: 'today prev,next'
                        },
                        eventClick: scope.alertOnEventClick,
                        eventDrop: scope.alertOnDrop,
                        eventResize: scope.alertOnResize,
                        eventRender : scope.eventRender
                    }
                };

                /*
                scope.eventSources = [

                    // your event source
                    {
                        events: [ // put the array in the `events` property
                            {
                                title  : 'event1',
                                start  : '2016-1-01'
                            },
                            {
                                title  : 'event2',
                                start  : '2016-11-05',
                                end    : '2016-11-07'
                            },
                            {
                                title  : 'event3',
                                start  : '2016-11-09T12:30:00',
                            }
                        ],
                        color: 'black',     // an option!
                        textColor: 'yellow' // an option!
                    }

                    // any other event sources...

                ];
                */
                //scope.eventSources = [scope.events,scope.events];
                console.log("test event sources "+scope.eventSources);
                /**
                 * 
                 */
                scope.$watch('eventSources', function(events){
                    scope.eventSources = events;
                });
                console.log("event dans directive "+scope.events);


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