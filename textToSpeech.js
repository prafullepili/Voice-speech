let speech = new SpeechSynthesisUtterance();
let textDataFormLocalStorage = localStorage.getItem('textData');
document.querySelector("textarea").value = textDataFormLocalStorage;
speech.lang = "en";

let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    let voiceSelect = document.querySelector("#voices");
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
}


// Volume
// showing initial volume
var volume = document.querySelector("#volume").value;
speech.volume = volume;
document.querySelector("#volume-level").innerHTML = volume;

document.querySelector("#volume").addEventListener("input", () => {
    var volume = document.querySelector("#volume").value;
    speech.volume = volume;
    document.querySelector("#volume-level").innerHTML = volume;
})

//speed rate
const rate = document.querySelector("#rate").value;
speech.rate = rate;
document.querySelector("#rate-level").innerHTML = rate;

document.querySelector("#rate").addEventListener("input", () => {
    const rate = document.querySelector("#rate").value;
    speech.rate = rate;
    document.querySelector("#rate-level").innerHTML = rate;
})

//pitch
document.querySelector("#pitch").addEventListener("input", () => {
    const pitch = document.querySelector("#pitch").value;
    speech.pitch = pitch;
    document.querySelector("#pitch-level").innerHTML = pitch;
    console.log(speech.pitch);
})

// change in voices
document.querySelector("#voices").addEventListener("change", () => {
    speech.voice = voices[document.querySelector("#voices").value];
})

// start
document.querySelector("#start").addEventListener("click", () => {
    window.speechSynthesis.cancel();
    // const table = document.querySelector('#table').value;
    // tablespeak = "";
    // if (table != "") {
    //     tableprinting = "";
    //     for (let i = 1; i < 11; i++) {

    //         tablespeak += `${table} times ${i} = ${parseInt(table) * i}\n`;
    //         tableprinting += `${table} x ${i} = ${parseInt(table) * i}\n`;
    //     }
    // document.querySelector("textarea").value = tableprinting;
    // speech.text = tablespeak;
    // window.speechSynthesis.speak(speech);
    // document.querySelector('#table').value = '';
    // }
    // else {
    const enteredText = document.querySelector("textarea").value.toString();
    localStorage.setItem('textData',`${enteredText}`)
    
    speech.text = localStorage.getItem('textData');
    window.speechSynthesis.speak(speech);
    // }
});

// pause
document.querySelector("#pause").addEventListener("click", () => {
    window.speechSynthesis.pause();
});
// resume
document.querySelector("#resume").addEventListener("click", () => {
    window.speechSynthesis.resume();
});
// cancel
document.querySelector("#cancel").addEventListener("click", () => {
    window.speechSynthesis.cancel();
});

//clear
document.getElementById('clear').addEventListener('click', () => {
    document.querySelector("textarea").value = "";
    localStorage.removeItem('textData')
})

