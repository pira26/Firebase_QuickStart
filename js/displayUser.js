'use strict';

let user;

window.onload = () => {
    user = document.querySelector('#user');
};

userRef.on('value', snapshot => {
    console.log(snapshot.val().key);
});