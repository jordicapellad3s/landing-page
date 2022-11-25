import React from 'react'
import Image from 'next/image'
import SliderContainer, { SliderItem } from './slider'

const ClientLogos: React.FC = () => {
  return (
    <>
      <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/shopify.webp"
            width={150}
            height={50}
            alt="Shopify"
            style={{
              objectFit: 'contain'
            }}
          />
        </SliderItem>
        <SliderItem width={170}>
          <Image
            src="/assets/trustedby/coinbase.webp"
            width={150}
            height={50}
            alt="Coinbase"
            style={{
              objectFit: 'contain'
            }}
          />
        </SliderItem>
        <SliderItem width={170}>
          <Image
            src="/assets/trustedby/rainbow.webp"
            width={150}
            height={50}
            alt="Rainbow"
            style={{
              objectFit: 'contain'
            }}
          />
        </SliderItem>
        <SliderItem width={200}>
          <Image
            src="/assets/trustedby/walletconnect.webp"
            width={150}
            height={50}
            alt="WalletConnect"
            style={{
              objectFit: 'contain'
            }}
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/exodus.webp"
            width={150}
            height={50}
            alt="Exodus"
            style={{
              objectFit: 'contain'
            }}
          />
        </SliderItem>
        <SliderItem width={80}>
          <Image
            src="/assets/trustedby/picnic.webp"
            width={150}
            height={50}
            alt="Pinic"
            style={{
              objectFit: 'contain'
            }}
          />
        </SliderItem>
        <SliderItem width={140}>
          <Image
            src="/assets/trustedby/status.webp"
            width={150}
            height={50}
            alt="Status"
            style={{
              objectFit: 'contain'
            }}
          />
        </SliderItem>
        <SliderItem width={120}>
          <Image
            src="/assets/trustedby/extra.webp"
            width={150}
            height={50}
            alt="Extra"
            style={{
              objectFit: 'contain'
            }}
          />
        </SliderItem>
        <SliderItem width={110}>
          <Image
            src="/assets/trustedby/stori.webp"
            width={150}
            height={50}
            alt="Stori"
            style={{
              objectFit: 'contain'
            }}
          />
        </SliderItem>
        <SliderItem width={130}>
          <Image
            src="/assets/trustedby/nativescript.webp"
            width={150}
            height={50}
            alt="NativeScript"
            style={{
              objectFit: 'contain'
            }}
          />
        </SliderItem>
      </SliderContainer>
      <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/slingshot.webp"
            width={150}
            height={50}
            alt="Slingshot"
            style={{
              objectFit: 'contain'
            }}
          />
        </SliderItem>
        <SliderItem width={170}>
          <Image
            src="/assets/trustedby/showtime.webp"
            width={150}
            height={50}
            alt="Showtime"
            style={{
              objectFit: 'contain'
            }}
          />
        </SliderItem>
        <SliderItem width={170}>
          <Image
            src="/assets/trustedby/steakwallet.webp"
            width={150}
            height={50}
            alt="SteakWallet"
            style={{
              objectFit: 'contain'
            }}
          />
        </SliderItem>
        <SliderItem width={130}>
          <Image
            src="/assets/trustedby/expensify.webp"
            width={150}
            height={50}
            alt="Expensify"
            style={{
              objectFit: 'contain'
            }}
          />
        </SliderItem>
        <SliderItem width={200}>
          <Image
            src="/assets/trustedby/pinkpanda.webp"
            width={150}
            height={50}
            alt="Pink Panda"
            style={{
              objectFit: 'contain'
            }}
          />
        </SliderItem>
        <SliderItem width={130}>
          <Image
            src="/assets/trustedby/litentry.webp"
            width={150}
            height={50}
            alt="Litentry"
            style={{
              objectFit: 'contain'
            }}
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/scribeware.webp"
            width={150}
            height={50}
            alt="Scribeware"
            style={{
              objectFit: 'contain'
            }}
          />
        </SliderItem>
        <SliderItem width={120}>
          <Image
            src="/assets/trustedby/snapcalorie.webp"
            width={150}
            height={50}
            alt="Snap Calorie"
            style={{
              objectFit: 'contain'
            }}
          />
        </SliderItem>
        <SliderItem width={110}>
          <Image
            src="/assets/trustedby/tocsen.webp"
            width={110}
            height={50}
            alt="Tocsen"
            style={{
              objectFit: 'contain'
            }}
          />
        </SliderItem>
        <SliderItem width={130}>
          <Image
            src="/assets/trustedby/audubon.webp"
            width={150}
            height={50}
            alt="Audubon"
            style={{
              objectFit: 'contain'
            }}
          />
        </SliderItem>
      </SliderContainer>
    </>
  )
}

export default ClientLogos
