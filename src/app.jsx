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

    // Tieu de tab: boc tung chu, glow nhip nhay TUNG CHU MOT (chu ky 3s: sang 1.5s -> diu 1s), domino theo chu
    const codes = document.querySelectorAll('.family-code')
    codes.forEach((el) => {
      try {
        const isGold = el.classList.contains('gold')
        const isCyan = el.classList.contains('cyan')
        const isMint = el.classList.contains('mint')
        const cLo = isGold ? '230,180,40' : isMint ? '60,200,160' : isCyan ? '0,180,220' : '70,140,255'
        const cHi = isGold ? '255,220,90' : isMint ? '120,240,200' : isCyan ? '80,230,255' : '130,200,255'
        const text = el.textContent
        el.textContent = ''
        text.split('').forEach((ch, i) => {
          const sp = document.createElement('span')
          sp.textContent = ch
          sp.style.whiteSpace = 'pre'
          el.appendChild(sp)
          anims.push(sp.animate(
            [
              { textShadow: '0 0 1px rgba(' + cLo + ',.25), 0 1px 1px rgba(20,30,60,.35)' },
              { textShadow: '0 0 4px rgba(' + cHi + ',.8), 0 0 8px rgba(' + cHi + ',.5), 0 1px 1px rgba(20,30,60,.35)' },
              { textShadow: '0 0 4px rgba(' + cHi + ',.8), 0 0 8px rgba(' + cHi + ',.5), 0 1px 1px rgba(20,30,60,.35)' },
              { textShadow: '0 0 1px rgba(' + cLo + ',.25), 0 1px 1px rgba(20,30,60,.35)' },
            ],
            { duration: 3900, iterations: Infinity, delay: i * 156, easing: 'linear' }
          ))
        })
      } catch (e) {}
    })

    // Icon noi: rung 7s (7 nhip) -> xoay tron 2 nhip (1.5s) -> nghi 0.5s; hai icon lech nhau 0.3s
    const btns = document.querySelectorAll('.float-btn')
    btns.forEach((el, i) => {
      try {
        anims.push(el.animate(
          [
            { transform: 'rotate(0deg) scale(1)', offset: 0 },
            { transform: 'rotate(-8deg) scale(1.06)', offset: 0.0556 },
            { transform: 'rotate(7deg) scale(1.06)', offset: 0.111 },
            { transform: 'rotate(-7deg) scale(1.05)', offset: 0.167 },
            { transform: 'rotate(6deg) scale(1.05)', offset: 0.222 },
            { transform: 'rotate(-6deg) scale(1.04)', offset: 0.278 },
            { transform: 'rotate(5deg) scale(1.04)', offset: 0.333 },
            { transform: 'rotate(-5deg) scale(1.03)', offset: 0.389 },
            { transform: 'rotate(4deg) scale(1.03)', offset: 0.444 },
            { transform: 'rotate(-4deg) scale(1.02)', offset: 0.5 },
            { transform: 'rotate(3deg) scale(1.02)', offset: 0.556 },
            { transform: 'rotate(-3deg) scale(1.01)', offset: 0.611 },
            { transform: 'rotate(2deg) scale(1.01)', offset: 0.667 },
            { transform: 'rotate(-2deg) scale(1)', offset: 0.722 },
            { transform: 'rotate(0deg) scale(1)', offset: 0.778 },
            { transform: 'rotate(360deg) scale(1.08)', offset: 0.944 },
            { transform: 'rotate(0deg) scale(1)', offset: 1 },
          ],
          { duration: 9000, iterations: Infinity, delay: 300 + i * 300, easing: 'ease-in-out' }
        ))
      } catch (e) {}
    })

    // An icon noi khi cuon den cuoi trang (khong che chu footer), hien lai khi cuon len
    const chatEl = document.querySelector('.float-chat')
    const footerEl = document.querySelector('.site-footer')
    let chatObs = null
    if (chatEl && footerEl && 'IntersectionObserver' in window) {
      chatObs = new IntersectionObserver((entries) => {
        chatEl.classList.toggle('hide', entries[0].isIntersecting)
      }, { threshold: 0.05 })
      chatObs.observe(footerEl)
    }

    return () => {
      anims.forEach((a) => { try { a.cancel() } catch (e) {} })
      if (chatObs) chatObs.disconnect()
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
