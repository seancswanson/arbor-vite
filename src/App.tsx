import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <main className="main">
        <div className="top">
          <div className="profile-picture">
          </div>
          <div className="profile-name">@swanny3d</div>
        </div>
        <div className="bottom">
            <ul className="link-list">
              <a href="#" className="link-item">
                <div className="link-icon">
                  <img src="" alt="" />
                </div>
                <div className="link-text">Twitch</div>
              </a>
              <a href="#" className="link-item">
                <div className="link-icon">
                  <img src="" alt="" />
                </div>
                <div className="link-text">Instagram</div>
              </a>
            </ul>
        </div>
      </main>
    </div>
  )
}

export default App
