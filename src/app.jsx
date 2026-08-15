import { useEffect, useState } from 'react'
import NavBar from './components/navbar.jsx'
import Hero from './components/hero.jsx'
import Products from './components/products.jsx'
import Formula from './components/formula.jsx'
import Contact from './components/contact.jsx'
import SiteFooter from './components/sitefooter.jsx'
import FloatingChat from './components/floatingchat.jsx'

function BubbleTrail() {
  useEffect(() => {
    let raf = null
    let lastX = null
    let lastY = null
    let lastT = 0

    const spawn = (x, y) => {
      const b = document.createElement('span')
      b.className = 'bubble'
      const size = 6 + Math.random() * 14
      b.style.width = size + 'px'
      b.style.height = size + 'px'
      b.style.left = x + 'px'
      b.style.top = y + 'px'
      b.style.setProperty('--bx', (Math.random() * 40 - 20) + 'px')
      b.style.setProperty('--by', (-30 - Math.random() * 40) + 'px')
      document.body.appendChild(b)
      b.addEventListener('animationend', () => b.remove())
    }

    const onMove = (e) => {
      const now = performance.now()
      if (lastX === null || now - lastT > 60) {
        spawn(e.clientX, e.clientY)
        lastX = e.clientX
        lastY = e.clientY
        lastT = now
      } else {
        const dx = e.clientX - lastX
        const dy = e.clientY - lastY
        const dist = Math.hypot(dx, dy)
        if (dist > 24) {
          spawn(e.clientX, e.clientY)
          lastX = e.clientX
          lastY = e.clientY
          lastT = now
        }
      }
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return null
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="app">
      <BubbleTrail />
      <NavBar scrolled={scrolled} />
      <main>
        <Hero />
        <Products />
        <Formula />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingChat />
    </div>
  )
}
