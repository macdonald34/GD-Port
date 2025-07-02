

const Header = () => {
    return(
        <header className="bg-gray-800 text-white p-4">
            <h1 className="text-3xl font-bold">My Portfolio</h1>
            <nav className="mt-2">
                <ul className="flex space-x-4">
                    <li><a href="#about" className="hover:underline">About Me</a></li>
                    <li><a href="#skills" className="hover:underline">Skills</a></li>
                    <li><a href="#designs" className="hover:underline">Designs</a></li>
                    <li><a href="#typography" className="hover:underline">Typography</a></li>
                    <li><a href="#photos" className="hover:underline">Photos</a></li>
                    
                    
                </ul>
            </nav>
        </header>
    )
}

export default Header;