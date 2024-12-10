import Image from 'next/image'

const destinations = [
  { name: 'Goa', image: '/destinations/goa.jpg' },
  { name: 'Mumbai', image: '/destinations/mumbai.jpg' },
  { name: 'Delhi', image: '/destinations/delhi.jpg' },
  { name: 'Jaipur', image: '/destinations/jaipur.jpg' },
]

export default function FeaturedDestinations() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Featured destinations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {destinations.map((destination) => (
            <div key={destination.name} className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src={destination.image}
                alt={destination.name}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end p-4">
                <h3 className="text-white font-semibold">{destination.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

