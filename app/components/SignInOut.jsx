"use client";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/useAuth";

const SignInOut = () => {
  const { auth, setAuth } = useAuth();
  const router = useRouter();

  const logout = () => {
    setAuth(null);
    router.push("/login");
  };

  return (
    <div>
      {auth ? (
        <>
          <span className="mx-2">
            Hello,{" "}
            <span className="text-red-500 font-bold">{auth?.firstName}</span>
          </span>
          <span className="mx-1">|</span>
          <a className="cursor-pointer" onClick={logout}>
            Logout
          </a>
        </>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
};

export default SignInOut;
