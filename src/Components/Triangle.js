import React from "react";

const Triangle = ({width = 0, height = 0, fill = "transparent"} = {}) =>{
    return(
        <svg width={width} height={height}>
            <path stroke="#FC5959" stroke-width="10" fill-opacity="0" d={`M 0 0 L ${width} 0 L ${width / 2} ${height} L 0 0`} />
        </svg>
    );
};

export default Triangle;