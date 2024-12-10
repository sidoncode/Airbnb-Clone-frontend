import { Button } from '@/components/ui/button'
//import { Input } from '@/components/ui/input'
import {Input} from '@/components/ui/input'

import { Search } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-[600px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      <div className="relative max-w-5xl mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-white mb-6">Find your next stay</h1>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <form className="flex flex-wrap gap-4">
            <Input className="flex-grow" placeholder="Where are you going?" />
            <Input type="date" className="w-full md:w-auto" placeholder="Check in" />
            <Input type="date" className="w-full md:w-auto" placeholder="Check out" />
            <Input className="w-full md:w-auto" placeholder="Number of guests" />
            <Button type="submit" className="w-full md:w-auto bg-airbnb-red hover:bg-airbnb-red-dark text-white">
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

