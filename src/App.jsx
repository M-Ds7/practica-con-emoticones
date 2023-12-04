import React from 'react'
import './App.css'

const displayEmojiName = eve => alert(eve.target.id)
  const emojis =[
    {
      emoji: "😀",
      name: "face happy"
    },
    {
      emoji: "😄",
      name: "face smile"
    },
    {
      emoji: "😍",
      name: "face love"
    }
  ]

function App() {
  const greeting = "greeting"
  const displayAction = true
  return (
    <>
      <div className="container">
        <h1 id={greeting}>React JSX</h1>
        {displayAction && <p>Mo proyecto en JSX</p>}
        <ul>
          {
            emojis.map(emoji =>(
              <li key={emoji.name}>
                <button onClick={displayEmojiName}>
                  <span role='img' aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default App
