import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

interface SpeakerProps {
  name: string;
  bio: string;
  nationality: string;
  imgUrl: string;
}

const SpeakerCard = ({ name, bio, nationality, imgUrl }: SpeakerProps) => {
  return (
    <Card>
      <CardContent>
        <Image
          alt="speaker profile"
          width={1080}
          height={1080}
          src={imgUrl}
          className="aspect-square bg-cover"
        />
        <p>
          {name}, {nationality}
        </p>
        <p>{bio}</p>
      </CardContent>
    </Card>
  );
};

export default SpeakerCard;
