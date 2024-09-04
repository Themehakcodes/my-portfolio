'user Client';
import Grid from "@/components/Grid";
import { navItems } from "@/data";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { SquigglyUnderline } from "@/components/ui/SquigglyUnderline";
import { FaHome } from "react-icons/fa";
import { testimonials } from "@/data/index";  // Ensure the path is correct
import Testimonials from "@/components/Testimonials";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col items-center justify-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        
        <SquigglyUnderline />
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach/>
      </div>
    </main>
  );
}
