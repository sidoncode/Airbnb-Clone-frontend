import { Button } from '@/components/ui/button'
import { Home, Building, Tent, Palmtree } from 'lucide-react'

const categories = [
  { name: 'Houses', icon: Home },
  { name: 'Apartments', icon: Building },
  { name: 'Unique stays', icon: Tent },
  { name: 'Beach houses', icon: Palmtree },
]

export default function ListingCategories() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Explore listings</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Button key={category.name} variant="outline" className="h-auto py-8 flex-col gap-4">
              <category.icon className="h-8 w-8" />
              <span>{category.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

