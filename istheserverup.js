async function check() {
    const answerText = document.getElementById('answer');

    const response = await fetch('https://corsproxy.io/?https%3A%2F%2Fapi.mcsrvstat.us%2F3%2Fmc.nicanorisabitchassnigga.online');

    const data = await response.data;

    const isOnline = JSON.parse(data).online;

    if (isOnline) {
        answerText.textContent = "Yes";
        answerText.classList.add('yes');
    } else {
        answerText.textContent = "No";
        answerText.classList.add('no');
    }
}

check()