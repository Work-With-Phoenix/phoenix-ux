
import Magnetic from "@/app/components/Magnetic"
import CountUp from "./components/CountUp";
import  {Swipe, Circle,Curtain,Center,Dotted} from "./components/Button"

export default function Home() {
  return (
    <div className="w-10/12 mx-auto ">
     <Magnetic>
      <button>Magnetic</button>
     </Magnetic>
     <div className="">
                Counting from <CountUp start={0} end={1000} duration={5.5}  /> to{' '}
              
            </div>
            <div className="flex  flex-wrap gap-5 items-center">
             
              <Swipe className="capitalize" title={"swipe button"} />
              <Circle title={"circle button"} />
              <Curtain title={"curtain button"} />
              <Center title={"center button"} />
              <Dotted title={"dotted button"} />

             

            </div>
    </div>
  );
}
