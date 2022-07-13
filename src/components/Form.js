import React from "react";
import "./Form.css";

function Form({ value, onChange, onCreate, onKeyPress, nowColor }) {
	return (
		<div className="form">
			<input
				value={value}
				onChange={onChange}
				onKeyPress={onKeyPress}
				style={{ color: nowColor }}
			/>
			<div className="create-button" onClick={onCreate}>
				추가
			</div>
		</div>
	);
}

export default Form;
