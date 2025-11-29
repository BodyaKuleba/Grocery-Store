let usersRegister = [
    {
        name: "Vitalik",
        password: "1234",
    },

    {
        name: "Bogdan",
        password: "5555",
    },

    {
        name: "Stepan53",
        password: "5353",
    },

    {
        name: "Sasha",
        password: "5448",
    },
]

let sounds = {
    ad: new Audio("Sounds/ad.mp3"),
    call: new Audio("Sounds/call.mp3"),
}

let logMenuOpened = false
let notificationOn = false

function messageSystem(message, duration) {
    if (message && notificationOn == false) {
        notificationOn = true
        $(".notiText").text(message)
        $(".notification").css("top", "9vh")
        setTimeout(function () {
            $(".notification").css("top", "-20%")
            notificationOn = false
        }, duration)
    }
}

let lastAcc = localStorage.getItem("lastAccount") || "none"

if (lastAcc !== "none") {
    $(".notLogInDiv").css("display", "none")
    $(".logInDivTrue").css("display", "flex")
    if (lastAcc == "Vitalik") {
        $(".profilePicture").css("background-image", "url(Images/Vitalik.jpg)")
        $(".profilePictureHeader").css("background-image", "url(Images/Vitalik.jpg)")
    } else if (lastAcc == "Bogdan") {
        $(".profilePicture").css("background-image", "url(Images/Me.png)")
        $(".profilePictureHeader").css("background-image", "url(Images/Me.png)")
    } else if (lastAcc == "Stepan") {
        $(".profilePicture").css("background-image", "url(Images/Stepa.jpg)")
        $(".profilePictureHeader").css("background-image", "url(Images/Stepa.jpg)")
    } else if (lastAcc == "Sasha") {
        $(".profilePicture").css("background-image", "url(Images/Sashko.png)")
        $(".profilePictureHeader").css("background-image", "url(Images/Sashko.png)")
    }
}

function signTry(iUser, iPassword) {
    let found = false

    for (let user of usersRegister) {
        if (user.name === iUser && user.password === iPassword) {
            found = true;
            $(".notLogInDiv").css("display", "none");
            $(".logInDivTrue").css("display", "flex");

            if (user.name === "Vitalik") {
                $(".profilePicture").css("background-image", "url(Images/Vitalik.jpg)");
                $(".profilePictureHeader").css("background-image", "url(Images/Vitalik.jpg)")
                localStorage.setItem("lastAccount", "Vitalik")
            } else if (user.name === "Bogdan") {
                $(".profilePicture").css("background-image", "url(Images/Me.png)")
                $(".profilePictureHeader").css("background-image", "url(Images/Me.png)")
                localStorage.setItem("lastAccount", "Bogdan")
            } else if (user.name === "Stepan53") {
                $(".profilePicture").css("background-image", "url(Images/Stepa.jpg)")
                $(".profilePictureHeader").css("background-image", "url(Images/Stepa.jpg)")
                localStorage.setItem("lastAccount", "Stepan")
            } else if (user.name === "Sasha") {
                $(".profilePicture").css("background-image", "url(Images/Sashko.png)")
                $(".profilePictureHeader").css("background-image", "url(Images/Sashko.png)")
                localStorage.setItem("lastAccount", "Sasha")
            }

            break
        }
    }

    if (!found) {
        messageSystem("Login Failed", 2000)
    }
}

$("#logInBtn").click(() => {
    let inpUser = $("#usernameInput").val()
    let inpPassword = $("#passwordInput").val()
    signTry(`${inpUser}`, `${inpPassword}`)
})

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

$("#logOutBtn").click(() => {
    messageSystem("Logged out", 2000)
    $(".logInDivTrue").css("display", "none")
    $(".notLogInDiv").css("display", "flex")
    $(".profilePicture").css("background-image", "url(https://cdn-icons-png.flaticon.com/256/3985/3985429.png)")
    $(".profilePictureHeader").css("background-image", "url(https://cdn-icons-png.flaticon.com/256/3985/3985429.png)")
    localStorage.setItem("lastAccount", "none")
})

// let callRequie = setInterval(() => {
//     let chance = Math.floor(Math.random() * 25)

//     if (chance == 5) {
//         sounds.call.currentTime = 0
//         sounds.call.play()
//         messageSystem("Sasha is calling!", 3000)

//         clearTimeout(callRequie)

//         let declineTimeout = setTimeout(() => {
//             $(".call").css("display", "none")
//             clearTimeout(callRequie)
//             sounds.call.pause()
//         }, 15000)

//         $(".call").css("display", "flex")
//     }

// }, 1000)

let callOn = false

$("#learnMoreBtn").click(() => {
    if (callOn !== true) {
        sounds.call.currentTime = 0
        sounds.call.play()
        messageSystem("Sasha is calling!", 3000)
        $(".call").css("display", "flex")
        callOn = true

        let declineTimeout = setTimeout(() => {
            $(".call").css("display", "none")
            callOn = false
            sounds.call.pause()
        }, 15000)
    }
})

$(".callBtn1").click(() => {
    $(".call").css("display", "none")
    callOn = false
    sounds.call.pause()
})

$(".callBtn2").click(() => {
    sounds.call.pause()

    sounds.ad.currentTime = 0
    sounds.ad.play()
})

