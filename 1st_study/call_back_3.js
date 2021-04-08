let userData = { 
    signUp: '2021=04-08 19:46:33',
    id: 'yunji',
    name: 'Not Set',
    setName: function(firstName, lastName) {
        this.name = firstName +' '+ lastName;
    }
}

function getUserName(firstName, lastName, callback) {
    callback(firstName, lastName);
}

getUserName('Lee', 'yunji', userData.setName);
console.log('1: ', userData.name);
console.log('2: ', window.name);