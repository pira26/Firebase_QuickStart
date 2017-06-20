'use strict';

const removeUser = userId => {
    db.ref('users/' + userId).remove();
};