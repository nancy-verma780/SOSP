import {supabase} from "@/lib/supabase";


export default async function Applications(){

const {data}=await supabase
.from("applications")
.select("*")
.eq("status","pending");


return(

<div className="p-10">

<h1 className="text-3xl font-bold mb-8">
Applications
</h1>


{
data?.map(app=>(

<div
key={app.id}
className="border p-5 rounded mb-5"
>

<h2 className="text-xl font-bold">
{app.name}
</h2>


<p>
{app.email}
</p>


<p>
{app.college}
</p>


<a
href={app.github}
target="_blank"
className="text-blue-600"
>
Github
</a>


</div>


))
}


</div>


)

}