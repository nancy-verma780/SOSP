"use client";

import Link from "next/link";

export default function AdminSidebar(){

return (

<aside className="w-64 min-h-screen border-r p-6">


<h2 className="text-2xl font-bold mb-8">
SOSP Admin
</h2>


<nav className="space-y-4">


<Link href="/admin">
Dashboard
</Link>


<Link href="/admin/contributors">
Contributors
</Link>


<Link href="/admin/project-admins">
Project Admins
</Link>


<Link href="/admin/applications">
Applications
</Link>


<Link href="/projects">
Public Projects
</Link>


</nav>


</aside>

)

}