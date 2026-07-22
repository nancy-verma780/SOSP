"use client";


import { useSearchParams } from "next/navigation";


export default function ApplyForm(){


const params = useSearchParams();



const role = params.get("role");


return (

<div className="p-10">


<h1 className="text-4xl font-bold">
Apply {role}
</h1>


{/* tumhara existing form yaha */}

</div>

)

}