import LeftContent from "./_components/leftContent";
import MainContent from "./_components/mainContent";
import Navbar from "@/components/navbar";
import RightContent from "./_components/rightContent";

export default function Home() {
  return (
    <main className="w-full flex justify-center items-center">
      <section className="w-full flex flex-col justify-center items-center gap-[30px]">
        <Navbar />
        <div className="w-full max-w-[1280px] grid grid-cols-8 pb-[108px] gap-[22px]">
          <LeftContent />
          <MainContent />
          <RightContent />
        </div>
      </section>
    </main>
  );
}
