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
let notificationOn = false

function signTry(inputedUser, inputedPassword) {
    for (let user of usersRegister) {
        if (user === inputedUser) {
            return true
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

function notification(textContent, duration) {
    if (notificationOn == false) {
        notificationOn = true
        $(".notification").css("top", "-1%")
        $(".notiText").text(`${textContent}`)
        setTimeout(function () {
            $(".notification").css("top", "-20%")
            notificationOn = false
        }, 2000)
    }
}

$("#emailExitBtn").click(() => {
    logInMenu()
})

$("#logInEnterBtn").click(() => {
    logInMenu()
})

$("#logInBtn").click(() => {
    notification("Login Failed", 2000)
})