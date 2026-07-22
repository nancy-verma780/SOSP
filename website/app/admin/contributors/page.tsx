import { supabase } from "@/lib/supabase";
import { updateContributorStatus } from "../actions";
import { revalidatePath } from "next/cache";


export default async function ContributorsPage(){


const {data:contributors}=await supabase
.from("contributors")
.select("*")
.eq("status","pending");



async function approve(id:string){

"use server";

await updateContributorStatus(
id,
"approved"
);

revalidatePath("/admin/contributors");

}



async function reject(id:string){

"use server";

await updateContributorStatus(
id,
"rejected"
);

revalidatePath("/admin/contributors");

}



return (

<div className="p-10">


<h1 className="text-3xl font-bold mb-8">
Contributor Requests
</h1>


<div className="space-y-5">


{
contributors?.map((user)=>(

<div
key={user.id}
className="border p-5 rounded-lg"
>


<h2 className="text-xl font-bold">
{user.name}
</h2>


<p>
{user.email}
</p>


<p>
Github: {user.github}
</p>


<p>
Skills: {user.skills}
</p>



<div className="flex gap-4 mt-5">


<form action={approve.bind(null,user.id)}>

<button
className="bg-green-600 text-white px-5 py-2 rounded"
>
Approve
</button>

</form>



<form action={reject.bind(null,user.id)}>

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