import About from './(pages)/about/page'
import Contact from './(pages)/contact/page'
import Projects from './(pages)/projects/page'
import Skills from './(pages)/skills/page'
import  Main  from './components/Main'

export default function Home() {
  return (
   <div className='overflow-x-hidden'>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
   </div>
  )
}
