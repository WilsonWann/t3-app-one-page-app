import React from 'react'
import styled from '@emotion/styled'
import DisplayTitle from './DisplayTitle'
import HorizontalLine from './HorizontalLine'
import Badge from './Badge'

const MarketingWrapper = styled.div``
const MarketingContent = styled.h3`
  padding: 0 1rem;
  margin: 1rem auto 2rem;
`

type Props = {
  title: string
  label: string
  content: string
}

const MarketingBlock = (props: Props) => {
  const { title, label, content } = props
  return (
    <MarketingWrapper id='marketing-discount-anchor'>
      <DisplayTitle title={title} />
      <MarketingContent>
        <Badge label={label} /> {content}{' '}
      </MarketingContent>

      <HorizontalLine />
    </MarketingWrapper>
  )
}

export default MarketingBlock
