"use client";
import { useState } from "react";
import { useSocket } from "../context/SocketProvider";
// import classes from "./page.module.css";

export default function Page() {
  const { sendMessage, messages } = useSocket();
  const [message, setMessage] = useState("");

  

  return (
    <div className="flex justify-center">
      <div>
        <input
          onChange={(e) => setMessage(e.target.value)}
          className="text-green-500 h-50"
          placeholder="Message..."
        />
        <button
  onClick={() => {
    setMessage(message);
    sendMessage(message);
  }}
>

          Send
        </button>
      </div>
      <div>
        {messages.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </div>
    </div>
    
    
  );
}
