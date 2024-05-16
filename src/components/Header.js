import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router'; 


const Header = () => {
    const router = useRouter();
    return (
        <header className="bg-gradient-to-r from-blue-500 to-indigo-800 text-white py-6 sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                <div className="flex items-center">
                    <Image src="/images/logo.webp" alt="Emigrapp Logo" width={60} height={60} className="mr-3" />
                    <h1 className="text-3xl font-bold">Emigrapp</h1>
                    </div>
                </Link>
                <nav>
                    <ul className="flex space-x-6">
                        {router.pathname !== '/diagnostico' && (
                        <li className="relative group">
                            <Link href="/diagnostico" className="cursor-pointer">
                                <span className="transition-transform transform hover:scale-110 group-hover:shadow-lg group-hover:bg-white group-hover:text-blue-500 rounded-md px-2 py-1">Autodiagnóstico</span>
                            </Link>
                        </li>
                        )}
                        {router.pathname === '/' && (
                            <>
                        <li className="relative group">
                            <ScrollLink to="description" smooth={true} offset={-72} className="cursor-pointer">
                                <span className="transition-transform transform hover:scale-110 group-hover:shadow-lg group-hover:bg-white group-hover:text-blue-500 rounded-md px-2 py-1">Sobre Nosotros</span>
                            </ScrollLink>
                        </li>
                       
                        <li className="relative group">
                            <ScrollLink to="testimonials" smooth={true} offset={-72} className="cursor-pointer">
                                <span className="transition-transform transform hover:scale-110 group-hover:shadow-lg group-hover:bg-white group-hover:text-blue-500 rounded-md px-2 py-1">Testimonios</span>
                            </ScrollLink>
                        </li>
                        <li className="relative group">
                            <ScrollLink to="contact" smooth={true} offset={-72} className="cursor-pointer">
                                <span className="transition-transform transform hover:scale-110 group-hover:shadow-lg group-hover:bg-white group-hover:text-blue-500 rounded-md px-2 py-1">Contáctanos</span>
                            </ScrollLink>
                                </li>
                            </>
                            )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
