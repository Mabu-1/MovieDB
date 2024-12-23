"use client";
import { useAuth } from "../../hooks/useAuth";
import WatchLIst from "./watchinglist";

export default function ClientWatchList() {
  const { auth } = useAuth();
  const email = auth?.email;

  return <WatchLIst email={email} />;
}
