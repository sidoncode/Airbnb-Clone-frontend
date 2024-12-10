import Link from 'next/link'
import Image from 'next/image'
import { Search, Globe, Menu, User } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="border-b">
      <div className="flex items-center justify-between px-4 py-4 max-w-7xl mx-auto">
        <Link href="/" className="text-airbnb-red">
          <Image
            src="/airbnb-logo.png"
            alt="Airbnb"
            width={102}
            height={32}
            priority
          />
        </Link>
        <div className="hidden md:flex items-center shadow-sm border rounded-full p-2">
          <Button variant="ghost" className="rounded-full">Anywhere</Button>
          <Button variant="ghost" className="rounded-full">Any week</Button>
          <Button variant="ghost" className="rounded-full">Add guests</Button>
          <Button size="icon" variant="ghost" className="rounded-full bg-airbnb-red text-white">
            <Search className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:inline-flex rounded-full">
            Airbnb your home
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Globe className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Menu className="h-4 w-4" />
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}

