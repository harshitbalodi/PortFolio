function Navigation({ mobileMenuOpen, setMobileMenuOpen }) {
  const navItems = ['About', 'Projects', 'Resume', 'Contact'];

  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#hero" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            JD
          </a>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-slate-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            {navItems.map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-slate-300 hover:text-cyan-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
export default Navigation;