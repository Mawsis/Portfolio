import { Spotlight } from "@/components/ui/Spotlight";
import HomeWrapper from "@/components/HomeWrapper";
import Image from "next/image";
import me from "@/assets/me.jpg";
export default function HomePage() {
  const handleDownload = async () => {
    const res = await fetch("/api/file");
    const blob = await res.blob();
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "CV_WASSIM.pdf");
    document.body.appendChild(link);
    link.click();
    link?.parentNode?.removeChild(link);
  };
  return (
    <HomeWrapper>
      <div
        className={`h-screen flex items-center justify-center text-white px-10`}>
        <Spotlight />
        <div className="hidden lg:flex justify-center items-center h-full w-1/3">
          <Image
            src={me}
            alt="A picture of me"
            className="w-full border-2 border-white rounded-[200px]"></Image>
        </div>
        <div className="flex lg:w-2/3 items-center justify-center gap-4 lg:gap-0 p-[1.7rem] pt-2 flex-col text-center h-3/4">
          <h1 className="text-6xl  font-bold lg:text-[5.4rem] flex flex-col ">
            Hi, Wassim here
            <br />
            a web developer.
          </h1>
          <div className=" text-md lg:text-xl pt-2 flex items-center justify-center flex-col">
            <p className="w-full lg:w-1/2">
              I build scalable and reliable web applications from stable backend and frontend libraries and frameworks that work and generate revenue for you !
            </p>
            <button onClick={handleDownload} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-8">
              Get my resume
            </button>
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
}
