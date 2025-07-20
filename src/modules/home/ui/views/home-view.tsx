"use client";

import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

export const HomeView = () => {
  const trpc = useTRPC();
  const { data } = useQuery(trpc.hello.queryOptions({ text: "Kallamari" }));

  return <div className="fle flex-col p-4 gap-y-4">{data?.greeting}</div>;
};
