'use client'
import { LoginInput } from '@/entities/user/ui/LoginInput'
import { Button } from '@/shared/ui/button'

export const LoginForm = () => {
  const handleSubmit = () => {
    console.log('test')
  }
  return (
    <form onSubmit={handleSubmit}>
      <LoginInput />
      <Button type="submit">Login</Button>
    </form>
  )
}
