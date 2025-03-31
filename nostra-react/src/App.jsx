import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import OfferBar from './components/OfferBar/OfferBar'

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <div className="font-poppins">
      {/* Promotional Offer Bar */}
      <OfferBar />
      
      {/* Main Navigation */}
      <Navbar 
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      />
      
      {/* Page content will be added here */}
      <main className="container mx-auto px-4">
        {/* Future page components will go here */}
      </main>
    </div>
  )
}

export default App