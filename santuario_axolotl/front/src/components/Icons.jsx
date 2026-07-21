export function WhatsappIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1s-.8.9-.9 1.1-.3.2-.6.1a7.8 7.8 0 0 1-2.3-1.4 8.6 8.6 0 0 1-1.6-2c-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5s0-.4 0-.5-.7-1.6-.9-2.2-.4-.5-.6-.5h-.6c-.2 0-.5.1-.7.4a3.7 3.7 0 0 0-1.1 2.7c0 1.6 1.1 3.1 1.3 3.3s2.2 3.4 5.4 4.7a6 6 0 0 0 3.6.7c.6-.1 1.7-.7 2-1.4s.3-1.2.2-1.4-.3-.2-.6-.3z" />
      <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2z" />
    </svg>
  )
}

export function EmailIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

export function ClockIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  )
}

export function PinIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 21s-7-6.5-7-11a7 7 0 0 1 14 0c0 4.5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

export function AxolotlMark({ className = 'w-10 h-10' }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      <circle cx="32" cy="32" r="32" fill="#0F4642" />
      <path d="M20 38c0-10 5-16 12-16s12 6 12 16-5 10-12 10-12 0-12-10z" fill="#F2A9C3" />
      <circle cx="26" cy="30" r="2.4" fill="#0A2E2B" />
      <circle cx="38" cy="30" r="2.4" fill="#0A2E2B" />
      <path d="M16 24c-3-2-4-6-3-9 3 1 6 3 7 6M48 24c3-2 4-6 3-9-3 1-6 3-7 6" stroke="#F2A9C3" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  )
}

export function FacebookIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z" />
    </svg>
  )
}

export function InstagramIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function TiktokIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M15.5 3h-3v12.2a2.6 2.6 0 1 1-2-2.53v-3.05a5.6 5.6 0 1 0 5 5.58V9.1c1 .7 2.2 1.1 3.5 1.1V7.2c-1.9 0-3.5-1.4-3.5-3.2z" />
    </svg>
  )
}

export function YoutubeIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="2.5" y="6" width="19" height="12" rx="3" />
      <path d="m10.5 9.5 5 2.5-5 2.5z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function CheckIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function MinusIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" className={className}>
      <path d="M5 12h14" />
    </svg>
  )
}

export function GillDivider({ flip = false, fill = '#FFFBF5' }) {
  return (
    <div className="w-full leading-none" style={{ height: 46, transform: flip ? 'scaleY(-1)' : 'none' }}>
      <svg viewBox="0 0 1200 46" preserveAspectRatio="none" className="w-full h-full block">
        <path
          d="M0 46 C 100 0 200 0 300 23 C 400 46 500 46 600 23 C 700 0 800 0 900 23 C 1000 46 1100 46 1200 23 L1200 46 L0 46 Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}
