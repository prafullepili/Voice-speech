let speech = new SpeechSynthesisUtterance();
speech.lang = "";

let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    let voiceSelect = document.querySelector("#voices");
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
}


// Volume
document.querySelector("#volume").addEventListener("input", () => {
    var volume = document.querySelector("#volume").value;
    speech.volume = volume;
    console.log(speech.volume);
    document.querySelector("#volume-level").innerHTML = volume;
})

//speed rate
document.querySelector("#rate").addEventListener("input", () => {
    const rate = document.querySelector("#rate").value;
    speech.rate = rate;
    document.querySelector("#rate-level").innerHTML = rate;
    console.log(speech.rate);
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
    console.log(voice);
})


document.querySelector("#start").addEventListener("click", () => {
    speech.text= document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

document.querySelector("#pause").addEventListener("click", () => {
    window.speechSynthesis.pause();
});
document.querySelector("#resume").addEventListener("click", () => {
    window.speechSynthesis.resume();
});
document.querySelector("#cancel").addEventListener("click", () => {
    window.speechSynthesis.cancel();
});


