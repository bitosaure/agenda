/**
 * AngularJS Starter Pack
 * @version v0.2.3-dev-2016-11-08
 * @link 
 */

'use strict';

angular.module('eklabs.angularStarterPack.jsonEditor',[
    'ui.ace'
]);
'use strict';

angular.module('eklabs.angularStarterPack.jsonEditor')
    .directive('demoJsonEditor', ['$log',function($log){
        return {
            templateUrl : 'eklabs.angularStarterPack/modules/json-editor/directives/editor/view.html',
            scope : {
                json        : '=?',
                callback    : '=?',
                options     : '=?',
                listeners   : '=?',
                height      : '=?'
            },link : function(scope){

                // -------------------------------------------------------------------------------------------------
                // --- OPTIONS
                // -------------------------------------------------------------------------------------------------
                scope.$watch('options', function(options){
                    // TODO - NO OPTIONS YET
                });

                // -------------------------------------------------------------------------------------------------
                // --- CALLBACK
                // -------------------------------------------------------------------------------------------------
                /**
                 * Default action of our directive
                 * @type {{valid: default_actions.valid}}
                 */
                var default_actions = {
                    valid : function(json){
                        $log.info('Valid JSON on demoJsonEditor directive',json);
                    }
                };
                /**
                 * Check if callback in params
                 */
                scope.$watch('callback', function(callback){
                    if(callback){
                        scope.actions = angular.extend({},default_actions,callback);
                    }else{
                        scope.actions = default_actions
                    }
                });

                // -------------------------------------------------------------------------------------------------
                // --- LISTENERS
                // -------------------------------------------------------------------------------------------------
                /**
                 * Default listeners for the directive
                 * @type {{onErrors: default_listeners.onErrors}}
                 */
                var default_listeners = {
                    onError : function(editorError){
                        //$log.error(editorError);
                    }
                };

                /**
                 * Check if a listener as params
                 */
                scope.$watch('listeners', function(listeners){
                    if(listeners){
                        scope.listener = angular.extend({},default_listeners,listeners);
                    }else{
                        scope.listener = default_listeners;
                    }
                });

                /**
                 * Errors
                 * Catch Error and send back
                 */
                scope.$watch('editorError', function(errors){
                    if(errors){
                        scope.listener.onError(errors);
                    }
                });

                // -------------------------------------------------------------------------------------------------
                // --- JSON
                // -------------------------------------------------------------------------------------------------
                scope.$watch('json', function(json){
                    scope.aceAvailable = false;

                    if(!json){
                        // --- Default json
                        scope.aceModel =  '{\n\t\n}';
                    }else{
                        scope.aceModel = scope.convertRequestParamsToJson(json);
                    }
                    scope.loadAce = moment().valueOf();
                });

                // -------------------------------------------------------------------------------------------------
                // --- JSON EDITOR
                // -------------------------------------------------------------------------------------------------
                /**
                 * Trigger to load ace editor
                 */
                scope.$watch('loadAce',function(loadAce){
                    scope.aceOption = {
                        mode: 'json',
                        require: ['ace/ext/language_tools'],
                        theme: 'chrome',
                        onLoad: function (_ace) {
                            var _session = _ace.getSession();

                            _session.on('changeAnnotation', function(){

                                var annot = _ace.getSession().getAnnotations();

                                if(!annot.length){
                                    scope.editorError = false;
                                    // --- transform and send to temp variable
                                    scope.currentJson = scope.convertToJson(_ace.getValue());
                                }else{
                                    // ---- Error on the model
                                    scope.editorError = annot[0];
                                }
                            } )
                        }
                    };
                    scope.aceAvailable = true;
                });

                /**
                 * Transforms params request attribute as valid json ;)
                 * @param params
                 * @returns {string}
                 */
                scope.convertRequestParamsToJson = function(params){

                    if(Array.isArray(params)){
                        var myJson = {};

                        angular.forEach(params, function(element){
                            myJson[element.key] = element.value;
                        });

                        return scope.convertToAce(myJson);

                    }else{
                        return scope.convertToAce(params);
                    }
                };
                /**
                 * Build params for functionality from ace
                 * @param json
                 */
                scope.convertAceToParams    = function(json,parent){

                    var myParams = [];

                    angular.forEach(json, function(value,key){
                        if(value instanceof Object){
                            myParams = myParams.concat(scope.convertAceToParams(value),parent+'.'+key);
                        }else{
                            myParams.push({
                                key :  (parent) ? parent+key : key,
                                value : value
                            })
                        }
                    });

                    return myParams;

                };


                /**
                 * Method to render well or params
                 * @param json
                 * @returns {string}
                 */
                scope.convertToAce = function(json){

                    var transform       = "",
                        previousChar    = "",
                        tabs            = [],
                        jsonString      = JSON.stringify(json);

                    angular.forEach(jsonString, function(char){
                        if(char == '{'){
                            tabs.push("\t");
                            transform += char + '\n'+tabs.join("");
                        }else if(char == ',' && (previousChar == '"'|| previousChar == 'e' || previousChar == 'd')){
                            transform += char + '\n'+tabs.join("");
                        }else if(char == '}'){
                            tabs.splice(0,1);
                            transform += '\n' +tabs.join("")+ char;
                        }else{
                            transform += char
                        }
                        previousChar = char;
                    });

                    return transform;
                };

                /**
                 * Little method to transform edited
                 * @param value
                 * @returns {*}
                 */
                scope.convertToJson = function(value){
                    if(!value){
                        return undefined
                    }else if(value instanceof Object){
                        return value;
                    }else{
                        return JSON.parse(value);
                    }
                };

                // -------------------------------------------------------------------------------------------------
                //                                                                                               CSS
                // -------------------------------------------------------------------------------------------------
                scope.$watch('height', function(height){
                    scope.currentHeight        = (height-20) || 800;
                    scope.maxHeightContainer    = height - 45;
                });
                //scope.aceMaxHeight = 260; //todo
                
                
            }
        }
    }]);
