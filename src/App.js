import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
/*




 */
const questionTypes = {
  "LVLT": {
    instruction: "Listen to the audio once by clicking the button, "
      + "and select the most appropriate answer."
  },
  "VLT": {
    instruction: "Please read the text below and select the most appropriate answer."
  },
}

const questionList = [
  {
    type: questionTypes.LVLT,
    audioSrc: "audio/x.mp3",
    options: ["", "", "", ""],
    answer: "",
  },
  {
    type: questionTypes.VLT,
    readingText: "",
    options: ["", "", "", ""],
    answer: "",
  },
]

/**
 * @param questionProp {{
 *    type: {
 *      instruction: string,
 *    }, 
 *    audioSrc: string, 
 *    options: Array<string>, 
 *    answer: string,
 * }}
 * 
 * @return JSX.Element
 */
function Question(questionProp) {
  return (
    <div>
      <div>Q1.</div>
      <p>
        
      </p>
      <audio src=""/>
      
      
    </div>
  )
}

export default App;
