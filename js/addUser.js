'use strict';

let username, name, description, email, password;

window.onload = () => {
    username = document.querySelector('#username');
    name = document.querySelector('#name');
    description = document.querySelector('#description');
    email = document.querySelector('#email');
    password = document.querySelector('#password');
};


const addUser = () => {

    db.ref('users/')
        .push(
            {
            username: username.value,
            name: name.value,
            description: description.value,
            email: email.value,
            password: password.value
            }
        )
        .then( () => {
            username.value = '';
            name.value = '';
            description.value = '';
            email.value = '';
            password.value = '';
        })
        .catch(err => {
            console.error(err);
        });
};
