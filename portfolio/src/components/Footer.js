import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 mt-8">
            <div className="container mx-auto text-center">
                <p className="text-sm">© 2023 My Portfolio. All rights reserved.</p>
                <div className="mt-2">
                    <a href="https://github.com" className="text-white hover:underline mx-2">GitHub</a>
                    <a href="https://linkedin.com" className="text-white hover:underline mx-2">LinkedIn</a>
                    <a href="https://twitter.com" className="text-white hover:underline mx-2">Twitter</a>
                    <a href="https://instagram" className="text-white hover:underline mx-2">Instagram</a>
                    <a href="https://facebook" className="text-white hover:underline mx-2">Facebook</a>
                    <a href="https://pintrest" className="text-white hover:underline mx-2">Pintrest</a>
                </div>
            </div>
        </footer>
    )
}
export default Footer;