'use strict';

angular.module('eklabs.angularStarterPack.forms',[
    
]);
'use strict';

angular.module('eklabs.angularStarterPack.forms')
    .directive('myForm',function($log){
        return {
            templateUrl : 'eklabs.angularStarterPack/modules/forms/directives/my-form/myFormView.html',
            scope : {
                user        : '=',
                callback    : '=?'
            },link : function(scope){

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
'use strict';

angular.module('eklabs.angularStarterPack.calendrier',[
    'ui.calendar'

]);
'use strict';

angular.module('eklabs.angularStarterPack.calendrier')
    .directive('calendrier',function($log){
        return {
            templateUrl : 'eklabs.angularStarterPack/modules/calendrier/directives/calendrier/calendrierFormView.html',
            scope : {
                user        : '=',
                callback    : '=?'
            },link : function(scope, compile,uiCalendarConfig,timeout){
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

                scope.events = [
                    {id: 999,title: 'Repeating Event',start: new Date(2016, 11, 17 - 3, 16, 0),allDay: false},
                    {id: 998,title: 'Repeating Event',start: new Date(2016,11, 24, 16, 0),allDay: false},
                    {title: 'Birthday Party',start: new Date(2016, 11, 25+ 1, 19, 0),end: new Date(2016, 11, 25, 22, 30),allDay: false},
                    {title: 'Click for Google',start: new Date(2016, 11, 28),end: new Date(2016, 11, 29),url: 'http://google.com/'}
                ];
                scope.eventSources= [scope.events];

                scope.changeTo = 'French';

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

                scope.calEvents = {
                    color: '#f00',
                    events: [
                        {type:'party',title: 'Lunch',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
                        {type:'party',title: 'Lunch',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
                        {type:'party',title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
                    ]
                };

                scope.calEvents2 =[
                    {className: 'green',type:'test',title: 'Lunch',start: new Date(y, m, d + 1, 12, 0),end: new Date(y, m, d + 1, 14, 0),allDay: false},
                    {className: 'green',type:'test',title: 'Lunch',start: new Date(y, m, d + 1, 12, 0),end: new Date(y, m, d + 1, 14, 0),allDay: false},
                    {className: 'green',type:'test',title: 'Click for Google',start: new Date(y, m, 26),end: new Date(y, m, 26),url: 'http://google.com/'}
                ];

                scope.eventSources.push(scope.calEvents2);
                console.log("Bonjour");
                console.log(scope.eventSources);

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
                scope.$watch('eventSources', function(eventSources){
                    scope.eventSources = eventSources;
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
                        eventClick: scope.alertEventOnClick,
                        eventDrop: scope.alertOnDrop,
                        eventResize: scope.alertOnResize
                    }
                };

            }
        }
    });
'use strict';

angular.module('eklabs.angularStarterPack.forms')
    .directive('myForm',function($log){
        return {
            templateUrl : 'eklabs.angularStarterPack/modules/forms/directives/my-form/myFormView.html',
            scope : {
                user        : '=',
                callback    : '=?'
            },link : function(scope){

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
'use strict';

angular.module('eklabs.angularStarterPack.notification',[
    
]);
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
'use strict';

angular.module('eklabs.angularStarterPack.event',[
    
]);
'use strict';

angular.module('eklabs.angularStarterPack.event')
    .directive('event',function($log){
        return {
            templateUrl : 'eklabs.angularStarterPack/modules/event/directives/event/eventView.html',
            scope : {
                user        : '=',
                callback    : '=?'
            },link : function(scope){

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
'use strict';

angular.module('eklabs.angularStarterPack.forms')
    .directive('myForm',function($log){
        return {
            templateUrl : 'eklabs.angularStarterPack/modules/forms/directives/my-form/myFormView.html',
            scope : {
                user        : '=',
                callback    : '=?'
            },link : function(scope){

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
'use strict';

angular.module('eklabs.angularStarterPack',[
    'eklabs.angularStarterPack.jsonEditor',
    'eklabs.angularStarterPack.forms',
    'eklabs.angularStarterPack.calendrier',
    'eklabs.angularStarterPack.event',
    'eklabs.angularStarterPack.notification'
]);
/**
 * Created by emilie on 08/11/2016.
 */
angular.module('eklabs.angularStarterPack.calendrier')
    .service("calendrierService", function(params){

        this.getEvents = function(params){};
    });
    
'use strict';

angular.module('eklabs.angularStarterPack')
    .factory('$config', ['WEBAPP_CONFIG',function(WEBAPP_CONFIG){

        var parameters = angular.extend({}, WEBAPP_CONFIG);

        return {
            get: function (name) {
                return parameters[name];
            }
        }
    }]);
'use strict';

angular.module('eklabs.angularStarterPack.event')
    .service("eventService", function(params){

        this.createEvent = function(params){};
        this.updateEvent = function(params){};
        this.deleteEvent = function(params){};
        this.addParticipant = function(params){};
        this.deleteParticipant = function(params){};
        this.joinEvent = function(params){};
        this.unsubscribe = function(params){};
        this.acceptInvitation = function(params){};
        this.refuseInvitation = function(params){};
        this.getEvent = function(params){};
        
});

'use strict';

angular.module('demoApp')
    .service('notification', function() {

        this.getNotifications = function () {
            $http.get('91.134.241.60:3080/ressources/Event/notification').then(function(response){
                return response.data;
            });
        };

        this.readNotification = function(idNotif) {
            $http.post('91.134.241.60:3080/ressources/Event/notification/'+idNotif).then(function(response){
                return response.data;
            });
        };







    });
/**
 * Created by maximer on 06/11/16.
 */

'use strict';

angular.module('eklabs.angularStarterPack.event')
    .factory('event', function(eventObj) {
    return {
        "name": eventObj.name,
        "image" : eventObj.image,
        "description" : eventObj.description,
        "location" : eventObj.location,
        "startDate" : eventObj.startDate,
        "endDate" : eventObj.endDate,
        "organizer" : eventObj.organizer,
        "eventStatus" : eventObj.eventStatus,
        "attendee" : eventObj.attendee,
        "visibility" : eventObj.visibility
    }
});

/**
 * Created by maximer on 03/10/16.
 */

'use strict';

angular.module('eklabs.angularStarterPack.notification')
    .factory('notification', function(notifObj) {
        return {
            "sender": notifObj.sender,
            "dateRead" : notifObj.dateRead,
            "dateSend" : notifObj.dateSend,
            "location" : notifObj.location,
            "recipient" : notifObj.recipient,
            "text" : notifObj.text,
        }
    });
