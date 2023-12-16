import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import LastFM from "~/components/LastFM";
import SocialMedia from "~/components/SocialMedia";

export const meta: MetaFunction = () => {
  return [
    { title: "dotPixel | Danny Cobussen" },
    { name: "description", content: "Meet dotPixel, a full stack developer passionate about creating dynamic, user-friendly websites. I love innovative web solutions." },
  ];
};

export default function Index() {
  return (
    <main className="flex flex-col flex-nowrap items-center justify-center h-screen gap-8 -m-20">
      <h1 className="px-10 border-b font-bold border-solid border-moonstone text-5xl text-[clamp(3rem,2rem+5vw,7rem)] bg-gradient-to-r from-gradients-title-one to-gradients-title-two bg-clip-text text-transparent">
        dotPixel
      </h1>

      <SocialMedia />
    </main>
  );
}
