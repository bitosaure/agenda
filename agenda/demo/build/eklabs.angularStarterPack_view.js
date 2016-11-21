angular.module('eklabs.angularStarterPack').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('eklabs.angularStarterPack/modules/calendrier/directives/calendrier/calendrierFormView.html',
    "<div ui-calendar=\"uiConfig.calendar\" class=\"span8 calendar\" ng-model=\"eventSources\" ></div>\r" +
    "\n" +
    "<li ng-repeat=\"e in eventSources\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    {{e.title}} {{e.start}}\r" +
    "\n" +
    "\r" +
    "\n" +
    "</li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<script>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "</script>"
  );


  $templateCache.put('eklabs.angularStarterPack/modules/calendrier/directives/my-form/myFormView.html',
    "<form name=\"myForm\" ng-submit=\"actions.onValid(myUser)\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div layout=\"column\" >\r" +
    "\n" +
    "        <md-input-container >\r" +
    "\n" +
    "            <label>FirstName</label>\r" +
    "\n" +
    "            <input name=\"name\" ng-model=\"myUser.firstname\" />\r" +
    "\n" +
    "        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <md-input-container >\r" +
    "\n" +
    "            <label>LastName</label>\r" +
    "\n" +
    "            <input name=\"name\" ng-model=\"myUser.lastname\" />\r" +
    "\n" +
    "        </md-input-container>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <md-button type=\"submit\">\r" +
    "\n" +
    "        <md-icon md-svg-src=\"material-design:done\"></md-icon>\r" +
    "\n" +
    "        Valider\r" +
    "\n" +
    "    </md-button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "</form>"
  );


  $templateCache.put('eklabs.angularStarterPack/modules/event/directives/event/eventView.html',
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div layout=\"column\" >\r" +
    "\n" +
    "        <!--<md-input-container >\r" +
    "\n" +
    "            <label>FirstName</label>\r" +
    "\n" +
    "            <input name=\"name\" ng-model=\"myUser.firstname\" />\r" +
    "\n" +
    "        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <md-input-container >\r" +
    "\n" +
    "            <label>LastName</label>\r" +
    "\n" +
    "            <input name=\"name\" ng-model=\"myUser.lastname\" />\r" +
    "\n" +
    "        </md-input-container>-->\r" +
    "\n" +
    "        <md-list ng-init=\"myStyle={'margin-bottom': '20px'}; isBlured = true\">\r" +
    "\n" +
    "            <md-list-item ng-repeat=\"i in [1, 2, 3, 4, 5, 6, 7]\" class=\"md-2-line\" md-colors=\"isBlured === true ? {backgroundColor: 'default-primary-700'} : {backgroundColor: 'grey'}\" ng-style=\"myStyle\" ng-mouseover=\"isBlured = false\" ng-mouseleave=\"isBlured = true\">\r" +
    "\n" +
    "                <div class=\"md-list-item-text\">\r" +
    "\n" +
    "                    <h3>Test Event {{i}}</h3>\r" +
    "\n" +
    "                    <p>30 Septembre 2016 15h50 - 2 Octobre 2016 12h00</p>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </md-list-item>\r" +
    "\n" +
    "        </md-list>\r" +
    "\n" +
    "    </div>"
  );


  $templateCache.put('eklabs.angularStarterPack/modules/event/directives/my-form/myFormView.html',
    "<form name=\"myForm\" ng-submit=\"actions.onValid(myUser)\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div layout=\"column\" >\r" +
    "\n" +
    "        <md-input-container >\r" +
    "\n" +
    "            <label>FirstName</label>\r" +
    "\n" +
    "            <input name=\"name\" ng-model=\"myUser.firstname\" />\r" +
    "\n" +
    "        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <md-input-container >\r" +
    "\n" +
    "            <label>LastName</label>\r" +
    "\n" +
    "            <input name=\"name\" ng-model=\"myUser.lastname\" />\r" +
    "\n" +
    "        </md-input-container>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <md-button type=\"submit\">\r" +
    "\n" +
    "        <md-icon md-svg-src=\"material-design:done\"></md-icon>\r" +
    "\n" +
    "        Valider\r" +
    "\n" +
    "    </md-button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "</form>"
  );


  $templateCache.put('eklabs.angularStarterPack/modules/forms/directives/my-form/myFormView.html',
    "<form name=\"myForm\" ng-submit=\"actions.onValid(myUser)\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div layout=\"column\" >\r" +
    "\n" +
    "        <md-input-container >\r" +
    "\n" +
    "            <label>FirstName</label>\r" +
    "\n" +
    "            <input name=\"name\" ng-model=\"myUser.firstname\" />\r" +
    "\n" +
    "        </md-input-container>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <md-input-container >\r" +
    "\n" +
    "            <label>LastName</label>\r" +
    "\n" +
    "            <input name=\"name\" ng-model=\"myUser.lastname\" />\r" +
    "\n" +
    "        </md-input-container>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <md-button type=\"submit\">\r" +
    "\n" +
    "        <md-icon md-svg-src=\"material-design:done\"></md-icon>\r" +
    "\n" +
    "        Valider\r" +
    "\n" +
    "    </md-button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "</form>"
  );


  $templateCache.put('eklabs.angularStarterPack/modules/json-editor/directives/editor/view.html',
    "<form id        =   \"myJsonEditor\"\r" +
    "\n" +
    "      name      =   \"myForm\"\r" +
    "\n" +
    "      novalidate\r" +
    "\n" +
    "      layout    =   \"column\"\r" +
    "\n" +
    "      ng-submit =   \"myForm.$valid && !editorError && !eerror.length && actions.valid(currentJson)\"\r" +
    "\n" +
    "      ng-style  =   \"{'min-height' : currentHeight, 'max-height' : currentHeight}\"\r" +
    "\n" +
    "      style=\"overflow-y: hidden;overflow-x: hidden\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <!-- FORM CONTENT -->\r" +
    "\n" +
    "    <div flex\r" +
    "\n" +
    "         layout     =   \"column\"\r" +
    "\n" +
    "         style      =   \"overflow-y:auto;overflow-x: hidden;\"\r" +
    "\n" +
    "         ng-style   =   \"{'min-height' : maxHeightContainer , 'max-height' : maxHeightContainer}\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div layout=\"column\" flex ng-if=\"aceAvailable\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <h2 class=\"title\">Editeur JSON </h2>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div ui-ace=\"aceOption\" ng-model=\"aceModel\" style=\"width: 100%\" ng-style = \"{'max-height' : aceMaxHeight }\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <!-- BOUTON ACTIONS -->\r" +
    "\n" +
    "    <div layout=\"row\" layout-align=\"start center\" class=\"shadow_up\" >\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div ng-if=\"errors.length || editorError\" layout=\"row\" class=\"warn-font\" style=\"font-size: 0.9em\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <md-icon md-svg-src=\"material-design:error_outline\" class=\"ic_16px warn-font\"></md-icon>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <span ng-if=\"errors.length\" ng-repeat=\"error in errors\">{{error}}</span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <span ng-if=\"editorError\" style=\"margin-left: 10px;\">{{editorError}}</span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div flex></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <md-button type=\"submit\" aria-label=\"test\" ng-disabled=\"editorError || errors.length\">\r" +
    "\n" +
    "            <md-icon md-svg-src=\"material-design:done\"></md-icon>\r" +
    "\n" +
    "            <span style=\"font-weight:200\">Valider</span>\r" +
    "\n" +
    "        </md-button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</form>"
  );


  $templateCache.put('eklabs.angularStarterPack/modules/notification/directives/notification/notificationView.html',
    "\r" +
    "\n" +
    "    <md-toolbar class=\"md-accent\">\r" +
    "\n" +
    "        <h2 class=\"md-toolbar-tools\">\r" +
    "\n" +
    "            <span flex>Notifications</span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <md-input-container>\r" +
    "\n" +
    "                <input ng-model=\"query\">\r" +
    "\n" +
    "                <md-icon md-svg-icon=\"material-design:search\" aria-label=\"search\"></md-icon>\r" +
    "\n" +
    "            </md-input-container>\r" +
    "\n" +
    "        </h2>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </md-toolbar>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <md-content>\r" +
    "\n" +
    "        <md-list flex>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <md-subheader class=\"md-no-sticky\">\r" +
    "\n" +
    "                <div layout=\"row\"  layout-align=\"space-between center\">\r" +
    "\n" +
    "                    <div>Unreaded Notification</div>\r" +
    "\n" +
    "                    <div><md-button class=\"md-primary\" ng-click=\"changeVisibility(true)\"><span ng-if=\"showUnreaded\">Hide</span><span ng-if=\"!showUnreaded\">Show</span></md-button></div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </md-subheader>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <md-list-item class=\"md-2-line\" ng-show=\"showUnreaded\" ng-repeat=\"notification in notifications  | filter : query\" ng-if=\"notification.dateRead == ''\">\r" +
    "\n" +
    "                    <img ng-src=\"https://cdn3.iconfinder.com/data/icons/mail-call/2126/envelopefancy-128.png\" class=\"md-avatar\" alt=\"\" />\r" +
    "\n" +
    "                    <div class=\"md-list-item-text\">\r" +
    "\n" +
    "                       <b><h3>{{notification.text}}</h3></b>\r" +
    "\n" +
    "                        <p><span ng-if=\"notification.sender != ''\">De {{notification.sender}}, </span>Le {{notification.dateSend | date : format : timezone}}</p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </md-list-item>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <md-divider></md-divider>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <md-subheader class=\"md-no-sticky\">\r" +
    "\n" +
    "                <div layout=\"row\"  layout-align=\"space-between center\">\r" +
    "\n" +
    "                    <div>Readed Notification</div>\r" +
    "\n" +
    "                    <div><md-button class=\"md-primary\" ng-click=\"changeVisibility(false)\"><span ng-if=\"showReaded\">Hide</span><span ng-if=\"!showReaded\">Show</span></md-button></div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </md-subheader>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <md-list-item class=\"md-2-line\" ng-show=\"showReaded\" ng-repeat=\"notification in notifications  | filter : query\" ng-if=\"notification.dateRead != ''\">\r" +
    "\n" +
    "                    <img ng-src=\"https://cdn3.iconfinder.com/data/icons/mail-call/2126/envelopeopen-128.png\" class=\"md-avatar\" alt=\"\" />\r" +
    "\n" +
    "                    <div class=\"md-list-item-text\">\r" +
    "\n" +
    "                        <h3>{{notification.text}}</h3>\r" +
    "\n" +
    "                        <p><span ng-if=\"notification.sender != ''\">De {{notification.sender}}, </span>Le {{notification.dateSend | date : format : timezone}}</p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </md-list-item>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </md-list>\r" +
    "\n" +
    "    </md-content>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<md-divider></md-divider>\r" +
    "\n"
  );

}]);