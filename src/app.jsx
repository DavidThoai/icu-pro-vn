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

    // Tieu de tab: anh sang glow nhip nhang (WAAPI khong bi chan boi CSS)
    const codes = document.querySelectorAll('.family-code')
    codes.forEach((el) => {
      try {
        anims.push(el.animate(
          [
            { textShadow: '0 0 6px rgba(70,140,255,.45), 0 0 16px rgba(60,120,255,.3), 0 1px 2px rgba(20,30,60,.5)' },
            { textShadow: '0 0 12px rgba(130,200,255,.95), 0 0 30px rgba(90,160,255,.6), 0 1px 2px rgba(20,30,60,.5)' },
            { textShadow: '0 0 6px rgba(70,140,255,.45), 0 0 16px rgba(60,120,255,.3), 0 1px 2px rgba(20,30,60,.5)' },
          ],
          { duration: 2000, iterations: Infinity, easing: 'ease-in-out' }
        ))
      } catch (e) {}
    })

    // Tieu de vang: glow vang
    const golds = document.querySelectorAll('.family-code.gold')
    golds.forEach((el) => {
      try {
        anims.push(el.animate(
          [
            { textShadow: '0 0 6px rgba(230,180,40,.5), 0 0 16px rgba(210,150,20,.35), 0 1px 2px rgba(60,40,5,.5)' },
            { textShadow: '0 0 12px rgba(255,220,90,.95), 0 0 30px rgba(240,180,40,.65), 0 1px 2px rgba(60,40,5,.5)' },
            { textShadow: '0 0 6px rgba(230,180,40,.5), 0 0 16px rgba(210,150,20,.35), 0 1px 2px rgba(60,40,5,.5)' },
          ],
          { duration: 2000, iterations: Infinity, easing: 'ease-in-out' }
        ))
      } catch (e) {}
    })

    // Tieu de mint: glow xanh bac ha
    const mints = document.querySelectorAll('.family-code.mint')
    mints.forEach((el) => {
      try {
        anims.push(el.animate(
          [
            { textShadow: '0 0 6px rgba(60,200,160,.5), 0 0 16px rgba(40,180,140,.35), 0 1px 2px rgba(10,50,40,.5)' },
            { textShadow: '0 0 12px rgba(120,240,200,.95), 0 0 30px rgba(70,210,170,.65), 0 1px 2px rgba(10,50,40,.5)' },
            { textShadow: '0 0 6px rgba(60,200,160,.5), 0 0 16px rgba(40,180,140,.35), 0 1px 2px rgba(10,50,40,.5)' },
          ],
          { duration: 2000, iterations: Infinity, easing: 'ease-in-out' }
        ))
      } catch (e) {}
    })

    // Icon noi: rung nhe 3s + nghi 1s (4s/chu ky), lech nhau
    const btns = document.querySelectorAll('.float-btn')
    btns.forEach((el, i) => {
      try {
        anims.push(el.animate(
          [
            { transform: 'rotate(0deg) scale(1)' },
            { transform: 'rotate(-8deg) scale(1.06)', offset: 0.75 },
            { transform: 'rotate(7deg) scale(1.06)', offset: 0.8 },
            { transform: 'rotate(-4deg) scale(1.03)', offset: 0.85 },
            { transform: 'rotate(3deg) scale(1.03)', offset: 0.9 },
            { transform: 'rotate(0deg) scale(1)', offset: 0.95 },
            { transform: 'rotate(0deg) scale(1)' },
          ],
          { duration: 4000, iterations: Infinity, delay: 1000 + i * 400, easing: 'ease-in-out' }
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
