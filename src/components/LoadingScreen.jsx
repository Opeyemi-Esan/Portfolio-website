import React, { Component, useEffect, useState } from 'react';


export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "Welcome To My Portfolio";

    useEffect (() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if(index > fullText.length) {
                clearInterval(interval);

                setTimeout(() => {
                  onComplete();
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center text-gray-100 bg-[url('https://thumbs.dreamstime.com/b/javascript-web-developer-blue-illustration-react-node-angular-bootstrap-jquery-php-368566688.jpg?w=992')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/90 backdrop-blur-3xl"></div>
        <div className='z-10 flex flex-col justify-center items-center'>
          <div className='font-bold text-2xl md:text-4xl mb-4'>{text}<span className='animate-blink ml-1'> | </span></div>

          <div className='w-sm md:w-md h-[2px] bg-gray-800 rounded relative overflow-hidden'>
            <div className='w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar'>
            </div>
          </div>
        </div>
        
      </div>
    );
};
