let usersRegister = [
    {
        name: 'Vitalik',
        password: '1234',
    },

    {
        name: 'Bogdan',
        password: '5555',
    },

    {
        name: 'Bogdan',
        password: '5555',
    },
]

function signTry(inputedUser,inputedPassword) {
    for (let user of usersRegister) {
        if (user === inputedUser && password == inputedPassword) {
            return true 
        } else {
            continue
        }
    }

    return false
}

signTry()