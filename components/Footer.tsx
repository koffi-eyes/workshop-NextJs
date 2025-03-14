const Footer = () => {
  return (
    <footer className="bg-sage text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-serif mb-4">Matlux</h3>
            <p className="text-sm">
            Le confort absolu, l’élégance du sommeil.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm">
              Email: contact@matlux.fr<br />
              Téléphone: +33 1 01 01 01 01<br />
              Adresse: 123 Avenue du Sommeil<br />
              75008 Paris, France
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Liens Utiles</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/livraison" className="hover:text-gold">Livraison</a></li>
              <li><a href="/retours" className="hover:text-gold">Politique de Retour</a></li>
              <li><a href="/garantie" className="hover:text-gold">Garantie</a></li>
              <li><a href="/contact" className="hover:text-gold">Nous Contacter</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Matlux. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;