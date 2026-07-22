"use server";

import { supabase } from "@/lib/supabase";



export async function updateProjectStatus(
  id:string,
  status:string
){

const {error}=await supabase
.from("projects")
.update({
status
})
.eq("id",id);


if(error){
throw new Error(error.message);
}

}




export async function updateContributorStatus(
id:string,
status:string
){


const {error}=await supabase
.from("contributors")
.update({
status
})
.eq("id",id);



if(error){
throw new Error(error.message);
}


}




export async function updateProjectAdminStatus(
id:string,
status:string
){


const {error}=await supabase
.from("project_admins")
.update({
status
})
.eq("id",id);



if(error){
throw new Error(error.message);
}


}