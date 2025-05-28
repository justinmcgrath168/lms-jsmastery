import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";
import React from "react";

const Home = () => {
  const companion = [
    {
      id: "1",
      name: "Neura the Brainy Explorer",
      topic: "Neural Network of the Brain",
      subject: "Science",
      duration: 45,
      color: "#E5D0FF",
    },
    {
      id: "2",
      name: "Countsy the Number Wizard",
      topic: "Derivatives & Integrals",
      subject: "Maths",
      duration: 30,
      color: "#FFDA6E",
    },
    {
      id: "3",
      name: "Verba the Vocabulary Builder",
      topic: "English Literature ",
      subject: "Language",
      duration: 30,
      color: "#BDE7FF",
    },
  ];
  return (
    <main>
      <h1 className="text-2xl">Popular Companions</h1>
      <section className="home-section">
        {companion.map((comp) => (
          <CompanionCard
            key={comp.id}
            id={comp.id}
            name={comp.name}
            topic={comp.topic}
            subject={comp.subject}
            duration={comp.duration}
            color={comp.color}
          />
        ))}
      </section>
      <section className="home-section">
        <CompanionList
          title="Recently completed session"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Home;
