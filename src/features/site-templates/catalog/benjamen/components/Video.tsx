'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { asset } from '../config/brand'
export function Video({ name, label }: { name: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null), visible = useInView(ref, { amount: .1 }), reduced = useReducedMotion(), [error, setError] = useState(false), [blocked, setBlocked] = useState(false)
  useEffect(() => {
    const video = ref.current
    if (!video) return
    let cancelled = false
    const sync = () => {
      if (visible && !reduced && !document.hidden) video.play().catch((reason: unknown) => {
        if (cancelled || (reason instanceof DOMException && reason.name === 'AbortError')) return
        console.warn('[benjamen:video] automatic playback unavailable', { name, reason: reason instanceof Error ? reason.name : 'unknown' }); setBlocked(true)
      })
      else video.pause()
    }
    sync(); document.addEventListener('visibilitychange', sync)
    return () => { cancelled = true; document.removeEventListener('visibilitychange', sync); video.pause() }
  }, [visible, reduced, name])
  return <div className="bj-video"><video ref={ref} src={asset(name)} muted loop playsInline controls={Boolean(reduced || blocked || error)} aria-label={label} onError={() => { console.error('[benjamen:video] asset failed', { name }); setError(true) }} />{error && <p role="alert">{label}: {label.includes('视频') ? '视频加载失败，请刷新重试' : 'Video failed to load. Please reload.'}</p>}</div>
}
