import React from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Mic, Waves } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

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
        <div className="flex justify-center items-center min-h-screen p-4 bg-gradient-to-b from-slate-900 to-slate-800">
            <Card className="w-full max-w-2xl">
                <CardHeader className="text-center">
                    <CardTitle>Hello Faithful</CardTitle>
                    <div className="flex justify-center space-x-2 mt-4">
                        <Button variant="outline" onClick={() => navigate("/admin")} className="text-white border-white hover:text-blue-600 hover:border-blue-600">
                            Go to Admin Page
                        </Button>
                        <Button variant="outline" onClick={() => navigate("/")} className="text-white border-white hover:text-blue-600 hover:border-blue-600">
                            Back to Login
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <form onSubmit={(e) => { e.preventDefault(); handleAction(); }} className="space-y-4">
                        <div className="relative">
                            <Input
                                type="text"
                                placeholder="Ask anything"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="pl-10 pr-20"
                            />
                            <Plus className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-2">
                                <Button type="button" variant="ghost" size="sm" className="h-6 w-6 p-0 text-white">
                                    <Mic className="h-4 w-4" />
                                </Button>
                                <Button type="button" variant="ghost" size="sm" className="h-6 w-6 p-0 text-white">
                                    <Waves className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
