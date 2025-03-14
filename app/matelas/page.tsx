import Image from 'next/image';
import { Button } from '@/components/ui/button';

const mattresses = [
  {
    id: 'royal',
    name: 'Royal',
    price: '2 990€',
    description: 'Notre matelas signature, conçu pour une expérience de sommeil incomparable.',
    features: [
      'Mousse à mémoire de forme premium',
      'Tissu en soie naturelle',
      'Soutien optimal de la colonne vertébrale',
      'Hauteur : 30cm'
    ],
    image: 'https://media.lacompagniedulit.com/9235/sommier-philippe-rey-h-17.jpg?t=1741686029&width=1600&func=cover'
  },
  {
    id: 'imperial',
    name: 'Impérial',
    price: '3 490€',
    description: 'Le summum du luxe et du confort pour un sommeil royal.',
    features: [
      'Technologie hybride ressorts ensachés',
      'Garnissage en laine mérinos',
      'Régulation thermique avancée',
      'Hauteur : 35cm'
    ],
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 'prestige',
    name: 'Prestige',
    price: '4 990€',
    description: 'Notre création la plus exclusive pour les plus exigeants.',
    features: [
      'Triple couche de confort adaptative',
      'Soie et cachemire naturels',
      'Système de ventilation innovant',
      'Hauteur : 40cm'
    ],
    image: 'https://media.lacompagniedulit.com/5598/pack-simmons-exception-easysom-eglantine-inox.jpg?t=1741692858&width=1600&func=cover'
  }
];

export default function Matelas() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-5xl text-center mb-16">Nos Matelas</h1>
        
        <div className="space-y-24">
          {mattresses.map((mattress, index) => (
            <div 
              key={mattress.id} 
              id={mattress.id}
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src={mattress.image}
                    alt={mattress.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <h2 className="font-serif text-4xl mb-4">{mattress.name}</h2>
                <p className="text-2xl text-gold mb-6">{mattress.price}</p>
                <p className="text-gray-600 mb-8">{mattress.description}</p>
                
                <div className="mb-8">
                  <h3 className="font-semibold mb-4">Caractéristiques:</h3>
                  <ul className="space-y-2">
                    {mattress.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="bg-sage hover:bg-sage/90 text-white px-8 py-6">
                  Commander
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}