import CustomCursor from './components/CustomCursor'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import About from './sections/About'
// import Contact from './sections/Contact'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

export default function App() {
  return (
    <>
      <CustomCursor />
      <div className='min-h-screen px-15 py-5'>
        <NavBar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          {/* <Contact /> */}
        </main>
        <Footer />
      </div>
    </>
  )
}
