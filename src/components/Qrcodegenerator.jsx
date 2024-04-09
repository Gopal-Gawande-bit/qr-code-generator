import React, { useState } from "react"
import QRCode from "react-qr-code"

const Qrcodegenerator = () => {
  const [qrCode, setQrCode] = useState("")
  const [input, setInput] = useState("")
  const handleQr = () => {
    setQrCode(input)
    setInput("")
  }

  return (
    <>
      <div>
        <h1>Qrcodegenerator </h1>
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button
          onClick={handleQr}
          disabled={input && input.trim() !== "" ? false : true}
        >
          submit
        </button>
      </div>
      <div>
        <QRCode value={qrCode} size={400} bgColor="#fff" />
      </div>
    </>
  )
}

export default Qrcodegenerator
