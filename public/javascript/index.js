// Initialize Firebase
const config = {
    apiKey: "AIzaSyAO0w3x4FWWUYbQU_nnxqi8Sdf6xJFBnZM",
    authDomain: "fir-project-51057.firebaseapp.com",
    databaseURL: "https://fir-project-51057.firebaseio.com",
    projectId: "fir-project-51057",
    storageBucket: "fir-project-51057.appspot.com",
    messagingSenderId: "558121898483"
};
firebase.initializeApp(config);

// Variables
const form = document.querySelector('#form');

let username = document.querySelector('#username');
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let description = document.querySelector('#description');

const submit = document.querySelector('#submit');

let users = document.querySelector('#users');
let content = document.querySelector('#content');


// Get a reference to the database service
const db = firebase.database().ref();
const usersRef = firebase.database().ref('/users');

/*

// Add users
const writeUserData = () => {

    const username = user.value;
    const name = user_name.value;
    const description = user_description.value;
    const email = user_email.value;
    const password = user_password.value;

    userRef.push({
        username,
        name,
        description,
        email,
        password
    });
    document.querySelector('#text').innerHTML = username;
    console.log(username, name, description, email, password)
};

// Display users
userRef.on('value',function(snap) {
    console.log(snap.val());
    users.innerText = JSON.stringify(snap.val(), null, 2);
});

// Delete user
function deleteUser() {
    usersRef.on('child_removed', function(data) {
        data.key('User').remove();
    });
}*/

// Add
form.addEventListener('submit', e => {
    e.preventDefault();

    db.ref('users/').set({
        'username': username.value,
        'name': name.value,
        'description': description.value,
        'email': email.value,
        'password': password.value
    });

    username = '';
    name = '';
    description = '';
    email = '';
    password = '';

});

// Read
usersRef.on('child_added', data => {
    users.id = data.key;
    users.innerHTML = data.value;
});

usersRef.on('child_changed', data => {
    const user = document.getElementById(data.key);
    user.innerHTML = data.value;
});

usersRef.on('child_removed', data => {
    const user = document.getElementById(data.key);
    user.parentNode.removeChild(user);
});

content.addEventListener('click', e => {
    let target = e.target.parentNode;

    // Update
    if(e.target.classList.contains('edit')) {
        username.value = target.querySelector('#username').value;
        name.value = target.querySelector('#name').value;
        description.value = target.querySelector('#description').value;
        email.value = target.querySelector('#email').value;
        password.value = target.querySelector('#password').value;
    }

    // Remove
    if(e.target.classList.contains('remove')) {
       let id = target.id;
       db.ref('users/' + id).remove();
    }
});
