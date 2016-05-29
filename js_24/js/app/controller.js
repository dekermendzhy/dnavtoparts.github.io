define(
    'controller',
    [
        'model',
        'view',
        'jquery'
    ],
    function(){
        return{
            controller: function(model, view){
                var self = this;
                var ENTER_KEY = 13;

                view.elements.addBtn.on('click', addItem);
                view.elements.listContainer.on('click', '.item-delete', removeItem);
                view.elements.input.on('keydown', function (e) {
                    if ( e.which == ENTER_KEY ) {
                        addItem();
                    }
                });
                view.elements.listContainer.on('dblclick', '.item-label', editItem);

                function editItem(){
                    var target = $(event.target);
                    var value = $(this).text();
                    var inputText = $(this).siblings('.edit-input').val(value);
                    var index = model.data.indexOf(target.attr('data-value'));

                    console.log(index);
                    console.log(model.data);

                    target.parent('.todoitem').addClass('editing');


                $('.edit-input').on('keydown', function(e){
                    var item = inputText.val();
                    if( e.which == ENTER_KEY ){
                        model.editItem(index, item);
                        view.renderList(model.data);

                        console.log(model.data);

                        target.parent('.todoitem').removeClass('editing');
                    }
                })
            };


                function addItem(){
                    var newItem = view.elements.input.val();

                    model.addItem(newItem);
                    view.renderList(model.data);
                    view.elements.input.val('');
                }


                function removeItem(){
                    var item = $(this).attr('data-value');

                    model.removeItem(item);
                    view.renderList(model.data);
                }
            }
        };
    }
);
