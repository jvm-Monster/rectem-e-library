import heroImage from "@/assets/images/hero_image.jpg";

export const Hero = () => {
    return (
        <>
            <div className=" bg-base-200 p-10 rounded-2xl">
                <div className="flex">

                    <div className={"space-y-10"}>
                        <div className={"flex "}>
                            <div className={"space-y-10 text-4xl"}>
                                <div>
                                    <div className={"font-bold flex space-x-5"}>
                                        <h1>Rectem</h1> <h1 className={"text-blue-600"}>E-Library</h1></div>
                                    <h1 className={"font-bold"}> System</h1>
                                </div>

                                <p className={"text-2xl"}>Empowering Researchers and Scholars Dive into our extensive
                                    academic databases,
                                    scholarly journals, and research tools. RECTEM Digital Library is your trusted
                                    partner in academic
                                    pursuits. </p>
                            </div>

                        </div>

                    </div>
                    <img src={heroImage.src} className={"max-w-xl rounded-lg shadow-2xl"}/>
                </div>
            </div>
        </>
    );
};