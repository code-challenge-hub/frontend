'use client'

import { PropsWithChildren } from 'react'
import { SWRProvider } from './swr'
// 다른 provider들도 여기서 import

export function Providers({ children }: PropsWithChildren) {
  return (
    <SWRProvider>
      {/* 다른 provider들도 여기에 중첩 */}
      {children}
    </SWRProvider>
  )
}
