import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <Image
          src="https://www.halleausommeil.fr/2209-large_default/matelas-bultex-benefique.jpg"
          alt="Luxury Bedroom"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">
            Le Luxe du Sommeil Parfait
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
          Mat’lux, l’alliance parfaite du confort et du luxe. Nos matelas haut de gamme sont conçus pour vous offrir une expérience de sommeil inégalée, alliant douceur, qualité et design raffiné. Offrez-vous le meilleur, chaque nuit.
          </p>
          <Link href="/matelas">
            <Button className="bg-gold hover:bg-gold/90 text-white px-8 py-6 text-lg">
              Découvrir nos Matelas
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="font-serif text-2xl mb-4 text-sage">Matériaux Premium</h3>
              <p className="text-gray-600">
                Des matériaux soigneusement sélectionnés pour un confort optimal.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-2xl mb-4 text-sage">Fabrication Artisanale</h3>
              <p className="text-gray-600">
                Chaque matelas est fabriqué à la main par nos artisans experts.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-2xl mb-4 text-sage">Garantie 15 ans</h3>
              <p className="text-gray-600">
                Une garantie exceptionnelle pour un investissement durable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Preview */}
      <section className="py-20 bg-sage/10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="font-serif text-4xl text-center mb-16 text-gray-900">
      Notre Collection
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { name: 'Royal', img: 'https://www.halleausommeil.fr/678-large_default/matelas-bultex-benefique.jpg' },
        { name: 'Imperial', img: 'https://www.halleausommeil.fr/291-large_default/matelas-simmons-sunday.jpg' },
        { name: 'Prestige', img: 'https://media.lacompagniedulit.com/11090/pack-deco-bultex-lyrique-reset-thera.jpg' }
      ].map(({ name, img }) => (
        <div key={name} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64">
            <Image
              src={img}
              alt={`Matelas ${name}`}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="font-serif text-2xl mb-2">{name}</h3>
            <p className="text-gray-600 mb-4">
              Le summum du confort et de l'élégance.
            </p>
            <Link href={`/matelas#${name.toLowerCase()}`}>
              <Button variant="outline" className="w-full border-gold text-gold hover:bg-gold hover:text-white">
                En savoir plus
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
}