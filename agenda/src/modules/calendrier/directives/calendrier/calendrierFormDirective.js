'use strict';
/**
 * directive calendrier
 */
angular.module('eklabs.angularStarterPack.calendrier')
    .directive('calendrier',function($log, uiCalendarConfig,$compile,$timeout,calendrierService){
        return {
            templateUrl : 'eklabs.angularStarterPack/modules/calendrier/directives/calendrier/calendrierFormView.html',
            scope : {
                eventSources : '=?',
                callback    : '=?',
                render : '=?',
                json      : '=?',
                dateDeb : '=?',
                dateFin : '=?',
                index : '=?'
            },
            // la fonction est appelée lorsque le lien est fait entre l element et la scope
            link : function(scope){

                /***
                 * propriété permettant de savoir si le case json est coché
                 * @type {boolean}
                 */
                var bjson = false;
                /**
                 * propriété permettant de savoir si le case callback est coché
                 * @type {boolean}
                 */
                var bcallback = false;

                /**
                 * fonctions permettant d afficher les evenements dans le calendrier suivant le case qui est coché
                 *
                 * @type {{erase: calendar_actions.erase, remote: calendar_actions.remote, local: calendar_actions.local}}
                 */
                var calendar_actions = {

                    /**
                     * fonction appelé lorsqu on coche le case defaut case, on enleve les evenements du calendrier
                     */
                    erase : function(){
                        if(scope.eventSources)
                            if(!bcallback && !bjson)
                                scope.eventSources = undefined;
                    },
                    /**
                     * fonction appelée lorsqu on coche le case call api , on va recuperer les evenements sur l'api suivant si la date de fin et date de debut sont renseignés
                     */
                    remote : function(){
                            calendrierService.getEventsCalendarParametrableDateDebut(scope.dateDeb,scope.dateFin).then(function(response){
                            scope.eventSources =  [
                                { events :response}];
                            });
                    },
                    /**
                     * fonction appelée lorsqu on coche le case json, on affiche les evenements de la variable json
                     * @param json
                     */
                    local : function(json){
                        scope.eventSources = json;
                    }
                };
                /**
                 * Check if json in params
                 * on appelle la fonction local de calendar actions si le case json est coché
                 * on appelle la fonction erase de calendar actions si on decoche le case json
                 */
                scope.$watch('json', function(json){
                    if(json){
                        bjson = true;
                        calendar_actions.local(json);
                    }else{
                        bjson = false;
                        calendar_actions.erase();
                    }
                });

                /**
                 * Check if callback in params
                 *  on appelle la fonction remote de calendar actions si le case call api est coché
                 * on appelle la fonction erase de calendar actions si on decoche le case callback
                 */
                scope.$watch('callback', function(callback){
                    if(callback){
                        bcallback = true;
                        calendar_actions.remote();
                    }else{
                        bcallback = false;
                        scope.currentEvent = undefined;
                        calendar_actions.erase();
                    }
                });
                /**
                 * Check if datedeb in params
                 *  on appelle la fonction remote de calendar actions si le case call api est coché
                 *  cela va permettre d actualiser les evenements selon la date de debut qui a changé
                 *
                 */
                scope.$watch('dateDeb',function(dateDebut){
                    scope.dateDeb = dateDebut;
                    if(bcallback) {
                        calendar_actions.remote();
                    }
                });
                /**
                 * Check if datefin in params
                 *  on appelle la fonction remote de calendar actions si le case call api est coché
                 *  cela va permettre d actualiser les evenements selon la date de fin qui a changé
                 */
                scope.$watch('dateFin',function(dateFin){
                    scope.dateFin = dateFin;
                    if(bcallback) {
                        calendar_actions.remote();
                    }
                });
                /**
                 * Watch permet de detecter des changements de données sur la variable index
                 */
                scope.$watch('index',function(index){
                    scope.index = index;
                });

                /* Change View */
                scope.changeView = function(view,calendar) {
                    uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
                };


                /* render calendar */
                scope.renderCalender = function(calendar) {
                    if(uiCalendarConfig.calendars[calendar]){
                        uiCalendarConfig.calendars[calendar].fullCalendar('render');
                    }
                };
                /* alert on eventClick */
                scope.alertOnEventClick = function( date, jsEvent, view){
                    if(scope.index==2){
                        scope.currentEvent = date;
                    }
                    scope.alertMessage = (date.title + ' was clicked ');
                };
                /* alert on Drop */
                scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view){
                    scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
                };
                /* alert on Resize */
                scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view ){
                    scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
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
                    scope.events.push({
                        title: 'Salut toto',
                        start: new Date(y, m, 28),
                        end: new Date(y, m, 29),
                        className: ['salut_toto']
                    });
                };
                /* remove event */
                scope.remove = function(index) {
                    scope.events.splice(index,1);
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
                    $compile(element)(scope);

                };

                /**
                 * Configuration du calendrier
                 */
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


                /**
                 * Watch permet de detecter des changements de données sur la variable eventSources
                 */
                scope.$watch('eventSources', function(events){
                    scope.isAvailable = false;
                    $timeout(function(){
                        scope.$apply(function(){
                            scope.isAvailable = true;
                        })
                    },0)
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
                 * Watch permet de detecter des changements de données sur la variable render
                 */
                scope.$watch('render', function(render){
                    console.log(render);
                    scope.renderCalender();
                })





            }
        }
    });