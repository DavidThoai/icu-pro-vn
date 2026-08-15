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

  // Ep hieu ung chay tren moi trinh duyet (khong phu thuoc cai dat he thong)
  useEffect(() => {
    const anims = []

    // Tieu de tab: glow domino - tung tab sang lan luot (0.5s dong + 0.5s nghi = 1s/chu ky)
    const codes = document.querySelectorAll('.family-code')
    codes.forEach((el, i) => {
      try {
        const isGold = el.classList.contains('gold')
        const isMint = el.classList.contains('mint')
        const cLo = isGold ? '230,180,40' : isMint ? '60,200,160' : '70,140,255'
        const cHi = isGold ? '255,220,90' : isMint ? '120,240,200' : '130,200,255'
        anims.push(el.animate(
          [
            { textShadow: '0 0 6px rgba(' + cLo + ',.45), 0 0 14px rgba(' + cLo + ',.3), 0 1px 2px rgba(20,30,60,.5)' },
            { textShadow: '0 0 12px rgba(' + cHi + ',.95), 0 0 28px rgba(' + cHi + ',.6), 0 1px 2px rgba(20,30,60,.5)' },
            { textShadow: '0 0 6px rgba(' + cLo + ',.45), 0 0 14px rgba(' + cLo + ',.3), 0 1px 2px rgba(20,30,60,.5)' },
          ],
          { duration: 1000, iterations: Infinity, delay: i * 250, easing: 'ease-in-out' }
        ))
      } catch (e) {}
    })

    // Icon noi: rung 10s + nghi 0.5s (10.5s/chu ky), domino lech 0.8s
    const btns = document.querySelectorAll('.float-btn')
    btns.forEach((el, i) => {
      try {
        anims.push(el.animate(
          [
            { transform: 'rotate(0deg) scale(1)', offset: 0 },
            { transform: 'rotate(-8deg) scale(1.06)', offset: 0.05 },
            { transform: 'rotate(7deg) scale(1.06)', offset: 0.15 },
            { transform: 'rotate(-5deg) scale(1.05)', offset: 0.25 },
            { transform: 'rotate(5deg) scale(1.05)', offset: 0.35 },
            { transform: 'rotate(-4deg) scale(1.03)', offset: 0.45 },
            { transform: 'rotate(4deg) scale(1.03)', offset: 0.55 },
            { transform: 'rotate(-3deg) scale(1.02)', offset: 0.65 },
            { transform: 'rotate(2deg) scale(1.02)', offset: 0.75 },
            { transform: 'rotate(-2deg) scale(1.01)', offset: 0.85 },
            { transform: 'rotate(0deg) scale(1)', offset: 0.95 },
            { transform: 'rotate(0deg) scale(1)', offset: 1 },
          ],
          { duration: 10500, iterations: Infinity, delay: 500 + i * 800, easing: 'ease-in-out' }
        ))
      } catch (e) {}
    })

    return () => {
      anims.forEach((a) => { try { a.cancel() } catch (e) {} })
    }
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
