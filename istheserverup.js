async function check() {
    const answerText = document.getElementById('answer');

    const response = await fetch('https://api.mcsrvstat.us/3/mc.nicanorisabitchassnigga.online/');

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