import React from 'react'
import styled from '@emotion/styled'

import Image from 'next/image'
import Logo from './Logo'
import NavLink from './NavLink'

const FooterWrapper = styled.div`
  position: relative;
  background-color: #53575a;
  width: 100vw;
  height: fit-content;
  color: white;
  font-size: small;

  padding-top: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

const FooterContentWrapper = styled.div`
  font-size: small;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const FooterImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;

  & img {
    width: auto;
    height: 1.5rem;
    object-fit: contain;
  }
`
const FooterCopyRight = styled.div`
  width: 100vw;
  color: grey;
  font-size: 1rem;
  line-height: 1rem;
  padding: 1rem;
  text-align: center;
  border-top: 1px solid rgba(87, 90, 93, 1);
`

type Props = {}

const Footer = (props: Props) => {
  return (
    <FooterWrapper>
      <Logo size={72} />
      <FooterContentWrapper>
        <span> 威爾森行銷有限公司 </span>
        <span> 聯絡電話：(04)1234-5678 </span>
        <span> 營業時間：周一至周五 9:00~18:00 </span>
        <span> E-mail：service@wilson.tw </span>
        <span> Copyright © 威爾森行銷有限公司 </span>
        <span> All Rights Reserved.Design by 威爾森行銷 </span>
      </FooterContentWrapper>
      <FooterImageWrapper>
        <Image
          width='50'
          height='31'
          src='https://static.1shop.tw/storefront/3.1.90/dist/img/brand/visa.png'
          alt=''
        />
        <Image
          width='83'
          height='50'
          src='https://static.1shop.tw/storefront/3.1.90/dist/img/brand/mastercard.png'
          alt=''
        />
        <Image
          width='67'
          height='50'
          src='https://static.1shop.tw/storefront/3.1.90/dist/img/brand/jcb.png'
          alt=''
        />
        <Image
          width='130'
          height='50'
          src='https://static.1shop.tw/storefront/3.1.90/dist/img/brand/PAYUNi.png'
          alt=''
        />
        <Image
          width='157'
          height='50'
          src='https://static.1shop.tw/storefront/3.1.90/dist/img/brand/ecpay.png'
          alt=''
        />
        <Image
          width='101'
          height='50'
          src='https://static.1shop.tw/storefront/3.1.90/dist/img/brand/pchomepay.png'
          alt=''
        />
        <Image
          width='51'
          height='50'
          src='https://static.1shop.tw/storefront/3.1.90/dist/img/brand/7-11.png'
          alt=''
        />
        <Image
          width='54'
          height='50'
          src='https://static.1shop.tw/storefront/3.1.90/dist/img/brand/familymart.png'
          alt=''
        />
        <Image
          width='43'
          height='50'
          src='https://static.1shop.tw/storefront/3.1.90/dist/img/brand/hilife.png'
          alt=''
        />
        <Image
          width='259'
          height='50'
          src='https://static.1shop.tw/storefront/3.1.90/dist/img/brand/icashPay.png'
          alt=''
        />
        <Image
          width='78'
          height='50'
          src='https://static.1shop.tw/storefront/3.1.90/dist/img/brand/ApplePay.png'
          alt=''
        />
      </FooterImageWrapper>
      <FooterCopyRight>
        本系統由
        <NavLink href='https://www.google.com' externalLink>
          威爾森行銷
        </NavLink>
        維護
      </FooterCopyRight>
    </FooterWrapper>
  )
}

export default Footer
