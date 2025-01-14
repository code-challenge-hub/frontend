interface CardProps {
  children: React.ReactNode
  className?: string
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`border rounded-lg w-full bg-white shadow-lg ${className}`}>
      {children}
    </div>
  )
}

export const CardHeader = ({ children, className = '' }: CardHeaderProps) => {
  return (
    <div className={`pt-[54px] pl-[45px] pb-[10px] ${className}`}>
      {children}
    </div>
  )
}

export const CardContent = ({ children, className = '' }: CardContentProps) => {
  return <div className={`px-[52px]${className}`}>{children}</div>
}
