import { useRouter } from "next/router";
const Footer = () => {
  const router = useRouter();
  const route = router.pathname;
  return (
    <footer className={`bg-gray-800 text-white py-6 w-screen`}>
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Emigrapp. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
