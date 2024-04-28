
import Magnetic from "@/app/components/Magnetic"
import CountUp from "./components/CountUp";
import Button from "@/app/components/Button"
import EntranceAnimation from "./components/Animations/Entrance";
import Typewriter from "./components/Animations/Typewriter";


export default function Home() {
  return (
    <div className="w-10/12 mx-auto ">
     <Magnetic>
      <button>Magnetic</button>
     </Magnetic>
     <div className="">
                Counting from <CountUp start={0} end={1000} duration={5.5}  /> to{' '}
              
            </div>
            <div className="py-10 flex flex-col">
            <Typewriter text="Hello, World!" delay={100} className="text-red-500" cursorClassName="after:bg-red-500" />

            <Typewriter text="This is a typewriter component." delay={50} />

            </div>
            <div className="flex  flex-wrap gap-5 items-center">
              <Button.Shine title="Shine" />
              <Button.Center title="Center" />
              <Button.Dotted title="Dotted" />
              <Button.Curtain title="Curtain" />
              <Button.Circle title="Circle" />
              <Button.Hide title="Hide" />
              <Button.Swipe title="Swipe" />
              <Button.Smoosh title="Smoosh" />
              <Button.Slide title="Slide" />
              <Button.Skew title="Skew" />
             
             

             

            </div>

            <div className="">
           <div className="h-screen">
           <EntranceAnimation duration={1} delay={0.5} distance={50} direction="left">
        <p>This content will animate in from the left.</p>
      </EntranceAnimation>
           </div>
           <div className="h-screen">
      <EntranceAnimation duration={1} delay={0.5} distance={50} direction="right">
        <p>This content will animate in from the right.</p>
      </EntranceAnimation>
      </div>
      <div className="h-screen">
      <EntranceAnimation duration={1} delay={0.5} distance={50} direction="up">
        <p>This content will animate in from the top.</p>
      </EntranceAnimation>
      </div>
      <div className="h-screen">
      <EntranceAnimation duration={1} delay={0.5} distance={50} direction="down">
        <p>This content will animate in from the bottom.</p>
      </EntranceAnimation>
      </div>
            </div>
    </div>
  );
}
