import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Cases from './components/Cases'
import Gallery from './components/Gallery'
import Writing from './components/Writing'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Cases />
        <Gallery />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
