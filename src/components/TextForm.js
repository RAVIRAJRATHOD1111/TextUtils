import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleLoClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase", "success");
    }

    const clear = () => {
        setText('');
        props.showAlert("Text Cleared", "success");
    }

    const copy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to Clipboard", "success");
    }

    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/).join(' ');
        setText(newText);
        props.showAlert("Extra Spaces Removed", "success");
    }

    const capitalizeFirstLetter = () => {
        let newText = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        setText(newText);
        props.showAlert("First Letter Capitalized", "success");
    }

    const invertCase = () => {
        let newText = text.split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');
        setText(newText);
        props.showAlert("Case Inverted", "success");
    }

    const textToSpeech = () => {
        let utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
        props.showAlert("Text to Speech Converted", "success");
    }

    const downloadText = () => {
        const element = document.createElement("a");
        const file = new Blob([text], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "textfile.txt";
        document.body.appendChild(element);
        element.click();
        props.showAlert("Text Downloaded", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" placeholder='Enter text here' value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#03091a' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="mybox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UPPERCASE</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={clear}>Clear</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={copy}>Copy to Clipboard</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={capitalizeFirstLetter}>Capitalize First Letter</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={invertCase}>Invert Case</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={textToSpeech}>Text to Speech</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={downloadText}>Download Text</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((ele) => { return ele.length !== 0 }).length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(/\s+/).filter((ele) => { return ele.length !== 0 }).length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    );
}