import Expertise from '@/components/about/Expertise';
import Hero from '@/components/about/Hero';
import Team from '@/components/about/Team';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import Process from '@/components/home/Process';

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Expertise />
      <Team />
      <Process />
      <Footer />
    </div>
  );
};

export default About;
