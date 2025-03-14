import { Button } from '@/components/ui/button';

const offers = [
  {
    id: 'pack-essential',
    name: 'Pack Essential',
    price: '3 490€',
    originalPrice: '3 990€',
    description: 'Le pack parfait pour débuter votre expérience Matlux',
    items: [
      'Matelas Royal (160x200)',
      'Protège-matelas premium',
      'Livraison et installation offertes'
    ]
  },
  {
    id: 'pack-luxe',
    name: 'Pack Luxe',
    price: '4 990€',
    originalPrice: '5 790€',
    description: 'Une expérience de sommeil complète et luxueuse',
    items: [
      'Matelas Impérial (180x200)',
      'Protège-matelas premium',
      'Oreillers en plumes d\'oie x2',
      'Livraison et installation offertes'
    ]
  },
  {
    id: 'pack-prestige',
    name: 'Pack Prestige',
    price: '7 990€',
    originalPrice: '9 290€',
    description: 'Le summum du luxe pour votre chambre',
    items: [
      'Matelas Prestige (180x200)',
      'Protège-matelas premium',
      'Oreillers en plumes d\'oie x2',
      'Couette en duvet d\'oie',
      'Surmatelas en laine mérinos',
      'Livraison et installation offertes'
    ]
  }
];

export default function Offres() {
  return (
    <div className="py-20 bg-sage/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-5xl text-center mb-6">Nos Offres Spéciales</h1>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Découvrez nos packs exclusifs, soigneusement composés pour vous offrir l'expérience
          de sommeil ultime à un prix préférentiel.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div 
              key={offer.id}
              className="bg-white rounded-lg shadow-lg p-8 border border-sage/20 hover:border-gold/20 transition-colors"
            >
              <h2 className="font-serif text-3xl mb-2">{offer.name}</h2>
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-bold text-gold">{offer.price}</span>
                <span className="ml-2 text-gray-500 line-through text-sm">
                  {offer.originalPrice}
                </span>
              </div>
              
              <p className="text-gray-600 mb-6">{offer.description}</p>
              
              <div className="mb-8">
                <h3 className="font-semibold mb-4">Le pack inclut :</h3>
                <ul className="space-y-3">
                  {offer.items.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button className="w-full bg-sage hover:bg-sage/90 text-white">
                Commander ce Pack
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Tous nos packs incluent une garantie de 15 ans et un essai de 100 nuits
          </p>
          <p className="text-sm text-gray-500">
            * Offres valables dans la limite des stocks disponibles
          </p>
        </div>
      </div>
    </div>
  );
}