import "./navbar.css"

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">TripSnooze</span>
            <div className="navItems">
                <button className="navbutton">Register</button>
                <button className="navbutton">Sign In</button>
            </div>
        </div>
    </div>
  )
}
