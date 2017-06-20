'use strict';

const db = firebase.database();
const userRef = firebase.database().ref('users/');

/*
const dbPush = (data) => {
    userRef.push(data);
};

const dbOn = (id, value) => {
    id = id || '';
    userRef.on(value, cb => cb())
};
*/