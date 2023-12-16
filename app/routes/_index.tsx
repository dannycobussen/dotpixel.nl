import SocialMedia from "~/components/SocialMedia";

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
