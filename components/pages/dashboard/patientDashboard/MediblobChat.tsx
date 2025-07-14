"use client";
import React, { useState } from "react";

const MediblobChat = () => {
	const [chatStarted, setChatStarted] = useState(false);
	const [messages, setMessages] = useState<
		{ sender: "user" | "bot"; text: string }[]
	>([]);
	const [input, setInput] = useState("");

	const handleSend = () => {
		if (!input.trim()) return;

		setMessages((prev) => [...prev, { sender: "user", text: input }]);
		// Simulate bot response
		setTimeout(() => {
			setMessages((prev) => [
				...prev,
				{ sender: "bot", text: "I'm MediBlob! How can I help?" },
			]);
		}, 500);

		setInput("");
	};

	if (!chatStarted) {
		return (
			<div className="w-full border-2 border-black min-h-[55vh] items-center justify-center rounded-[10vh] flex flex-col px-[3vw] pt-[2vh] pb-[5vh]">
				<h2 className="text-[3.5vh] font-medium mb-[2vh]">MediBlob</h2>
				<img src="/mediblob.png" alt="" />
				<p className="text-center font-light mt-[3vh] text-[2vh]">
					MediBlob is an AI which you can ask questions while waiting for your
					doctor’s response.
				</p>
				<button
					onClick={() => setChatStarted(true)}
					className="border-2 border-black font-semibold w-full mx-[0.5vw] rounded-[2.5vh] py-[1vh] text-[2.5vh] mt-[2vh] cursor-pointer"
				>
					Start a Chat
				</button>
			</div>
		);
	}

	return (
		<div className="w-full border-2 border-black min-h-[55vh] rounded-[10vh] flex flex-col justify-between pt-[2vh] pb-[2vh] bg-white">
			<h2 className="text-[3vh] font-medium text-center mb-[1.25vh] px-[2vw] flex items-center justify-center gap-[1vw]">
				MediBlob <img src="/mediblob.png" className="h-[5vh]" alt="" />
			</h2>
			<div className="flex-1 overflow-y-auto border-y-2 border-black p-[1vh] mb-[1vh] bg-white">
				{messages.map((msg, index) => (
					<div
						key={index}
						className={`my-[0.5vh] p-[1vh] rounded-[2vh] max-w-[75%] ${
							msg.sender === "user"
								? "bg-blue-200 self-end text-right ml-auto"
								: "bg-gray-300 self-start"
						}`}
					>
						{msg.text}
					</div>
				))}
			</div>
			<div className="flex gap-2 items-center px-[2vw]">
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={(e) => e.key === "Enter" && handleSend()}
					placeholder="Type your message..."
					className="flex-1 border border-black/0 p-2 rounded-[1.5vh] text-[2vh] outline-none px-[1vw]"
				/>
			</div>
		</div>
	);
};

export default MediblobChat;
