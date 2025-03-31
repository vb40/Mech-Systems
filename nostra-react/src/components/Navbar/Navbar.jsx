import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar({ mobileNavOpen, setMobileNavOpen }) {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand Logo */}
        <h1 className="text-2xl font-bold">Nostra</h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-gray-600">Home</a>
          <a href="/" className="hover:text-gray-600">New Arrival</a>
          <a href="/" className="hover:text-gray-600">Most Wanted</a>
          <a href="/collections" className="hover:text-gray-600">Collections</a>
          <a href="/contact" className="hover:text-gray-600">Contact Us</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-xl"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          {mobileNavOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileNavOpen && (
        <div className="md:hidden bg-white py-2 px-4 space-y-3">
          <a href="/" className="block hover:bg-gray-100 p-2">Home</a>
          <a href="/" className="block hover:bg-gray-100 p-2">New Arrival</a>
          <a href="/" className="block hover:bg-gray-100 p-2">Most Wanted</a>
          <a href="/collections" className="block hover:bg-gray-100 p-2">Collections</a>
          <a href="/contact" className="block hover:bg-gray-100 p-2">Contact Us</a>
        </div>
      )}
    </nav>
  )
}