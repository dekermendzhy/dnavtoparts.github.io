define(
    'controller',
    [
        'model',
        'view',
        'jquery'
    ],
    function(){
        return{
            controller: function (model, view) {
                var self = this;
                var ENTER_KEY = 13;

                view.elements.addBtn.on('click', addItem);
                view.elements.listContainer.on('click', '.item-delete', removeItem);
                view.elements.input.on('keydown', function (e) {
                    if ( e.which == ENTER_KEY ) {
                        addItem();
                    }
                });
                view.elements.listContainer.on('dblclick', 'label', function(event){
                    var thisData = this.innerHTML,
                        $el = $('<input type="text" class="edit-input">');
                     $(this).replaceWith($el);
                     $el.val(thisData).focus();
                });
                view.elements.editInput.on('keydown', function (e) {
                    if ( e.which == ENTER_KEY ) {
                        editItem();
                    }
                });



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


                // function editItem(){
                //     var edit = view.elements.editInput.val();
                //
                //     model.editItem(edit);
                //     view.renderList(model.data);
                // }
            }
        };
    }
);
