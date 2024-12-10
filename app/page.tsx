import Header from '@/components/header'
import Hero from '@/components/hero'
import FeaturedDestinations from '@/components/featured-destinations'
import ListingCategories from '@/components/listing-categories'
import Footer from '@/components/footer'



export default function Home(){
    return (
        <main className='min-h-screen flex flex-col'>



        <Header/>
        <Hero/>
        <FeaturedDestinations/>

        <ListingCategories/>

        <Footer/>

        </main>
    )
}