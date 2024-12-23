"use client";
import { useAuth } from "../hooks/useAuth";
import WatchList from "./WatchList";

export default function ClientWatchList() {
  const { auth } = useAuth();
  const email = auth?.email;

  return <WatchList email={email} />;
}
