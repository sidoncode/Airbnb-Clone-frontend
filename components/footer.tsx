import Link from 'next/link'

const footerLinks = [
  { title: 'Support', links: ['Help Center', 'AirCover', 'Safety information', 'Supporting people with disabilities', 'Cancellation options', 'Report a neighbourhood concern'] },
  { title: 'Community', links: ['Airbnb.org: disaster relief housing', 'Combating discrimination'] },
  { title: 'Hosting', links: ['Airbnb your home', 'AirCover for Hosts', 'Explore hosting resources', 'Visit our community forum', 'How to host responsibly'] },
  { title: 'Airbnb', links: ['Newsroom', 'Learn about new features', 'Letter from our founders', 'Careers', 'Investors', 'Gift cards'] },
]

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-gray-600 hover:underline">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t text-sm text-gray-600">
          <p>&copy; 2023 Airbnb, Inc. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="#" className="hover:underline">Privacy</Link>
            <Link href="#" className="hover:underline">Terms</Link>
            <Link href="#" className="hover:underline">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

