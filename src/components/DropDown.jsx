import React, { useState } from 'react'
import { LANGUAGES } from "../constants"
import { clsx } from 'clsx'

const DropDown = ({language, setLanguage, extraClass}) => {
  const [isOpen, setIsOpen] = useState(false)
  

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleLanguage = (event) => {
    setLanguage(event.target.value);
  }


  return (
		<div
			className={clsx("relative text-white border-2 flex justify-center base-bold font-poppins border-gray-400 max-w-48 min-h-10 rounded-2xl pl-2 pr-2 hover:cursor-pointe button-hover pt-1.5", extraClass)}
			onClick={handleClick}
		>
			{language.toUpperCase()} {'>'}
			{isOpen && (
				<div
					className="absolute mt-10 border rounded  mb-11 bg-slate-900"
					onClick={handleLanguage}
				>
					{Object.keys(LANGUAGES).map((lang) => (
						<option
							key={lang}
							value={lang}
							className="hover:cursor-pointer button-hover z-10 p-2"
						>
							{lang.toUpperCase()}
						</option>
					))}
				</div>
			)}
		</div>
	);
}

export default DropDown