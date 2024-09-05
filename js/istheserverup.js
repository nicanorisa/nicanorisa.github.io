async function check() {
    const answerText = document.getElementById('answer');

    const response = await fetch('https://corsproxy.io/?https://api.mcsrvstat.us/simple/mc.nicanorisabitchassnigga.online');
    const serverStatus = response.status;

    if (serverStatus === 200) {
        answerText.textContent = "Yes";
        answerText.classList.add('yes');
    } else if (serverStatus === 404) {
        answerText.textContent = "No";
        answerText.classList.add('no');
    }
}

check()