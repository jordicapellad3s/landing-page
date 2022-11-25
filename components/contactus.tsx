import React from 'react'
import Image from 'next/image'

const ContactUs: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-10 text-white bg-black">
      <div className="flex flex-col items-center justify-center flex-1 pt-10 lg:pt-6">
        <div className="pb-10">
          <Image src="/assets/logo.svg" width={30} height={30} alt="Logo" />
        </div>
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <form className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]">
          <input
            id="companyName"
            name="companyName"
            type="text"
            placeholder="Company Name"
            maxLength={128}
            required
            className="px-8 py-2 text-white bg-black border-2 border-white outline-none rounded-3xl"
          />
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            maxLength={128}
            required
            className="px-8 py-2 text-white bg-black border-2 border-white outline-none rounded-3xl"
          />
          <textarea
            id="message"
            name="message"
            maxLength={1048}
            placeholder="Additional Information"
            required
            className="px-8 py-6 text-white bg-black border-2 border-white outline-none rounded-3xl min-h-[16rem]"
          />
          <div className="mt-10 text-center">
            <button
              type="submit"
              className="px-8 py-2 text-black bg-white rounded-3xl"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
