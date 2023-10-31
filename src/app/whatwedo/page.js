import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import Process from '@/components/home/Process';
import Hero from '@/components/whatwedo/Hero';
import Services from '@/components/whatwedo/Services';
import Steps from '@/components/whatwedo/Steps';
import Vision from '@/components/whatwedo/VIsion';

export default function Whatwedo() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Steps />
      <Vision />
      <Process />
      <Footer />
    </div>
  );
}
