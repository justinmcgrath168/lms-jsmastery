import Image from "next/image";
import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start Learning your way.</div>
      <h2 className="text-3xl font-bold">
        Build and Personalize Learning Companion
      </h2>
      <p>
        Pick a name, subject, voice, & personality — and start learning through
        voice conversations that feel natural and fun.
      </p>
      <Image alt="cta" width={362} height={232} src="/images/cta.svg" />
      <button className="btn-primary">
        <Image alt="plus" width={12} height={12} src="/icons/plus.svg" />
        <Link href="/companions/new">
          <p className="">Build a New Companion</p>
        </Link>
      </button>
    </section>
  );
};

export default CTA;
