import { getAllPlaygroundForUser } from "@/modules/dashboard/actions";
import AddNewButton from "@/modules/dashboard/components/add-new";
import AddRepo from "@/modules/dashboard/components/add-repo";
import EmptyState from "@/modules/dashboard/components/empty-state";
import ProjectTableClient from "@/app/dashboard/components/project-table-client"; 
import { Project } from "@/modules/dashboard/types";
import React from "react";

const Page = async () => {
  const playgrounds = await getAllPlaygroundForUser();

  //  Normalize data so it always fits the Project type
  const sanitizedProjects: Project[] =
    playgrounds?.map((p) => ({
      id: p.id,
      title: p.title ?? "",
      description: p.description ?? "", // convert null → ""
      template: p.template ?? "",
      createdAt: new Date(p.createdAt),
      updatedAt: new Date(p.updatedAt),
      userId: p.userId,
      user: {
        id: p.user.id,
        name: p.user.name ?? "",
        email: p.user.email ?? "",
        image: p.user.image ?? "",
        role: p.user.role ?? "",
        createdAt: new Date(p.user.createdAt),
        updatedAt: new Date(p.user.updatedAt),
      },
      Starmark: Array.isArray(p.Starmark)
        ? p.Starmark.map((s) => ({ isMarked: !!s.isMarked }))
        : [],
    })) || [];

  return (
    <div className="flex flex-col justify-start items-center min-h-screen mx-auto max-w-7xl px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <AddNewButton />
        <AddRepo />
      </div>

      <div className="mt-10 flex flex-col justify-center items-center w-full">
        {sanitizedProjects.length === 0 ? (
          <EmptyState />
        ) : (
          <ProjectTableClient projects={sanitizedProjects} />
        )}
      </div>
    </div>
  );
};

export default Page;
