"use client";
import { useAuth } from "../hooks/useAuth";
import WatchLIst from "./WatchList";

export default function ClientWatchList() {
  const { auth } = useAuth();
  const email = auth?.email;

  return <WatchLIst email={email} />;
}
