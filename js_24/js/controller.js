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
                view.elements.listContainer.on('dblclick', 'label', function(){
                    var thisData = this.innerHTML;
                    var $editInput = $('<input type="text" class="edit-input">');
                    $(this).replaceWith($editInput);
                    $editInput.val(thisData).focus();
                });
                view.elements.edit.on('keydown', function (e) {
                    if ( e.which == ENTER_KEY ) {

                        alert('s');

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
            }
        };
    }
);
