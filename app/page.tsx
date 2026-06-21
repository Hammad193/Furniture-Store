import HeroBanner from './components/HeroBanner';
import CategorySection from './components/CategorySection';
import BestSellers from './components/BestSellers';
import FAQ from './components/clinetdata/FAQ';
import Testimonial from './components/clinetdata/Testimonials';
import Facilities from './components/Facilities';
import AllProducts from './components/AllProducts';

export default function Home() {
  return (
    <main className="bg-white w-full min-h-screen pt-20">
      <HeroBanner />
      <CategorySection />
      <AllProducts />
      <BestSellers />
      <Facilities />
      <Testimonial />
      <FAQ />
    </main>
  );
}