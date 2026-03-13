function Navbar() {
    return (
        <nav style={{
            display:"flex", 
            justifyContent:"space-between", 
            alignItems:"center", 
            padding:"1.2rem 2rem",
            borderBottom:"1px solid #2a2a2a"
            }}>
            <span style={{
                fontWeight: "bold",
                fontSize: "1.1rem"
            }}>
                Edwin Lim<span style={{color: "#FF4500"}}>.</span>
            </span>
            <ul style={{
                display:"flex",
                gap:"3rem",
                listStyle:"none"
            }}>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}
export default Navbar;