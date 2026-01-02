import React from "react";
import './InputComponent.css';

<head>

    <link rel="stylesheet" href="InputComponent.css" />
</head> 





const InputComponent = () => {
    const [text, setText] = React.useState("");

    const handleAction = () => {
        if(text.trim() === ''){
            alert('Text area is empty');
            return;
        }
        setText('');
        alert(`You said: ${text}`);
        
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter'){
            event.preventDefault();
            handleAction();
        }
    };

    return (
    <div className="form-container">
        <label htmlFor="textarea-top-placeholder" style={{ display: "block", textAlign: "left", marginBottom: "8px" }}>Hello Faithful</label>
        <div className="textarea-container" style={{ position: "relative", display: "inline-block", width: "100%" }}>
            <form onSubmit={(e) => { e.preventDefault(); handleAction(); }}>
                <textarea
                    className="textarea-top-placeholder"
                    placeholder="Enter Query..."
                    id="textarea-top-placeholder"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    style={{ width: "720px", height: "125px", paddingBottom: "12px" }}
                />
            </form>

            <button onClick={handleAction} data-slot="button" id="EnterButton"  color="blue"  type="submit" data-size="icon-sm" aria-label="Submit" style={{ position: "absolute", bottom: "4px", right: "4px" }}>
                <img src="./Rassests/EnterImage.png" width="30" height="110" viewBox="0 0 25 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-corner-down-left size-4" aria-hidden="true">
                    
                </img>
            </button>
        </div>
    </div>
  );
};

export default InputComponent;