import { Input } from '@/shared/ui/input'
import { ComponentProps } from 'react'

export const LoginInput = (props: ComponentProps<typeof Input>) => {
  return <Input type="email" {...props} />
}
