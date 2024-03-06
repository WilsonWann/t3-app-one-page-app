import React from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import styled from '@emotion/styled'

type Props = {
  id: string
  title: string
}

const YoutubeEmbed = styled.div`
  position: relative;
  width: 100vw;
  height: auto;
  aspect-ratio: 16/9;
`

const LiteYoutube = (props: Props) => {
  const { id, title } = props
  return (
    <YoutubeEmbed>
      <LiteYouTubeEmbed id={id} title={title} />
    </YoutubeEmbed>
  )
}

export default LiteYoutube
