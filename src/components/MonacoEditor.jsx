import React from "react";
import { Editor } from "@monaco-editor/react";


const MonacoEditor = ({ language, code, setCode }) => {



    return (
			<div className="mt-4">
				<Editor
					height="65vh"
					width="46vw"
					theme="vs-dark"
					defaultValue="//add your code to convert"
					language={language}
					value={code}
					options={{
						fontSize: 15,
					}}
					defaultLanguage={"cpp"}
					className="rounded-2xl overflow-hidden border border-gray-300 shadow-[0px_5px_8px_rgba(0,0,0,1)] shadow-slate-500"
                onChange={(newValue) => {
						setCode(newValue);
					}}
				></Editor>
			</div>
		);
};

export default MonacoEditor;
