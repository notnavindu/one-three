import React from "react";

type Props = {
  title: string;
};

const Card = (props: Props) => {
  return (
    <div className="bg-zinc-900 w-full aspect-video flex items-center justify-center flex-col">
      <div className="text-4xl">{props.title}</div>
      <div className="opacity-50">coming soon</div>
    </div>
  );
};

export default Card;
