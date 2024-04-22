
import Magnetic from "@/app/components/Magnetic"
import CountUp from "./components/CountUp";

export default function Home() {
  return (
    <div className="h-[200vh] ">
     <Magnetic>
      <button>Magnetic</button>
     </Magnetic>
     <div className="flex h-full py-10 w-full bg-red-100">
                Counting from <CountUp start={0} end={1000} duration={5.5}  /> to{' '}
              
            </div>
    </div>
  );
}
