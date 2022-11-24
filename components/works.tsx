import Image from 'next/image'
import React from 'react'
import { Tile, TileBackground, TileContent, TileWrapper } from './tile'
import { WorkBackgorund, WorkContainer, WorkLeft, WorkRight } from './work'

const Works = () => (
  <TileWrapper numOfPages={4}>
    <TileBackground>
      <WorkBackgorund />
    </TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderCotent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We designed and developd</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <span className="text-white">Stori&apos;s face filters.</span>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <div className="relative">
                <div className="absolute overflow-hidden rounded-3xl top-5 w-[84.5%] left-[7.7%]">
                  <video autoPlay playsInline loop muted className="">
                    <source src="/assets/works/stori.mp4" type="video/mp4" />
                  </video>
                </div>
                <span className="relative">
                  <Image
                    src="/assets/iphone-bezels.webp"
                    width={840}
                    height={1620}
                    alt="Iphone"
                    className=""
                  />
                </span>
              </div>
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={1}
        renderCotent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We made</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <span className="text-white">Coinbase Wallet faster.</span>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <div className="relative">
                <div className="absolute overflow-hidden rounded-3xl top-5 w-[84.5%] left-[7.7%]">
                  <video autoPlay playsInline loop muted className="">
                    <source
                      src="/assets/works/coinbase-wallet.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <span className="relative">
                  <Image
                    src="/assets/iphone-bezels.webp"
                    width={840}
                    height={1620}
                    alt="Iphone"
                    className=""
                  />
                </span>
              </div>
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={2}
        renderCotent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We build</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <span className="text-white">Pink Panda&apos;s app.</span>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/assets/works/pinkpanda.webp"
                width={840}
                height={1620}
                alt="Pink Panda"
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={3}
        renderCotent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We made</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <span className="text-white">Showtime faster.</span>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/assets/works/showtime.webp"
                width={840}
                height={1620}
                alt="Pink Panda"
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
)

export default Works
