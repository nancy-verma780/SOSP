import { supabase } from "@/lib/supabase";
import { updateProjectAdminStatus } from "../actions";
import { revalidatePath } from "next/cache";


export default async function ProjectAdminsPage(){


const {data:admins}=await supabase
.from("project_admins")
.select(`
*,
projects(
title
)
`)
.eq("status","pending");



async function approve(id:string){

"use server";

await updateProjectAdminStatus(
id,
"approved"
);

revalidatePath("/admin/project-admins");

}



async function reject(id:string){

"use server";

await updateProjectAdminStatus(
id,
"rejected"
);

revalidatePath("/admin/project-admins");

}



return (

<div className="p-10">


<h1 className="text-3xl font-bold mb-8">
Project Admin Requests
</h1>


<div className="space-y-5">


{
admins?.map((admin)=>(


<div
key={admin.id}
className="border rounded-lg p-6"
>


<h2 className="text-xl font-bold">
{admin.name}
</h2>


<p>
Email: {admin.email}
</p>


<p>
Project:
{admin.projects?.title}
</p>


<p>
Role:
{admin.role}
</p>



<div className="flex gap-4 mt-5">


<form action={approve.bind(null,admin.id)}>

<button
className="bg-green-600 text-white px-5 py-2 rounded"
>
Approve
</button>

</form>



<form action={reject.bind(null,admin.id)}>

<button
className="bg-red-600 text-white px-5 py-2 rounded"
>
Reject
</button>

</form>


</div>


</div>


))
}


</div>


</div>

)

}