let countDownTimer = new Date('7 Jan, 2023 15:30:00').getTime()

var x = setInterval(function () {
    const now = new Date().getTime()
    const distance = countDownTimer - now
    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)

    if (distance < 0 && distance > 0 < 10) {
        clearInterval(x)
        document.getElementById('timer').innerHTML = `chegou o grande dia`
    }
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    if (seconds < 10) {
        seconds = `0${seconds}`
    }
    if (days < 10) {
        days = `0${days}`
    }
    if (hours < 10) {
        hours = `0${hours}`
    }

    document.getElementById('timer').innerHTML =
        days + ' : ' + hours + ' : ' + minutes + ' : ' + seconds
}, 1000)
