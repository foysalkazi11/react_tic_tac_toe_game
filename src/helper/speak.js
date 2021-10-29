const speak = (text="Please tell me what should I say",lang="en-US")=>{
    var utterance = new window.SpeechSynthesisUtterance();
        utterance.lang = lang;
        utterance.text = text;
        window.speechSynthesis.speak(utterance);
}

export default speak