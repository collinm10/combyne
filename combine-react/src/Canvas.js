import React, {useEffect, useRef} from "react";

const Canvas = props => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        //Drawing
        context.fillStyle='#000000';
        context.strokeStyle='#FC5959';
        context.rect(20,20,50,50);
        context.stroke();
        //context.fillRect(0,0,context.canvas.width, context.canvas.height);
    }, []);
    

    return <canvas ref={canvasRef} {...props}/>
}


export default Canvas