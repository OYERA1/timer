let countDownTimer = new Date('7 Jan, 2023 15:30:00').getTime()

var x = setInterval(function () {
    const now = new Date().getTime()
    const distance = countDownTimer - now
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)

    if (distance < 0 && distance > 0 < 10) {
        clearInterval(x)
        document.getElementById('timer').innerHTML = `chegou o grande dia`
    }
    if (seconds < 10) {
        seconds = `0${seconds}`
    }

    document.getElementById('timer').innerHTML =
        days + ' : ' + hours + ' : ' + minutes + ' : ' + seconds
}, 1000)
