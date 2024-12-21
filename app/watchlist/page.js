"use client";
import WatchLIst from "../components/WatchLIst";
import { useAuth } from "../hooks/useAuth";
import Navbar from "../Navbar/Navbar";

export default function WatchlistPage() {
  const { auth } = useAuth();
  const email = auth?.email;
  return (
    <>
      <Navbar />
      <WatchLIst email={email} />
    </>
  );
}
