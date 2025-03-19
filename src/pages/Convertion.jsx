import MonacoEditor from "../components/MonacoEditor";
import DropDown from "../components/DropDown";
import React, { useState, useEffect } from "react";
import { LANGUAGES } from "../constants";
import Button from "../components/Button";

const Convertion = () => {
	const [language, setLanguage] = useState("Selelct Language");
	const [language2, setLanguage2] = useState("Selelct Language for output");

	const [code, setCode] = useState("");
	const [code2, setCode2] = useState("");

	const [response, setResponse] = useState("")

	const [loading, setLoading] = useState(false)
	
	useEffect(() => {
		setCode2(response);
	}, [response]);

	useEffect(() => {
		setCode(LANGUAGES[language])
	}, [language])
	



	const handleClicGenerate = async () => {
		setCode2("");
		setLoading(true);
		const res = await fetch("https://bc86-34-86-116-209.ngrok-free.app/chat", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				model: "mymodel",
				stream: false,
				messages: [
					{
						role: "user",
						content: `${code} convert this code to ${language2} & also just give the code no extra line or any text`,
					},
				],
			}),
		});

		const data = await res.json(); // Convert response to JSON
		console.log("API Response:", data); // Log response

		console.log(data?.message?.content);

		let messageContent = data?.message?.content || "";

		// Remove the first occurrence of ```java (if it exists)
		if (messageContent.startsWith("```java")) {
			messageContent = messageContent.replace("```java", "").trim();
		}

		// Remove the last occurrence of ``` (if it exists)
		if (messageContent.endsWith("```")) {
			messageContent = messageContent.slice(0, -3).trim();
		}
		

		console.log(messageContent);
		setResponse(messageContent); // Store cleaned response

		// setResponse(data);
		setLoading(false);
	};

	// useEffect(() => {
	// 	const data = response.json();
	// 	setCode2(data)
	// }, [response]);

	return (
		<div className="realtive mt-10">
			<div className="flex justify-center gap-5">
				<div>
					<DropDown
						language={language}
						setLanguage={setLanguage}
						extraClass={"z-[9999]"}
					/>
					<MonacoEditor language={language} code={code} setCode={setCode} />
				</div>
				<div>
					<DropDown
						language={language2}
						setLanguage={setLanguage2}
						extraClass={"z-[9999] max-w-80 "}
					/>
					<MonacoEditor language={language2} code={code2} />
				</div>
			</div>
			<div className="bottom-2 mt-6 flex justify-center">
				<Button onclick={handleClicGenerate}>
					{loading ? (
						<span>
							<i class="fa fa-spinner fa-spin"></i> Loading
						</span>
					) : (
						<span>Generate</span>
					)}
				</Button>
			</div>
		</div>
	);
};

export default Convertion;
