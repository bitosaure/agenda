'use strict';

angular.module('eklabs.angularStarterPack.event')
    .directive('event', function(eventService) {
        return {
            templateUrl: 'eklabs.angularStarterPack/modules/event/directives/event/eventView.html',
            scope: {
                user: '=',
                callback: '=?'
            }, link: function (scope) {
                scope.events = eventService.getEvents();
                scope.case = 0;
                scope.update_event = false;
                //var service = eventService;
                scope.event = {
                    name: "BBQ chez Eddie",
                    startDate: "30 Septembre 2016",
                    endDate: "1 Octobre 2016",
                    description: "Big Barbecue chez Eddie",
                    organizer: "Eddie MADEVA",
                    location: "38 rue Pasteur, 77240 Vert-Saint-Denis",
                    attendees: [
                        "Eddie MADEVA",
                        "Thibault LE GRAND",
                        "Emilie PISU",
                        "Florian BESNARD"
                    ]
                };
                scope.openEvent = function (event_id) {
                    console.log(event_id);
                    scope.case = 1;
                };

                /**
                 *
                 */
                scope.$watch('user', function (myUser) {
                    scope.myUser = myUser;
                });


                /**
                 * Default Actions
                 * @type {{onValid: default_actions.onValid}}
                 */
                var default_actions = {
                    onValid: function (user) {
                        $log.info('my user is : ', user)
                    }
                };

                /**
                 * Catch Callback
                 */
                scope.$watch('callback', function (callback) {
                    if (callback instanceof Object) {
                        scope.actions = angular.extend({}, default_actions, callback);
                    } else {
                        scope.actions = default_actions;
                    }
                });

            }
        }
    });