import React, { useCallback, useContext, useRef } from 'react'
import { SizeContext } from '../utils/size-observer'
import useAnimationFrame from '../utils/use-animation-frame'

interface Props {
  initialOffsetX: number
  className: string
  contentWidth: number
  children: React.ReactNode
}

const SliderContainer: React.FC<Props> = ({
  children,
  initialOffsetX,
  className,
  contentWidth
}) => {
  const { innerWidth } = useContext(SizeContext)
  const refScrollX = useRef<number>(initialOffsetX)
  const refContainer = useRef<HTMLDivElement>(null)
  const refContent = useRef<HTMLDivElement>(null)

  const enabled = innerWidth < contentWidth

  useAnimationFrame(
    enabled,
    useCallback(() => {
      const { current: elContainer } = refContainer
      const { current: elContent } = refContent
      if (elContainer && elContent) {
        refScrollX.current += 0.5
        elContainer.scrollLeft = refScrollX.current
        if (elContainer.scrollLeft >= elContent.clientWidth) {
          refScrollX.current = 0
          elContainer.scrollLeft = 0
        }
      }
    }, [])
  )

  return (
    <div
      ref={refContainer}
      className={`slider-container overflow-x-hidden whitespace-nowrap max-w-full pointer-events-none ${className}`}
    >
      <div ref={refContent} className="inline-block">
        {children}
      </div>
      <div className={enabled ? 'inline-block' : 'hidden'}>{children}</div>
    </div>
  )
}

interface ItemProps {
  children: React.ReactNode
  width: number
}
export const SliderItem: React.FC<ItemProps> = ({ children, width }) => (
  <div
    className="inline-flex items-center justify-center mx-4"
    style={{
      width: `${width}px`
    }}
  >
    {children}
  </div>
)

export default SliderContainer
