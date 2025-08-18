export function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <section className={`container-section ${className}`}>{children}</section>
}

export function TwoColumn({ left, right, className = '' }: { left: React.ReactNode; right: React.ReactNode; className?: string }) {
  return (
    <div className={`grid grid-cols-1 gap-8 md:grid-cols-2 ${className}`}>
      <div className="order-2 md:order-1">{left}</div>
      <div className="order-1 md:order-2">{right}</div>
    </div>
  )
}


