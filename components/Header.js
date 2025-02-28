function Header() {
    try {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);

        return (
            <header data-name="header" className="fixed w-full top-0 z-50 bg-opacity-90 backdrop-blur-md bg-[#1E3A8A]">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div data-name="logo" className="text-2xl font-bold text-white">
                        ARIGEN
                    </div>
                    
                    <nav data-name="nav-menu" className="hidden md:flex space-x-8">
                        <a href="#kit" className="text-white hover:text-blue-300 transition-colors">DNA Kit</a>
                        <a href="#features" className="text-white hover:text-blue-300 transition-colors">Features</a>
                        <a href="#pricing" className="text-white hover:text-blue-300 transition-colors">Pricing</a>
                        <a href="#contact" className="text-white hover:text-blue-300 transition-colors">Contact</a>
                    </nav>
                    
                    <button data-name="mobile-menu" 
                            className="md:hidden text-white"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                </div>
                
                {isMenuOpen && (
                    <div data-name="mobile-nav" className="md:hidden bg-[#1E3A8A] py-4">
                        <div className="container mx-auto px-4 flex flex-col space-y-4">
                            <a href="#kit" className="text-white hover:text-blue-300 transition-colors">DNA Kit</a>
                            <a href="#features" className="text-white hover:text-blue-300 transition-colors">Features</a>
                            <a href="#pricing" className="text-white hover:text-blue-300 transition-colors">Pricing</a>
                            <a href="#contact" className="text-white hover:text-blue-300 transition-colors">Contact</a>
                        </div>
                    </div>
                )}
            </header>
        );
    } catch (error) {
        console.error('Header render error:', error);
        reportError(error);
        return null;
    }
}
