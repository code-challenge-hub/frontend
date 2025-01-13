'use client'
import { LoginInput } from '@/entities/user/ui/LoginInput'
import { postEmailAuth } from '@/shared/api/domain/auth/auth.api'
import { Button } from '@/shared/ui/button'
import { useState } from 'react'

export const LoginForm = () => {
  const [email, setEmail] = useState('')
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await postEmailAuth({
      email,
    })

    console.log(response)
  }
  return (
    <form onSubmit={handleSubmit}>
      <LoginInput
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit" className="bg-cchBlue">
        Login
      </Button>
    </form>
  )
}
