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
        'src/services/{,**/}*.js'



    ]
};

if (exports) {
    exports.files       = modelFiles;
}