import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-4 mt-4">
            <div className="container">
                <p className="mb-1">© 2025 React - Avelar. Todos los derechos reservados.</p>
                <p className="mb-1">
                    <a href="mailto:contacto@avelar.com" className="text-white text-decoration-none me-3">
                        avelaryesser@gmail.com
                    </a>
                    <span className="me-3">|</span>
                    <a href="tel:+123456789" className="text-white text-decoration-none">
                        +504 2378-4293
                    </a>
                </p>
                
                <p className="mb-0">
                    <a href="/privacy" className="text-white text-decoration-none me-3">Política de Privacidad</a>
                    <a href="/terms" className="text-white text-decoration-none me-3">Términos y Condiciones</a>
                </p>
                <p className="mt-3">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none me-3">
                        <FaFacebook size={20} className="me-1" /> Facebook
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none me-3">
                        <FaTwitter size={20} className="me-1" /> Twitter
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
                        <FaInstagram size={20} className="me-1" /> Instagram
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;