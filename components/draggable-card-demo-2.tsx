import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import me from "../app/public/Me.jpeg"
import Image from "next/image";

export default function DraggableCardDemo() {
  const items = [
    {
      title: "Me",
      image:me,
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
     
      {items.map((item) => (
        <DraggableCardBody key={item.title} className={item.className}>
         <Image
         src={item.image}
         alt="Me"
         />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
