const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white text-center py-4">
        <p>© {new Date().getFullYear()} www.ciclismocordoba.com.ar</p>
        <p>Contacto: <a href="mailto:ciclismocordoba@gmail.com" className="underline">ciclismocordoba@gmail.com</a></p>
      </footer>
    );
  };
  
  export default Footer;
  