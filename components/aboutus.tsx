import React from "react";
import Member from "./member";

const AboutUs: React.FC = () => {
  return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
          <strong>We will help you ship better app, faster.</strong> Our team of
          expert engineers has created the best experiences in some of the most
          popular apps worldwide
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2>Our team</h2>
        <div className="mt-2">the &rdquo;spec-ops&rdquo;</div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
          <Member
            id="marc"
            name="Marc"
            socialId="@mrousavy"
            link="https://github.com/mrousavy"
          />
          <Member
            id="szymon"
            name="Szymon"
            socialId="@szymon20000"
            link="https://github.com/Szymon20000"
          />
          <Member
            id="thomas"
            name="Thomas"
            socialId="@thomas-coldwell"
            link="https://github.com/thomas-coldwell"
          />
          <Member
            id="christoph"
            name="Christoph"
            socialId="@chrispader"
            link="https://github.com/chrispader"
          />
          <Member
            id="hanno"
            name="Hanno"
            socialId="@hannojp"
            link="https://github.com/hannojp"
          />
          <Member
            id="janic"
            name="Janic"
            socialId="@janicduplessis"
            link="https://github.com/janicduplessis"
          />
          <Member
            id="terry"
            name="Terry"
            socialId="@terrysahaidak"
            link="https://github.com/terrysahaidak"
          />
          <Member
            id="eric"
            name="Eric"
            socialId="@ericvicenti"
            link="https://github.com/ericvicenti"
          />
          <Member
            id="viktoria"
            name="Viktoria"
            socialId="@viktoria.psd"
            link="https://www.instagram.com/viktoria.psd"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
