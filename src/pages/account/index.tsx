'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

type Props = {}

const AccountPage = (props: Props) => {
  const { data: sessionData } = useSession()
  if (!sessionData || !sessionData.user) redirect('/')

  const user = sessionData.user
  console.log('🚀 ~ AccountPage ~ sessionData:', sessionData)

  const nameBlock = (
    <div>
      <label htmlFor={'username'}>姓名</label>
      <div>{user?.name ?? ''}</div>
      {/* <input id={'username'} name='username' value={user?.name ?? ''} /> */}
    </div>
  )

  const emailBlock = (
    <div>
      <label htmlFor={'email'}>電子信箱</label>
      <div>{user?.email ?? ''}</div>
      {/* <input id={'email'} name='email' value={user?.email ?? ''} /> */}
    </div>
  )

  const imageBlock = (
    <div>
      <label htmlFor={'image'}>照片</label>
      <div>{user?.image ?? ''}</div>
      {/* <input id={'image'} name='image' value={user?.image ?? ''} /> */}
    </div>
  )

  // const cellphoneBlock = cellphone ? (
  //   <>
  //     <div>
  //       <label htmlFor={'cellphone'}>手機號碼</label>
  //       <input id={'cellphone'} name='cellphone' value={user?.cellphone ?? ''} />
  //     </div>
  //   </>
  // ) : (
  //   <>
  //     <div>
  //       <label htmlFor={'cellphone'}>手機號碼</label>
  //       <input id={'cellphone'} name='cellphone' value={''} />
  //     </div>
  //   </>
  // )

  return (
    <>
      <div>{nameBlock}</div>
      <div>{emailBlock}</div>
      <div>{imageBlock}</div>
    </>
  )
}

export default AccountPage
