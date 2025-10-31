
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowDown, Github } from "lucide-react";

const AddRepo = () => {
  return (


<div
  className="group px-6 py-6 flex flex-row justify-between items-center border rounded-lg bg-[#f7faff] cursor-pointer 
  transition-all duration-300 ease-in-out
  hover:bg-[#eaf3ff] hover:border-[#3A8DFF] hover:scale-[1.02]
  shadow-[0_2px_10px_rgba(0,0,0,0.05)]
  hover:shadow-[0_10px_30px_rgba(58,141,255,0.15)]"
>
  <div className="flex flex-row justify-center items-start gap-4">
    <Button
      variant={"outline"}
      className="flex justify-center items-center bg-white group-hover:bg-[#f0f7ff] group-hover:border-[#3A8DFF] group-hover:text-[#3A8DFF] transition-colors duration-300"
      size={"icon"}
    >
      <ArrowDown size={30} className="transition-transform duration-300 group-hover:translate-y-1" />
    </Button>

    <div className="flex flex-col">
      <h1 className="text-xl font-bold text-[#3A8DFF]">Open GitHub Repository</h1>
      <p className="text-sm text-muted-foreground max-w-[220px]">Work with your repositories in our editor</p>
    </div>
  </div>

  <div className="relative flex items-center justify-center overflow-hidden">
    <Github
      size={70}
      strokeWidth={1.8}
      className="text-[#3A8DFF] opacity-90 transition-transform duration-300 group-hover:scale-110"
    />
  </div>
</div>

  )
}

export default AddRepo


