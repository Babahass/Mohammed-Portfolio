import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import FeaturedProject from "@/components/FeaturedProject";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation Bar Section */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <Stats />

      {/* Featured Project Section */}
      <FeaturedProject />

      {/* Other Projects Section */}
      <Projects />

      {/* Tech Stack Section */}
      <TechStack />


      {/* About Section */}
      <About /> 

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />


      {/* <section className="p-10">
        <h1 className="text-6xl font-bold">
          Mohammed Hassen
        </h1>

        <p className="mt-4 text-xl text-gray-400">
          Software Engineering Student
        </p>

        <p className="mt-2 text-gray-500">
          I build web and mobile applications.
        </p>
      </section> */}
    </main>
  );
}