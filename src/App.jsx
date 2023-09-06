import { useState } from 'react'
import QRCode from 'react-qr-code'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [valueString, setValueString] = useState('')
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Đây là ứng dụng taọ QR code nhờ mã nhập vào</h1>
      <form>
        <input 
        type="text" 
        id='qrcode'
        value={valueString} 
        // onBlur={(event) => setValueString(event.target.value)}
        onChange={(event) => setValueString(event.target.value)}
        placeholder='Nhập địa chỉ url hoặc bất cứ đoạn text nào vào đây!' />
      </form>
      <div className="card">
        <button onClick={() => {
          return 
        }}>
          QR code
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {valueString && (
        <QRCode 
          title='QRcode'
          value={valueString}
        />
      )}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
