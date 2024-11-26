import { LoginForm } from '@/features/auth/ui/LoginForm'
import { Header } from '@/widgets/header/ui/Header'

export function HomePage() {
  return (
    <main>
      <Header />
      <LoginForm />
    </main>
  )
}
