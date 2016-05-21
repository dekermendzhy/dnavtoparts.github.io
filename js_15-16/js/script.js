function GoogleCallback (func, data) {
    window[func](data);
}

$(function(){

    $('#searching').keydown(function(e){
        if( e.which == 13 ){
            var search = $('#searching').val();
            var url = "http://ajax.googleapis.com/ajax/services/search/web?v=1.0&rsz=large&q="+search+"&callback=GoogleCallback&context=?";
            $.getJSON(url,
                function(data){
                    var ul = document.createElement('ul');
                    $.each(data.results, function(i, val){
                        var li = document.createElement('li');
                        li.innerHTML = '<br><a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+'</a><p>' + val.url + "</p>" + val.content + '<br>';
                        ul.appendChild(li);
                    });
                    $('.search').html(ul);
                });
            }
        });

    $('#Search').on('click', function(){
        var search = $('#searching').val();
        var url = "http://ajax.googleapis.com/ajax/services/search/web?v=1.0&rsz=large&q="+search+"&callback=GoogleCallback&context=?";
        $.ajax({
            url,
            dataType : 'jsonp',
            statusCode: {
                404: function(){
                    alert( "page not found" );
                }
            },
            success: function (data) {
                var ul = document.createElement('ul');
                $.each(data.results, function(i, val){
                    var li = document.createElement('li');
                    li.innerHTML = '<br><a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+'</a><p>' + val.url + "</p>" + val.content + '<br>';
                    ul.appendChild(li);
                });
                $('.search').html(ul);
            }
        });
    });
});
