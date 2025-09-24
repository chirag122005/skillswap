export default function Header() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] bg-gray-800 text-white rounded-2xl shadow-lg z-50">
      <nav className="flex items-center justify-between py-3 px-6">
        {/* Orange Button on Left */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium">
          Action
        </button>

        {/* Brand Name */}
        <h1 className="text-xl font-bold">MyBrand</h1>

        {/* Nav Links */}
        <ul className="flex gap-6 text-lg">
          <li><a href="#home" className="hover:text-orange-400">Home</a></li>
          <li><a href="#about" className="hover:text-orange-400">About</a></li>
          <li><a href="#services" className="hover:text-orange-400">Services</a></li>
          <li><a href="#contact" className="hover:text-orange-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
