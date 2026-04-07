'use client'

import { useEffect, useRef } from 'react'

export default function AstroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // ── Scene layers ──────────────────────────────────────────────────────────
    const filters = [
      'brightness(0.55) contrast(1.3) saturate(1.6)',
      'brightness(0.45) contrast(1.4) saturate(1.4)',
      'brightness(0.5)  contrast(1.25) saturate(1.8)',
      'brightness(0.4)  contrast(1.35) saturate(1.5)',
      'brightness(0.48) contrast(1.3)  saturate(1.7)',
    ]
    // Inject directly into body so fixed positioning is never clipped
    const layers: HTMLDivElement[] = []
    if (!document.getElementById('astro-scene-0')) {
      filters.forEach((f, i) => {
        const d = document.createElement('div')
        d.id = `astro-scene-${i}`
        d.style.cssText = `
          position:fixed;inset:0;width:100%;height:100%;
          background:url('/assets/images/bg${i + 1}.jpg') center/cover no-repeat;
          filter:${f};z-index:1;opacity:${i === 0 ? '1' : '0'};
          transform:scale(1.05);will-change:opacity,transform;
        `
        document.body.appendChild(d)
        layers.push(d)
      })
    } else {
      for (let i = 0; i < 5; i++) {
        const d = document.getElementById(`astro-scene-${i}`) as HTMLDivElement
        if (d) layers.push(d)
      }
    }

    // ── Scroll-driven crossfade ───────────────────────────────────────────────
    const SEGMENT = 0.25, PEAK = 0.025, BLEND = 0.1125
    let scrollProgress = 0, lerpedScroll = 0

    function smoothstep(x: number) {
      x = Math.max(0, Math.min(1, x))
      return x * x * (3 - 2 * x)
    }

    function updateScenes() {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      scrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0
    }

    window.addEventListener('scroll', updateScenes, { passive: true })

    // ── Mouse parallax ────────────────────────────────────────────────────────
    let mx = 0, my = 0, lmx = 0, lmy = 0
    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2
      my = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouse)

    // Inject overlay into body
    let overlay = document.getElementById('astro-overlay')
    if (!overlay) {
      overlay = document.createElement('div')
      overlay.id = 'astro-overlay'
      overlay.style.cssText = `
        position:fixed;inset:0;z-index:2;pointer-events:none;
        background:linear-gradient(to bottom,rgba(0,0,0,0.45) 0%,rgba(0,0,0,0.28) 50%,rgba(0,0,0,0.45) 100%);
      `
      document.body.appendChild(overlay)
    }

    // Move canvas into body
    const canvas = canvasRef.current!
    canvas.style.cssText = 'position:fixed;inset:0;z-index:3;pointer-events:none;'
    document.body.appendChild(canvas)

    const ctx = canvas.getContext('2d')!

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // ── Stars ─────────────────────────────────────────────────────────────────
    interface Star { x: number; y: number; r: number; layer: number; phase: number; speed: number }
    const stars: Star[] = Array.from({ length: 230 }, () => ({
      x: Math.random(), y: Math.random(),
      r: Math.random() * 1.4 + 0.3,
      layer: Math.floor(Math.random() * 3),
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.0003 + 0.0001,
    }))
    const layerDepth = [0.3, 0.6, 1.0]
    const layerParallax = [0.008, 0.018, 0.032]

    // ── Shooting stars ────────────────────────────────────────────────────────
    interface Shooter { x: number; y: number; vx: number; vy: number; life: number; maxLife: number }
    const shooters: Shooter[] = []
    function spawnShooter() {
      const angle = (Math.random() * 30 + 15) * (Math.PI / 180)
      shooters.push({
        x: Math.random() * 0.8, y: Math.random() * 0.4,
        vx: Math.cos(angle) * 0.012, vy: Math.sin(angle) * 0.012,
        life: 0, maxLife: 40 + Math.random() * 30,
      })
    }
    let shooterTimer = 0

    // ── Comets ────────────────────────────────────────────────────────────────
    interface Comet { x: number; y: number; vx: number; vy: number; life: number; maxLife: number; tailLen: number }
    const comets: Comet[] = []
    function spawnComet() {
      comets.push({
        x: -0.05, y: Math.random() * 0.6,
        vx: 0.0015 + Math.random() * 0.001, vy: 0.0003 + Math.random() * 0.0003,
        life: 0, maxLife: 600 + Math.random() * 200, tailLen: 0.12 + Math.random() * 0.08,
      })
    }
    let cometTimer = 0

    // ── Black holes ───────────────────────────────────────────────────────────
    interface BlackHole { x: number; y: number; vx: number; vy: number; life: number; maxLife: number; r: number; angle: number }
    const blackHoles: BlackHole[] = []
    function spawnBlackHole() {
      blackHoles.push({
        x: 0.1 + Math.random() * 0.8, y: 0.1 + Math.random() * 0.8,
        vx: (Math.random() - 0.5) * 0.0003, vy: (Math.random() - 0.5) * 0.0003,
        life: 0, maxLife: 900 + Math.random() * 300, r: 18 + Math.random() * 14, angle: 0,
      })
    }

    // ── Supernovas ────────────────────────────────────────────────────────────
    interface Supernova { x: number; y: number; life: number; maxLife: number }
    const supernovas: Supernova[] = []
    function spawnSupernova() {
      supernovas.push({
        x: 0.1 + Math.random() * 0.8, y: 0.1 + Math.random() * 0.8,
        life: 0, maxLife: 180,
      })
    }

    // ── Neutron stars ─────────────────────────────────────────────────────────
    interface NeutronStar { x: number; y: number; life: number; maxLife: number; angle: number }
    const neutronStars: NeutronStar[] = []
    function spawnNeutronStar() {
      neutronStars.push({
        x: 0.1 + Math.random() * 0.8, y: 0.1 + Math.random() * 0.8,
        life: 0, maxLife: 500 + Math.random() * 200, angle: 0,
      })
    }

    // ── Spawn initial objects ─────────────────────────────────────────────────
    spawnBlackHole(); spawnBlackHole()
    spawnNeutronStar(); spawnNeutronStar()
    spawnComet(); spawnComet(); spawnComet()

    // ── Draw helpers ──────────────────────────────────────────────────────────
    function fadeAlpha(life: number, maxLife: number, fadeIn = 60, fadeOut = 60) {
      if (life < fadeIn) return life / fadeIn
      if (life > maxLife - fadeOut) return (maxLife - life) / fadeOut
      return 1
    }

    function drawStars(t: number) {
      const W = canvas.width, H = canvas.height
      const scrolled = lerpedScroll > 0.5
      stars.forEach(s => {
        const depth = layerDepth[s.layer]
        const px = layerParallax[s.layer]
        let x = (s.x + lmx * px) % 1
        let y = s.y - (scrolled ? s.speed * t * 0.01 : 0)
        if (y < 0) y += 1
        const twinkle = 0.6 + 0.4 * Math.sin(t * 0.05 * depth + s.phase)
        ctx.beginPath()
        ctx.arc(x * W + lmy * px * W * 0.5, y * H, s.r * twinkle, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${0.5 * twinkle * depth})`
        ctx.fill()
      })
    }

    function drawSupernovas() {
      const W = canvas.width, H = canvas.height
      supernovas.forEach(sn => {
        const p = sn.life / sn.maxLife
        const alpha = fadeAlpha(sn.life, sn.maxLife, 10, 60)
        const flash = p < 0.1 ? p / 0.1 : 0
        if (flash > 0) {
          ctx.beginPath()
          ctx.arc(sn.x * W, sn.y * H, 60 * flash, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255,220,100,${flash * 0.8})`
          ctx.fill()
        }
        const ss = smoothstep(Math.min(1, (p - 0.1) / 0.9))
        const ring = ss * 120
        if (ring > 0) {
          ctx.beginPath()
          ctx.arc(sn.x * W, sn.y * H, ring, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(255,180,60,${alpha * 0.7})`
          ctx.lineWidth = 2
          ctx.stroke()
        }
      })
    }

    function drawBlackHoles() {
      const W = canvas.width, H = canvas.height
      blackHoles.forEach(bh => {
        const alpha = fadeAlpha(bh.life, bh.maxLife)
        const cx = bh.x * W, cy = bh.y * H
        // Grav lens glow
        const grd = ctx.createRadialGradient(cx, cy, bh.r * 0.5, cx, cy, bh.r * 3)
        grd.addColorStop(0, `rgba(255,180,40,${alpha * 0.18})`)
        grd.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.beginPath(); ctx.arc(cx, cy, bh.r * 3, 0, Math.PI * 2)
        ctx.fillStyle = grd; ctx.fill()
        // Accretion rings
        ;[1.8, 2.2, 2.7].forEach((rx, i) => {
          ctx.save()
          ctx.translate(cx, cy)
          ctx.rotate(bh.angle + i * 0.4)
          ctx.scale(1, 0.35)
          ctx.beginPath()
          ctx.ellipse(0, 0, bh.r * rx, bh.r * rx, 0, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(255,${160 + i * 20},40,${alpha * (0.5 - i * 0.1)})`
          ctx.lineWidth = 2 - i * 0.4
          ctx.stroke()
          ctx.restore()
        })
        // Core
        ctx.beginPath(); ctx.arc(cx, cy, bh.r * 0.45, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,0,0,${alpha})`; ctx.fill()
      })
    }

    function drawNeutronStars() {
      const W = canvas.width, H = canvas.height
      neutronStars.forEach(ns => {
        const alpha = fadeAlpha(ns.life, ns.maxLife)
        const cx = ns.x * W, cy = ns.y * H
        const pulse = 0.7 + 0.3 * Math.sin(ns.life * 0.15)
        // Halo
        const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, 30 * pulse)
        grd.addColorStop(0, `rgba(160,200,255,${alpha * 0.5})`)
        grd.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.beginPath(); ctx.arc(cx, cy, 30 * pulse, 0, Math.PI * 2)
        ctx.fillStyle = grd; ctx.fill()
        // Beams
        ;[0, Math.PI].forEach(offset => {
          const bx = Math.cos(ns.angle + offset) * 80
          const by = Math.sin(ns.angle + offset) * 80
          const bg = ctx.createLinearGradient(cx, cy, cx + bx, cy + by)
          bg.addColorStop(0, `rgba(180,220,255,${alpha * 0.8})`)
          bg.addColorStop(1, 'rgba(180,220,255,0)')
          ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + bx, cy + by)
          ctx.strokeStyle = bg; ctx.lineWidth = 2 * pulse; ctx.stroke()
        })
        // Core dot
        ctx.beginPath(); ctx.arc(cx, cy, 3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(220,240,255,${alpha})`; ctx.fill()
      })
    }

    function drawComets() {
      const W = canvas.width, H = canvas.height
      comets.forEach(c => {
        const alpha = fadeAlpha(c.life, c.maxLife, 80, 80)
        const cx = c.x * W, cy = c.y * H
        // Tail points opposite to velocity direction
        const speed = Math.sqrt(c.vx * c.vx + c.vy * c.vy)
        const tailX = cx - (c.vx / speed) * c.tailLen * W
        const tailY = cy - (c.vy / speed) * c.tailLen * W
        ;[
          { w: 6, a: 0.15 }, { w: 3, a: 0.35 }, { w: 1.5, a: 0.7 },
        ].forEach(({ w, a }) => {
          const g = ctx.createLinearGradient(tailX, tailY, cx, cy)
          g.addColorStop(0, 'rgba(180,220,255,0)')
          g.addColorStop(1, `rgba(220,240,255,${alpha * a})`)
          ctx.beginPath(); ctx.moveTo(tailX, tailY); ctx.lineTo(cx, cy)
          ctx.strokeStyle = g; ctx.lineWidth = w; ctx.stroke()
        })
        const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 8)
        cg.addColorStop(0, `rgba(255,255,255,${alpha})`)
        cg.addColorStop(1, 'rgba(180,220,255,0)')
        ctx.beginPath(); ctx.arc(cx, cy, 8, 0, Math.PI * 2)
        ctx.fillStyle = cg; ctx.fill()
      })
    }

    function drawShooters() {
      const W = canvas.width, H = canvas.height
      shooters.forEach(s => {
        const p = s.life / s.maxLife
        const alpha = p < 0.3 ? p / 0.3 : 1 - (p - 0.3) / 0.7
        // Trail: 5 frames back along velocity
        const trailX = (s.x - s.vx * 5) * W
        const trailY = (s.y - s.vy * 5) * H
        const g = ctx.createLinearGradient(trailX, trailY, s.x * W, s.y * H)
        g.addColorStop(0, 'rgba(255,255,255,0)')
        g.addColorStop(1, `rgba(255,255,255,${alpha * 0.9})`)
        ctx.beginPath()
        ctx.moveTo(trailX, trailY)
        ctx.lineTo(s.x * W, s.y * H)
        ctx.strokeStyle = g; ctx.lineWidth = 1.5; ctx.stroke()
      })
    }

    // ── Main rAF loop ─────────────────────────────────────────────────────────
    let t = 0, rafId = 0

    function tick() {
      t++
      // Lerp scroll & mouse
      lerpedScroll += (scrollProgress - lerpedScroll) * 0.035
      lmx += (mx - lmx) * 0.03
      lmy += (my - lmy) * 0.03

      // Update CSS vars for blob animations
      document.documentElement.style.setProperty('--mx', `${lmx * 30}px`)
      document.documentElement.style.setProperty('--my', `${lmy * 30}px`)

      // Scene crossfade
      layers.forEach((layer, idx) => {
        const centre = idx * SEGMENT
        const dist = Math.abs(lerpedScroll - centre)
        let opacity: number, scale: number
        if (dist <= PEAK) {
          opacity = 1; scale = 1.05
        } else if (dist <= PEAK + BLEND) {
          const s = smoothstep(1 - (dist - PEAK) / BLEND)
          opacity = s; scale = 1 + 0.05 * s
        } else {
          opacity = 0; scale = 1
        }
        layer.style.opacity = String(opacity)
        layer.style.transform = `scale(${scale})`
      })

      // Spawn timers
      shooterTimer++
      if (shooterTimer > 90 && shooters.length < 5) { spawnShooter(); shooterTimer = 0 }
      cometTimer++
      if (cometTimer > 400 && comets.length < 3) { spawnComet(); cometTimer = 0 }
      if (blackHoles.length < 2 && t % 600 === 0) spawnBlackHole()
      if (supernovas.length < 2 && t % 300 === 0) spawnSupernova()
      if (neutronStars.length < 2 && t % 450 === 0) spawnNeutronStar()

      // Advance & cull objects
      for (let i = shooters.length - 1; i >= 0; i--) {
        const s = shooters[i]
        s.x += s.vx; s.y += s.vy; s.life++
        if (s.life >= s.maxLife || s.x > 1.1) shooters.splice(i, 1)
      }
      for (let i = comets.length - 1; i >= 0; i--) {
        const c = comets[i]
        c.x += c.vx; c.y += c.vy; c.life++
        if (c.life >= c.maxLife || c.x > 1.1) comets.splice(i, 1)
      }
      blackHoles.forEach(bh => {
        bh.x += bh.vx; bh.y += bh.vy; bh.angle += 0.008; bh.life++
        if (bh.x < 0.05 || bh.x > 0.95) bh.vx *= -1
        if (bh.y < 0.05 || bh.y > 0.95) bh.vy *= -1
      })
      for (let i = blackHoles.length - 1; i >= 0; i--)
        if (blackHoles[i].life >= blackHoles[i].maxLife) blackHoles.splice(i, 1)
      supernovas.forEach(sn => sn.life++)
      for (let i = supernovas.length - 1; i >= 0; i--)
        if (supernovas[i].life >= supernovas[i].maxLife) supernovas.splice(i, 1)
      neutronStars.forEach(ns => { ns.angle += 0.04; ns.life++ })
      for (let i = neutronStars.length - 1; i >= 0; i--)
        if (neutronStars[i].life >= neutronStars[i].maxLife) neutronStars.splice(i, 1)

      // Draw
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawStars(t)
      drawSupernovas()
      drawBlackHoles()
      drawNeutronStars()
      drawComets()
      drawShooters()

      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', updateScenes)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
      // Clean up body-injected elements
      for (let i = 0; i < 5; i++) document.getElementById(`astro-scene-${i}`)?.remove()
      document.getElementById('astro-overlay')?.remove()
      if (canvas.parentNode === document.body) document.body.removeChild(canvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="bg-canvas"
      aria-hidden="true"
    />
  )
}
