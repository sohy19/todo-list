import React from "react";

const Palette = ({ colorList, onClick }) => {
	const colors = colorList.map((color, indx) => (
		<div
			className="palette_item"
			key={indx}
			style={{
				background: color,
				width: "33px",
				height: "33px",
				float: "left",
				margin: "10px",
			}}
			onClick={() => {
				onClick(color);
			}}
		></div>
	));
	return <div>{colors}</div>;
};

export default Palette;
