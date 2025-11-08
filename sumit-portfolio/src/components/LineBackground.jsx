

import React from 'react'
import { useEffect, useState } from 'react'

const LineBackground = () => {
    const [lines, setLines] = useState([]);
   

    useEffect(() => {
       generateLine();
    } , []);


    const generateLine = () => {
        const numberOfLines = 5;
        const newLines = [];

        for (let i = 0; i < numberOfLines; i++) {
            newLines.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 150 - 50 ,
                y: Math.random() * 20 ,
                delay: Math.random() * 15,
                duration: Math.random() * 3 + 2,
                opacity: Math.random() * 100,
            });

        }

        setLines(newLines);
    }

    return (
        <div className='fixed inset-0 overflow-hidden z-0 pointer-events-auto'>

          

            {lines.map((line)=> (
                <div
                key={line.id} 
                className='linedrop animate-linedrop z-0 '
                style={{
                    width: `${line.size * 35}px`,
                    height: `${line.size}px`,
                    top: `${line.y}%`,
                    left: `${line.x}%`,
                    animationDelay: `${line.delay}`,
                    animationDuration: `${line.duration}s`,
                    opacity: line.opacity + "%",
                }}
                />
            ) 
            )
            }

        </div>
    )
}

export default LineBackground
