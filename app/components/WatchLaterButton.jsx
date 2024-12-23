"use client";

import {
  addToWatchList,
  checkInWatchList,
  removeFromWatchList,
} from "@/actions/User";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { useAuth } from "../hooks/useAuth";

export default function WatchLaterButton({ movie }) {
  const { auth } = useAuth();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isInWatchlist, setIsInWatchlist] = useState(false);

  useEffect(() => {
    const checkWatchlist = async () => {
      if (auth?.email) {
        const isInList = await checkInWatchList(auth.email, movie.id);
        setIsInWatchlist(isInList);
      }
    };
    checkWatchlist();
  }, [auth?.email, movie.id]);

  const handleClick = async () => {
    if (!auth?.email) {
      router.push("/login");
      return;
    }

    startTransition(async () => {
      if (!isInWatchlist) {
        const result = await addToWatchList(
          auth.email,
          movie.id,
          movie.title,
          movie.poster_path
        );
        setIsInWatchlist(!!result);
      } else {
        const result = await removeFromWatchList(auth.email, movie.id);
        setIsInWatchlist(!result);
      }
    });
  };

  return (
    <button
      onClick={handleClick}
      disabled={isPending}
      className={`flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg ${
        isInWatchlist ? "text-green-600" : ""
      } hover:bg-black/60 transition-colors`}
    >
      {isInWatchlist ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-checks"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 12l5 5l10 -10" />
            <path d="M2 12l5 5m5 -5l5 -5" />
          </svg>
          {isPending ? "Updating..." : "Added to Watch List"}
        </>
      ) : (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-file-plus"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
            <path d="M12 11l0 6" />
            <path d="M9 14l6 0" />
          </svg>
          {isPending ? "Adding..." : "Add to Watch List"}
        </>
      )}
    </button>
  );
}
