
import Magnetic from "@/app/components/Magnetic"
import CountUp from "./components/CountUp";
import  {Swipe, Circle,Curtain,Center,Dotted} from "./components/Button"
import GlobalEntranceAnimation from "./components/Animations/Entrance";


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

            <div className="h-[200vh]">
            <GlobalEntranceAnimation duration={1} delay={0.5} distance={50} direction="left">
        <p>This content will animate in from the left.</p>
      </GlobalEntranceAnimation>
      <GlobalEntranceAnimation duration={1} delay={0.5} distance={50} direction="right">
        <p>This content will animate in from the right.</p>
      </GlobalEntranceAnimation>
      <GlobalEntranceAnimation duration={1} delay={0.5} distance={50} direction="up">
        <p>This content will animate in from the top.</p>
      </GlobalEntranceAnimation>
      <GlobalEntranceAnimation duration={1} delay={0.5} distance={50} direction="down">
        <p>This content will animate in from the bottom.</p>
      </GlobalEntranceAnimation>
            </div>
    </div>
  );
}
