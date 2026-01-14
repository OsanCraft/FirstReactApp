import React from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Mic, Waves } from "lucide-react";
import './InputComponent.css';

export default function InputComponent() {
    const navigate = useNavigate();
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
        if (event.key === 'Enter' && !event.shiftKey){
            event.preventDefault();
            handleAction();
        }
    };

    return (
        <div className="main-container">
            <div className="night-sky" aria-hidden="true">
                <div className="stars"></div>
                <div className="mountains"></div>
            </div>

        <div className="form-container">
            <button className="admin-button" onClick={() => navigate("/admin")}>
                Go to Admin Page
            </button>
            
            <h2 className="main-question">Hello Faithful</h2>
            
            <div className="input-container-wrapper">
                <form onSubmit={(e) => { e.preventDefault(); handleAction(); }} className="input-form">
                    <div className="input-wrapper">
                        <Plus className="plus-icon" size={20} />
                        <input
                            type="text"
                            className="chat-input"
                            placeholder="Ask anything"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <div className="input-right-icons">
                            <button type="button" className="icon-btn-small" aria-label="Voice input">
                                <Mic size={18} />
                            </button>
                            <button type="button" className="icon-btn-small" aria-label="Waveform">
                                <Waves size={18} />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}
