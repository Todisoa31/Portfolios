import Navbar from "@/src/components/navbar";
import PageAccueil from "@/src/components/page";

export default function Home() {
  return (
    <div className="bg-transparent flex flex-col flex-1 items-center font-sans">
      <Navbar />

      <main className="flex w-full max-w-7xl flex-col py-32 px-16">
        <PageAccueil />
      </main>
    </div>
  );
}
