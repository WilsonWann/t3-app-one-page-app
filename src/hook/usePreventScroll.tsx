import { useEffect } from 'react'

type Props = {
  active: boolean
}

const usePreventScroll = (props: Props) => {
  const { active } = props
  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : 'auto'
  }, [active])
}

export default usePreventScroll
