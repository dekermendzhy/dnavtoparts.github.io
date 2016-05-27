requirejs.config({
    paths: {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        }
    }
});

require(
    [
        'model',
        'view',
        'controller',
        'tmpl',
        'jquery'
    ],
    function(model, view, controller, tmpl, $){
        var firstToDoList = ['test 1', 'test 2', 'test 3'];
        var model = new model.model(firstToDoList);
        var view = new view.view(model);
        var controller = new controller.controller(model, view);
    }
);
