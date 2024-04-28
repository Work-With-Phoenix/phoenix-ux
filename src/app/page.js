"use client"
import Magnetic from "@/app/components/Magnetic"
import CountUp from "./components/CountUp";
import Button from "@/app/components/Button"
import EntranceAnimation from "./components/Animations/Entrance";
import Tooltip from "@/app/components/Tooltip"
import Typewriter from "./components/Animations/Typewriter";
import Drawer from "@/app/components/Drawers/Drawer"
import Marquee from "@/app/components/Animations/Marquee"


export default function Home() {
  return (
    <div className="w-10/12 mx-auto ">
     <Magnetic>
      <button>Magnetic</button>
     </Magnetic>
     <div className="flex py-10 flex-row gap-4 relative w-full">
     <Tooltip text="Hello, World!" direction={"top"}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
       Hover me
        </button>
      </Tooltip>
      {/* <Tooltip text="Hello, World!" direction={"bottom"}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Bottom
        </button>
      </Tooltip> */}
      <Tooltip text="Hello, World!" direction={"left"}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Hove me
        </button>
      </Tooltip>
      <Tooltip text="Hello, World!" direction={"right"}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
         Hover me
        </button>
      </Tooltip>
    </div>
     <div className="">
                Counting from <CountUp start={200} end={1000} separator={','} duration={5.5} decimalPlaces={0}  /> to{' '}
              
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
            <div className="flex">
          
            <Drawer direction={"bottom"} />
            <Drawer direction={"right"} />
    
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
            <div >
              <Marquee direction="left" className="bg-red-200">
                <div>this starts from the left</div>
              </Marquee>
              <Marquee direction="right" className="bg-red-200">
                <div>this starts from the right</div>
              </Marquee>
            </div>
    </div>
  );
}

