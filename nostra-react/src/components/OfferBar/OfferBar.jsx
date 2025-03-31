import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

export default function OfferBar() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="bg-black text-white py-2 px-4 text-center relative">
      <p className="text-sm">
        🎉 Special Offer! Get 20% off on all new arrivals. Use code: NOSTRA20
      </p>
      <button 
        className="absolute right-4 top-1/2 transform -translate-y-1/2"
        onClick={() => setVisible(false)}
        aria-label="Close offer"
      >
        <FaTimes className="text-white hover:text-gray-300" />
      </button>
    </div>
  )
}