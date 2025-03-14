import Image from 'next/image';

export default function APropos() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="Atelier Matlux"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">
            Notre Histoire
          </h1>
          <p className="text-xl max-w-2xl">
            Depuis 1985, Matlux redéfinit l'art du sommeil de luxe en France.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl mb-6 text-sage">Notre Savoir-faire</h2>
              <p className="text-gray-600 mb-4">
                Chez Matlux, nous perpétuons une tradition d'excellence artisanale transmise de génération en génération. Chaque matelas est le fruit d'un travail minutieux, réalisé à la main par nos maîtres artisans dans notre atelier parisien.
                
              </p>
              <p className="text-gray-600">
              Découvrez Mat’lux, la promesse d'un sommeil d'exception. Nos matelas allient innovation et raffinement, offrant un confort unique, conçu pour vous envelopper dans un cocon de douceur chaque nuit. Avec Mat’lux, chaque détail compte : des matériaux premium, une technologie de pointe et un design soigné, pour un bien-être optimal. Parce que vous méritez de dormir dans le luxe, choisissez Mat’lux, l’élégance du sommeil à portée de main.
              </p>
              <p className="text-gray-600">
                Nous sélectionnons les matériaux les plus nobles et les plus durables pour créer des matelas d'exception qui allient confort optimal et élégance intemporelle.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://media.lacompagniedulit.com/11289/pack-deco-andre-renault-ergolink-primflex-montreal.jpg"
                alt="Artisan au travail"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-sage/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl text-center mb-16">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="font-serif text-2xl mb-4 text-gold">Excellence</h3>
              <p className="text-gray-600">
                Nous ne faisons aucun compromis sur la qualité de nos produits et services.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-2xl mb-4 text-gold">Innovation</h3>
              <p className="text-gray-600">
                Nous intégrons les dernières avancées technologiques à notre savoir-faire traditionnel.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-2xl mb-4 text-gold">Durabilité</h3>
              <p className="text-gray-600">
                Nous nous engageons pour un avenir plus durable à travers nos choix de matériaux et nos processus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl mb-8">Nos Certifications</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Tous nos produits sont certifiés par les plus hautes instances de qualité et respectent les normes environnementales les plus strictes.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['ISO 9001', 'Oeko-Tex®', 'EPV', 'Made in France'].map((cert) => (
              <div key={cert} className="p-6 border border-sage/20 rounded-lg">
                <p className="font-serif text-xl text-sage">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}