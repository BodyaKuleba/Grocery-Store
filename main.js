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
    add: new Audio('./Sounds/buy-add.mp3'),
    call: new Audio('./Sounds/nokia.mp3'),
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

let callRequie = setInterval(()=>{
    let chanse = Math.floor(Math.random() * 25)

    messageSystem('Vatalik Call you!!',5)

    if (chanse == 5) {
        sounds.call.currentTime = 0
        sounds.call.play()

        clearTimeout(callRequie)

        let declineTimeout = setTimeout(()=>{
            $('#Microwave').css('display','none')
            clearTimeout(callRequie) 
            sounds.call.pause()
        },15*1000)
        
        $('#Microwave').css('display','flex')
    }

    $('#acceptCallBtn').click(()=>{
        clearTimeout(callRequie) 

        sounds.call.pause()

        sounds.add.currentTime = 0
        sounds.add.play()
    })
},1*100)