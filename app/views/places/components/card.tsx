"use client";
import { cn } from "@/utils/cn";

interface CardProps {
  Title: string;
  Description: string;
  Background: string;
}

export function Card({ Title, Description, Background }: CardProps) {
  return (
    <div className="max-w-xs w-full">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "transition-all duration-500",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50"
        )}
        style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover' }}
      >
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            {Title}
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
            {Description}
          </p>
        </div>
      </div>
    </div>
  );
}