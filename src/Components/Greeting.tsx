import React from 'react'

interface CounterProps {
   message:{text:string};
  }

const Greeting = (greetings:CounterProps) => {
    return (
        <div>
            {greetings.message.text&&<h3>{greetings.message}</h3>}
        </div>
    )
}

export default Greeting
