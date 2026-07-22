import LogoutButton from "./LogoutButton";
import { supabase } from "@/lib/supabase";
import { updateProjectStatus } from "./actions";
import { revalidatePath } from "next/cache";


export default async function AdminPage() {


  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .eq("status", "pending");


  const { count: totalProjects } = await supabase
    .from("projects")
    .select("*", { count: "exact", head: true });


  const { count: pendingProjects } = await supabase
    .from("projects")
    .select("*", { count: "exact", head: true })
    .eq("status", "pending");


  const { count: contributors } = await supabase
    .from("contributors")
    .select("*", { count: "exact", head: true });


  const { count: projectAdmins } = await supabase
    .from("project_admins")
    .select("*", { count: "exact", head: true });


  const { count: applications } = await supabase
    .from("applications")
    .select("*", { count: "exact", head: true });



  async function approveProject(id: string) {

    "use server";

    await updateProjectStatus(
      id,
      "approved"
    );

    revalidatePath("/admin");
    revalidatePath("/projects");
  }



  async function rejectProject(id: string) {

    "use server";

    await updateProjectStatus(
      id,
      "rejected"
    );

    revalidatePath("/admin");

  }



  return (

    <main className="min-h-screen px-6 py-20">


      <div className="flex justify-between items-center mb-10">

        <h1 className="text-4xl font-bold">
          Admin Dashboard
        </h1>

        <LogoutButton />

      </div>



      <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mb-10">


        <div className="rounded-lg border p-5">
          <p className="text-gray-500">
            Projects
          </p>
          <h2 className="text-3xl font-bold">
            {totalProjects ?? 0}
          </h2>
        </div>



        <div className="rounded-lg border p-5">
          <p className="text-gray-500">
            Pending
          </p>
          <h2 className="text-3xl font-bold">
            {pendingProjects ?? 0}
          </h2>
        </div>



        <div className="rounded-lg border p-5">
          <p className="text-gray-500">
            Contributors
          </p>

          <h2 className="text-3xl font-bold">
            {contributors ?? 0}
          </h2>

        </div>



        <div className="rounded-lg border p-5">
          <p className="text-gray-500">
            Project Admins
          </p>

          <h2 className="text-3xl font-bold">
            {projectAdmins ?? 0}
          </h2>

        </div>



        <div className="rounded-lg border p-5">

          <p className="text-gray-500">
            Applications
          </p>

          <h2 className="text-3xl font-bold">
            {applications ?? 0}
          </h2>

        </div>


      </div>



      <div className="space-y-5">


        {projects?.map((project) => (


          <div
            key={project.id}
            className="border rounded-lg p-6"
          >


            <h2 className="text-2xl font-bold">
              {project.title}
            </h2>


            <p className="mt-2">
              {project.description}
            </p>



            <div className="mt-5 flex gap-4">


              <form action={approveProject.bind(null, project.id)}>

                <button
                  className="bg-green-600 text-white px-5 py-2 rounded"
                >
                  Approve
                </button>

              </form>



              <form action={rejectProject.bind(null, project.id)}>

                <button
                  className="bg-red-600 text-white px-5 py-2 rounded"
                >
                  Reject
                </button>

              </form>


            </div>


          </div>


        ))}


      </div>


    </main>

  );

}