'use client'

import { SWRConfig } from 'swr'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => fetch(url).then((res) => res.json()),
        revalidateOnFocus: false, // 탭 전환시 재검증 비활성화
        revalidateOnReconnect: true, // 재연결시 재검증
      }}
    >
      {children}
    </SWRConfig>
  )
}
