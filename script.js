let countDownTimer = new Date('5 Jan, 2023 15:30:00').getTime()

var x = setInterval(function () {
    let now = new Date().getTime()
    let distance = countDownTimer - now
    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)

    document.getElementById('timer').innerHTML =
        days + ' : ' + hours + ' : ' + minutes + ' : ' + seconds

    if (distance < 0 && distance > 0 < 10) {
        clearInterval(x)
        document.getElementById('timer').innerHTML = `chegou o grande dia`
    }
    if (seconds > 0 && seconds < 10) {
        document.getElementById('timer').innerHTML = document.getElementById(
            'timer'
        ).innerHTML =
            days + ' : ' + hours + ' : ' + minutes + ' : ' + '0' + seconds
    }
    if (minutes > 0 && minutes < 10) {
        document.getElementById('timer').innerHTML = document.getElementById(
            'timer'
        ).innerHTML =
            days + ' : ' + hours + ' : ' + '0' + minutes + ' : ' + seconds
    }
    if (hours > 0 && hours < 10) {
        document.getElementById('timer').innerHTML = document.getElementById(
            'timer'
        ).innerHTML =
            days + ' : ' + '0' + hours + ' : ' + minutes + ' : ' + seconds
    }
}, 1000)
