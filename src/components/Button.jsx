import React from "react";
import clsx from "clsx";

const Button = ({ children, onclick, id, extraClass}) => {
    return (
			<div className={clsx("text-white border-2 flex justify-center border-gray-400 min-w-32 min-h-10 rounded-2xl hover:cursor-pointe button-hover max-w-48 max-h-14", extraClass)}>
				<button
					className="font-poppins uppercase z-10 min-w-32 base-bold hover:text-[#2cfffb] hover:duration-500"
					onClick={onclick}
					key={id}
				>
					{children}
				</button>
			</div>
		);
};

export default Button;
