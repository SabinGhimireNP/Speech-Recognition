// SpeechRecognition
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;

// p-tag Creation
let p = document.createElement("p");
const words = document.querySelector(".words");
words.appendChild(p);
recognition.start();

// Functions
function addContent() {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");
  // console.log(transcript);
  // console.log(e);
}

// Event Listners
recognition.addEventListener("result", addContent);
recognition.addEventListener("end", () => recognition.start());
