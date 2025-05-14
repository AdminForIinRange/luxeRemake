import React, { useState } from 'react'

const GptLuxeCalc = () => {
    const [response, setResponse] = useState(null)
  
    const handleClick = async () => {
      const res = await fetch('/api/gpt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: 'HI' }),
      })
  
      const data = await res.json()
      setResponse(data.response)
    }
  
    return (
      <div>
        <button onClick={handleClick}>Get Joke</button>
        <p>{response}</p>
      </div>
    )
}

export default GptLuxeCalc