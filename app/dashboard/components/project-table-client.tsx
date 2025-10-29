"use client";

import { Project } from "@/modules/dashboard/types";
import ProjectTable from  "@/modules/dashboard/components/project-table";
import {
  deleteProjectById,
  duplicateProjectById,
  editProjectById,
} from "@/modules/dashboard/actions";
import { toast } from "sonner";
import { useTransition } from "react";

export default function ProjectTableClient({ projects }: { projects: Project[] }) {
  const [isPending, startTransition] = useTransition();

  const handleDeleteProject = async (id: string) => {
    startTransition(async () => {
      try {
        await deleteProjectById(id);
        toast.success("Project deleted successfully");
      } catch (error) {
        toast.error("Failed to delete project");
      }
    });
  };

  const handleUpdateProject = async (
    id: string,
    data: { title: string; description: string }
  ) => {
    startTransition(async () => {
      try {
        await editProjectById(id, data);
        toast.success("Project updated successfully");
      } catch (error) {
        toast.error("Failed to update project");
      }
    });
  };

  const handleDuplicateProject = async (id: string) => {
    startTransition(async () => {
      try {
        await duplicateProjectById(id);
        toast.success("Project duplicated successfully");
      } catch (error) {
        toast.error("Failed to duplicate project");
      }
    });
  };

  return (
    <ProjectTable
      projects={projects}
      onDeleteProject={handleDeleteProject}
      onUpdateProject={handleUpdateProject}
      onDuplicateProject={handleDuplicateProject}
    />
  );
}
