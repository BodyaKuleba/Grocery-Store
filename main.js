let usersRegister = [
    {
        name: "Vitalik",
        password: "1234",
    },

    {
        name: "Bogdan",
        password: "5555",
    }
]
let logMenuOpened = false

function signTry(inputedUser, inputedPassword) {
    for (let user of usersRegister) {
        if (user === inputedUser) {
            return true
        } else {
            continue
        }
    }

    return false
}

signTry()

function logInMenu() {
    if (!logMenuOpened) {
        $(".emailDiv").css("display", "flex")
        logMenuOpened = true
    } else {
        $(".emailDiv").css("display", "none")
        logMenuOpened = false
    }
}

$("#emailExitBtn").click(() => {
    logInMenu()
})

$("#logInEnterBtn").click(() => {
    logInMenu()
})