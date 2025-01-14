'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader } from '@/shared/ui/card'
import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/shared/ui/form'
import useSWRMutation from 'swr/mutation'
import { sendVerificationEmail } from '@/features/auth/api/auth'

type SignupStep = 'email' | 'verification'

const emailSchema = z.object({
  email: z.string().email('올바른 이메일 주소를 입력해주세요'),
})

type EmailFormValues = z.infer<typeof emailSchema>

export const SignupForm = () => {
  const [step, setStep] = useState<SignupStep>('email')

  const form = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: '',
    },
  })

  const { trigger, isMutating } = useSWRMutation(
    '/api/v1/auth/email/code',
    async (url) => {
      return await sendVerificationEmail(form.getValues('email'))
    },
  )

  const handleContinue = async (values: EmailFormValues) => {
    try {
      await trigger()
      setStep('verification')
    } catch (error) {
      console.error('Failed to send verification email:', error)
      form.setError('email', {
        type: 'manual',
        message: '인증 메일 발송에 실패했습니다. 다시 시도해주세요.',
      })
    }
  }

  if (step === 'verification') {
    return (
      <Card className="w-[605px] h-[540px]">
        <CardHeader>
          <h1 className="text-2xl">이메일 인증</h1>
        </CardHeader>
        <CardContent className="pt-5">
          <p className="mb-4">
            {form.getValues('email')}으로 4자코드를 보냈어요.
            <br />
            코드를 입력하고 이메일을 인증하세요.
          </p>
          <Input placeholder="인증코드" className="mb-5" />
          <Button className="w-full">인증하기</Button>
          <button
            onClick={() => setStep('email')}
            className="mt-4 text-gray-500 text-sm"
          >
            이메일 주소 변경
          </button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-[605px] h-[540px]">
      <CardHeader>
        <h1 className="text-2xl">회원가입</h1>
      </CardHeader>
      <CardContent className="pt-5">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleContinue)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="이메일주소" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              계속하기
            </Button>
          </form>
        </Form>
        <div className="mt-7 py-4 flex items-center justify-center gap-3">
          <p>이미 계정이 있으신가요?</p>
          <Link className="underline" href="/login">
            로그인
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
