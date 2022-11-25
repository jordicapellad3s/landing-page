import React from 'react'
import Carousel from './carousel'
import CarouselItem from './carousel-item'
import Review from './review'

const Testimonials: React.FC = () => {
  return (
    <Carousel className="py-10 text-white bg-black lg:py-20">
      <CarouselItem index={0}>
        <Review by="Axel (Showtime)">
          Margelo and Showtime both share the love for high-quality software,
          the passion for building something people want and the ambition of
          always doing our best. 10/10 would recommend working with Marc and his
          team.
        </Review>
      </CarouselItem>
      <CarouselItem index={1}>
        <Review by="Adam Carlton (CEO of Pink Panda)">
          Margelo is a collection of world class talent, from React Native to
          website, full stack to design - I&apos;ve been nothing but pleased
          with their communication, imagination, insight and delivery.
        </Review>
      </CarouselItem>
      <CarouselItem index={2}>
        <Review by="Alex (CEO of Steakwallet)">
          The output of Margelo is unlike any other team we&apos;ve worked with.
          Their speed, professionalism and familiarity with all things mobile
          helped turn Steakwallet into the slick application it is known as
          today.
        </Review>
      </CarouselItem>
      <CarouselItem index={3}>
        <Review by="Clinton (CEO of Slingshot)">
          Working with the Margelo team feels like a cheat code. When it comes
          to building performant and scalable React Native mobile apps,
          they&apos;re the best hands down.
        </Review>
      </CarouselItem>
      <CarouselItem index={4}>
        <Review by="Louise (CEO of Stori)">
          When we first found Margelo they seemed too good to be true.
          Professional, fast and ridiculously talented; the 3D AR Filter
          component they have developed for our React Native app is super smooth
          and responsive.
        </Review>
      </CarouselItem>
      <CarouselItem index={5}>
        <Review by="Roland (ExtraCard)">
          We were hitting the inevitable pains of rapid growth and needed to
          level up our app quickly. What would have taken us months took the
          Margelo team mere days. There is nothing they can&apos;t figure out or
          make happen. Simply the best.
        </Review>
      </CarouselItem>
      <CarouselItem index={6}>
        <Review by="Raffi (CEO of Steddy)">
          The talent, communication, and speed from Margelo is unlike any group
          of engineers I have worked with. Steddy&apos;s MVP launched with a
          level of performance and responsiveness that even I couldn&apos;t
          imagine before connecting with Marc&apos;s team.
        </Review>
      </CarouselItem>
    </Carousel>
  )
}

export default Testimonials
