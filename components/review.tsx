import React from 'react'

interface Props {
  children: React.ReactNode
  by: string
}

const Review: React.FC<Props> = ({ children, by }) => (
  <div className="flex flex-col justify-center px-5 text-center md:px-10 lg:px-20">
    <div className="text-xl md:text-2xl leading-10 lg:leading-[3rem] tracking-tight">
      &ldquo;{children}&rdquo;
    </div>
    <div className="mt-6">&mdash; {by}</div>
  </div>
)
export default Review
