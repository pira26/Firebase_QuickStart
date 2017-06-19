'use strict';

let users, user, thead, tbody, tfoot, edit, remove;

window.onload = () => {
    users = document.querySelector('#users');
};

userRef.on('value', snapshot => {
    snapshot.forEach( childSnapshot => {
        user = childSnapshot.val();

        thead = document.createElement('thead');
        tbody = document.createElement('tbody');
        tfoot = document.createElement('tfoot');
        edit = document.createElement('button');
        remove = document.createElement('button');

        thead.innerHTML = `Username: ${user.username}`;
        tbody.innerHTML = `<tr>Name: ${user.name}</tr>
                           <tr>Email: ${user.email}</tr>`;
        tfoot.innerHTML = `Description: ${user.description}`;
        edit.innerHTML = `Edit`;
        edit.classList = 'button warning';
        remove.innerHTML = `remove`;
        remove.classList = 'button';
        users.append(thead, tbody, tfoot, edit, remove);
    });

});
