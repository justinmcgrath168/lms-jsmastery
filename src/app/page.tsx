import SpeakerCard from "@/components/SpeakerCard";
import React from "react";

const Home = () => {
  const speakers = [
    {
      id: "1",
      name: "Assoc. Prof. Sok Chea",
      bio: "Implantologiest",
      nationality: "Cambodia",
      imgUrl: "/speakers/speaker1.jpg",
    },
    {
      id: "2",
      name: "Asst. Prof. Phan Sandeth",
      bio: "Implantologiest",
      nationality: "Cambodia",
      imgUrl: "/speakers/speaker2.jpg",
    },
    {
      id: "3",
      name: "Prof. Hong Someth",
      bio: "Implantologiest",
      nationality: "Cambodia",
      imgUrl: "/speakers/speaker3.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
      {speakers.map((speaker) => (
        <SpeakerCard
          key={speaker.id}
          name={speaker.name}
          bio={speaker.bio}
          nationality={speaker.nationality}
          imgUrl={speaker.imgUrl}
        />
      ))}
    </div>
  );
};

export default Home;
