import React, { Suspense, lazy, useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Experience from './components/Experiment';
import Projects from './components/Project';
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));


const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
    <div className="loader ease-linear rounded-full border-4 border-t-4 border-accent h-12 w-12 animate-spin"></div>
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;

// import About from './components/About';
// import Experience from './components/Experiment';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import Projects from './components/Project';
// import Skills from './components/Skills';

// function App() {
//   return (
//     <div className="min-h-screen">
//         <Header />
//         <main>
//         <Hero />
//         <About />
        // <Experience />
        // <Skills />
        // <Projects />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;
