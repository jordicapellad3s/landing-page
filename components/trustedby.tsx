import React from 'react'
import ClientLogos from './client-logos'

const TrustedBy: React.FC = () => {
  return (
    <section className="flex flex-col justify-center min-h-screen gap-16 bg-white md:gap-32">
      <div className="flex-1"></div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="mb-10 text-xl font-bold text-center">
          <span className="whitespace-nowrap">trusted by</span>{' '}
          <span className="whitespace-nowrap">
            some of the apps you use daily
          </span>
        </h3>
        <ClientLogos />
      </div>
      <div>
        <div className="flex flex-col items-center justify-center">
          <div className="container mx-auto lg-max-w-[70%] lg:px-10">
            <h3 className="text-3xl lg:text-4xl tracking-tight text-center px-10 !leading-[3.5rem]">
              We believe in good communication and a fully transparent
              development process.
            </h3>
          </div>
        </div>
      </div>
      <div>Testimonials</div>
      <div className="flex-1 bg-black"></div>
    </section>
  )
}

export default TrustedBy
