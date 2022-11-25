import { EmblaCarouselType } from 'embla-carousel-react'
import useEmblaCarousel from 'embla-carousel-react'
import React, { useCallback, useEffect } from 'react'
import ClassNames from 'embla-carousel-class-names'
import Autoplay from 'embla-carousel-autoplay'
import styles from '../styles/carousel.module.css'

interface ContextValue {
  embla: EmblaCarouselType | undefined
  selectedIndex: number
}

interface Props {
  className?: string
  children: React.ReactNode
}

export const CarouselContext = React.createContext<ContextValue>({
  embla: undefined,
  selectedIndex: -1
})

const Carousel: React.FC<Props> = ({ className, children }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [viewporRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      skipSnaps: false,
      align: 'center'
    },
    [ClassNames(), Autoplay()]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <CarouselContext.Provider value={{ embla: emblaApi, selectedIndex }}>
      <div
        ref={viewporRef}
        className={`${styles.viewport} w-full overflow-hidden ${className}`}
      >
        <div className={`${styles.container} flex`}>{children}</div>
      </div>
    </CarouselContext.Provider>
  )
}

export default Carousel
