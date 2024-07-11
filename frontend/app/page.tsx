"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center">
      <div>HomePage</div>
      <Button onClick={() => router.push("/dashboard")}>
        Nav to Dashboard
      </Button>

      <Button onClick={() => router.push("/sign-in")}>Sign in</Button>

      <Button onClick={() => router.push("/sign-up")}>Sign up</Button>
    </div>
  );
}
