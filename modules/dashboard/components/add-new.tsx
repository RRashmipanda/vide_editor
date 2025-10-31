
"use client";

import { Button } from "@/components/ui/button"
// import { createPlayground } from "@/features/playground/actions";
import { Plus, LayoutTemplate } from "lucide-react";
import Image from "next/image"
import { useRouter } from "next/navigation";
import { useState } from "react"
import { toast } from "sonner";
import TemplateSelectingModal from "./template-selecting-modal";
import { createPlayground } from "../actions";

const AddNewButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
 const [selectedTemplate, setSelectedTemplate] = useState<{
    title: string;
    template: "REACT" | "NEXTJS" | "EXPRESS" | "VUE" | "HONO" | "ANGULAR";
    description?: string;
  } | null>(null)
  const router = useRouter()


  const handleSubmit = async (data:{
      title: string;
    template: "REACT" | "NEXTJS" | "EXPRESS" | "VUE" | "HONO" | "ANGULAR";
    description?: string;
  })=>{
    setSelectedTemplate(data)

    const res = await createPlayground(data);
    toast.success("Playground Created successfully"
      
    )
    setIsModalOpen(false)
    router.push(`/playground/${res?.id}`)
  }


  return (
    <>

<div
  onClick={() => setIsModalOpen(true)}
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
      <Plus size={30} className="transition-transform duration-300 group-hover:rotate-90" />
    </Button>

    <div className="flex flex-col">
      <h1 className="text-xl font-bold text-[#3A8DFF]">Add New</h1>
      <p className="text-sm text-muted-foreground max-w-[220px]">Create a new playground</p>
    </div>
  </div>

  <div className="relative flex items-center justify-center overflow-hidden">
    <LayoutTemplate
      size={70}
      strokeWidth={1.8}
      className="text-[#3A8DFF] opacity-90 transition-transform duration-300 group-hover:scale-110"
    />
  </div>
</div>


      <TemplateSelectingModal
      isOpen={isModalOpen}
      onClose={()=>setIsModalOpen(false)}
      onSubmit={handleSubmit}
      />
   
    </>
  )
}

export default AddNewButton
