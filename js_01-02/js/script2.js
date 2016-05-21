var usernames = [];
var number = 5;

for (var i = 0; i < number; i++)
{
    usernames[i] = prompt('Enter the usernames['+i+']');
}

for (var i = 0; i < usernames.length; i++) {
    console.log(usernames[i]);
}

var username = prompt('Enter username: ');

if (username = usernames) {
    alert('yes');
} else {
    alert('no');
}
