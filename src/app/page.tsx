import Image from "next/image";
import heroImage from "@/assets/images/hero_image.jpg";
import {Hero} from "@/app/ui_components/Hero";
export default function Home() {
  return (
    <main className="container  mx-auto pt-20 ">

      <Hero />
        <div className={"flex space-x-5 items-center mt-20 mb-20"}>
            <div className={"space-y-10"}>
                <div className={"font-bold text-4xl space-x-5"}><h1 className={"text-blue-600"}>Unlock the World of
                    Knowledge. </h1></div>
                <p className={"text-2xl"}>

                    Explore our comprehensive academic databases, scholarly journals, and
                    advanced research tools. The RECTEM Digital Library is your dedicated ally in scholarly and student
                    pursuits.
                </p>

            </div>
            <img className={"max-w-2xl rounded-2xl"}
                 src={"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpicz.in%2Fdata%2Fmedia%2F7%2Fstudy-in-canada-students.jpg&f=1&nofb=1&ipt=8e348da59111b03e6af9d77be3d578332913111703f26989f9daba83e3ba8b2c&ipo=images"}/>
        </div>
    </main>
  );
}
