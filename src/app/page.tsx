import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import React from "react";

const Home = () => {
  const companion = [
    {
      id: "1",
      name: "Math Buddy",
      topic: "Mathematics",
      subject: "Algebra",
      duration: 30,
      color: "#ffa83e",
    },
    {
      id: "2",
      name: "Science Pro",
      topic: "Science",
      subject: "Physics",
      duration: 45,
      color: "#ffa83e",
    },
    {
      id: "3",
      name: "History Guide",
      topic: "History",
      subject: "World History",
      duration: 60,
      color: "#ffa83e",
    },
  ];
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companion</h1>
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
        <CompanionList />
        <CTA />
      </section>
    </main>
  );
};

export default Home;
