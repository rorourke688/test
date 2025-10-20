import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>React + TypeScript App</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
