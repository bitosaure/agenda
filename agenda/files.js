modelFiles = {
    src : [


        'src/modules/json-editor/module.js',
        'src/modules/json-editor/{,**/}*.js',
        
        'src/modules/forms/module.js',
        'src/modules/forms/{,**/}*.js',

        'src/modules/calendrier/module.js',
        'src/modules/calendrier/{,**/}*.js',

        'src/modules/notification/module.js',
        'src/modules/notification/{,**/}*.js',

        'src/modules/event/module.js',
        'src/modules/event/{,**/}*.js',



        'src/module.js',
        'src/services/{,**/}*.js',

        'src/services/event/services.js',
        'src/services/event/{,**/}*.js',

        'src/services/notifications/services.js',
        'src/services/notifications/{,**/}*.js',

        'src/services/calendrier/services.js',
        'src/services/calendrier/{,**/}*.js',



        'src/factories/event/model.js',
        'src/factories/event/{,**/}*.js',

        'src/factories/notifications/model.js',
        'src/factories/notifications/{,**/}*.js',

        'src/factories/calendrier/model.js',
        'src/factories/calendrier/{,**/}*.js'


    ]
};

if (exports) {
    exports.files       = modelFiles;
}