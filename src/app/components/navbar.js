
export default function NavBar() {
    return (
        <nav className='nav'>
            <ul className='flex space-x-6'>
                <a href="#home">
                    <li className="nav-item">Home</li>
                </a>
                <a href="#services">
                    <li className="nav-item">Services</li>
                </a>
                
                <a href="#team">
                    <li className="nav-item">Equipes</li>
                </a>
            </ul>
            <span className="text-2xl">Nas delice</span>
        </nav>
    )
}