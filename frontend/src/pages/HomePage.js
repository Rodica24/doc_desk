import React from "react";
import ChatBox from "../components/ChatBox";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>

      <p>Enter a message to contact one of our doctors</p>
      <ChatBox />
    </div>
  );
}