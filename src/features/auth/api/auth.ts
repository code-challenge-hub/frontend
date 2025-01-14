export const sendVerificationEmail = async (email: string) => {
  const response = await fetch('/api/v1/auth/email/code', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  })

  if (!response.ok) {
    throw new Error('Failed to send verification email')
  }

  return response.json()
}
