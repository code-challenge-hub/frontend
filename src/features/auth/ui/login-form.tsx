'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/shared/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
import { useForm } from 'react-hook-form'

import { z } from 'zod'
import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui/card'
import Link from 'next/link'

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  password: z.string().min(2, {
    message: 'Password must be at least 2 characters.',
  }),
})

export const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Card className="w-[605px] h-[540px]">
      <CardHeader>
        <h1 className="text-2xl ">로그인</h1>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="이메일" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="비밀번호" type="password" {...field} />
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
      </CardContent>
      <CardFooter>
        <div className="flex gap-3 justify-end pt-2 px-5 pb-[15px]">
          <p>회원이 아닙니까?</p>
          <Link className="underline" href="/signup">
            회원가입하기
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}
