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

interface CardFooterProps {
  children: React.ReactNode
  className?: string
}

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div
      className={`border rounded-lg bg-white shadow-lg min-h-[400px] flex flex-col ${className}`}
    >
      {children}
    </div>
  )
}

export const CardHeader = ({ children, className = '' }: CardHeaderProps) => {
  return <div className={`pt-14 pl-11 pb-2 ${className}`}>{children}</div>
}

export const CardContent = ({ children, className = '' }: CardContentProps) => {
  return <div className={`px-12 flex-1 ${className}`}>{children}</div>
}

export const CardFooter = ({ children, className = '' }: CardFooterProps) => {
  return <div className={`mt-auto  ${className}`}>{children}</div>
}
