import SideBar from "./SideBar";
import Navig from "./Navig";

export default function Home() {
  return (
    <div>
      <div className="flex">
        <SideBar />
      </div>

      <main>
        <section className="min-h-screen">
          <Navig />
        </section>
      </main>
      
    </div>
    
  );
};