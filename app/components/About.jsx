"use client"
import ScrollStack, { ScrollStackItem } from './ui/ScrollStack'

export default function About(){
    return (
         <div className="w-full  flex flex-col items-center justify-center pt-10" id="about">
        <h2 className="text-[2rem] text-[#aaaa] uppercase">[About me]</h2>
        <ScrollStack>
            <ScrollStackItem>
            <h3 className="text-lg text-white pb-2">Whoami</h3>
            <p>I&apos;m a passionate web developer and designer with a strong focus on building custom WordPress websites tailored to client needs. With a solid background in PHP, HTML, CSS, Tailwind CSS, and JavaScript, I specialize in creating responsive, accessible, and performance-optimized digital experiences.
            </p>
            </ScrollStackItem>
            <ScrollStackItem>
            <h3 className="text-lg text-white pb-2">Skills</h3>
            <div className="flex gap-2 justify-center items-center">
                <p>[Html]</p>
                <div className="flex gap-1">
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                </div>
                <p>5/5</p>
            </div>

             <div className="flex gap-2 justify-center items-center">
                <p>[CSS]</p>
                <div className="flex gap-1">
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                </div>
                <p>5/5</p>
            </div>

            <div className="flex gap-2 justify-center items-center">
                <p>[JS]</p>
                <div className="flex gap-1">
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-700"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-700"></div>
                </div>
                <p>3/5</p>
            </div>

            <div className="flex gap-2 justify-center items-center">
                <p>[PHP]</p>
                <div className="flex gap-1">
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-700"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-700"></div>
                </div>
                <p>3/5</p>
            </div>

            <div className="flex gap-2 justify-center items-center">
                <p>[Tw]</p>
                <div className="flex gap-1">
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 flex-1 bg-neutral-500"></div>
                </div>
                <p>5/5</p>
            </div>

              <div className="flex gap-2 justify-center items-center">
                <p>[NextJS]</p>
                <div className="flex gap-1">
                    <div className="h-2 md:w-20 w-6 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 bg-neutral-500"></div>
                    <div className="h-2 md:w-20 w-6 bg-neutral-700"></div>
                    <div className="h-2 md:w-20 w-6 bg-neutral-700"></div>
                    <div className="h-2 md:w-20 w-6 bg-neutral-700"></div>
                </div>
                <p>2/5</p>
            </div>
            </ScrollStackItem>
        </ScrollStack>
    </div>
    )
}
