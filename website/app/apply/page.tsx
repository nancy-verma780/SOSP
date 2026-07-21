"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ApplyPage() {
  const params = useSearchParams();
  const projectId = params.get("project");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [resume, setResume] = useState("");
  const [why, setWhy] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const { error } = await supabase.from("applications").insert([
      {
        project_id: projectId,
        full_name: name,
        email,
        github,
        linkedin,
        resume,
        motivation: why,
        status: "pending",
      },
    ]);

    if (error) {
      alert(error.message);
    } else {
      alert("Application Submitted Successfully!");
      setName("");
      setEmail("");
      setGithub("");
      setLinkedin("");
      setResume("");
      setWhy("");
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-6 text-5xl font-bold">Apply to Project</h1>

      <form onSubmit={handleSubmit} className="space-y-5">

        <input
          className="w-full rounded border p-3"
          placeholder="Full Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          className="w-full rounded border p-3"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          className="w-full rounded border p-3"
          placeholder="GitHub Username"
          value={github}
          onChange={(e)=>setGithub(e.target.value)}
        />

        <input
          className="w-full rounded border p-3"
          placeholder="LinkedIn Profile"
          value={linkedin}
          onChange={(e)=>setLinkedin(e.target.value)}
        />

        <input
          className="w-full rounded border p-3"
          placeholder="Resume Link (Google Drive)"
          value={resume}
          onChange={(e)=>setResume(e.target.value)}
        />

        <textarea
          className="w-full rounded border p-3"
          rows={6}
          placeholder="Why do you want to contribute?"
          value={why}
          onChange={(e)=>setWhy(e.target.value)}
        />

        <button
          className="w-full rounded bg-blue-600 p-3 text-white"
          type="submit"
        >
          Submit Application
        </button>

      </form>
    </main>
  );
}