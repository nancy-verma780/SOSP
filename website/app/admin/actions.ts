"use server";

import { supabase } from "@/lib/supabase";

const allowedStatuses = [
  "pending",
  "approved",
  "rejected",
];

export async function updateProjectStatus(
  id: string,
  status: string
) {

  if (!allowedStatuses.includes(status)) {
    throw new Error("Invalid project status");
  }

  const { error } = await supabase
    .from("projects")
    .update({
      status,
    })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

}