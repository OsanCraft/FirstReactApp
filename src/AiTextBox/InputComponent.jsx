import React from "react";
import './InputComponent.css';





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

            <button onClick={handleAction} data-slot="button" id="EnterButton" className="justify-center whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 text-sm shadow-none flex gap-2 items-center size-8 p-0 has-[&gt;svg]:p-0 !h-8" type="submit" data-size="icon-sm" aria-label="Submit" style={{ position: "absolute", bottom: "4px", right: "4px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 25 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-corner-down-left size-4" aria-hidden="true">
                    <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
                    <path d="m9 10-5 5 5 5"></path>
                </svg>
            </button>
        </div>
    </div>
  );
};

export default InputComponent;