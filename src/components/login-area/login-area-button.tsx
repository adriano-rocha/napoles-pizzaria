"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useAuth } from "@/stores/auth";

type Props = {
  initialState: boolean;
};

export const LoginAreaButton = ({ initialState }: Props) => {

  const auth = useAuth()  ;
  const [authState, setAuthState] = useState<Boolean>(initialState);

  useEffect(() => {
    setAuthState(auth.token ? true : false)
  }, [auth]);

  const handleLogout = () => {
    auth.setToken(null);
  };

  if (authState) {
    return (
      <>
        <Link href="/pedidos">
          <Button className="bg-green-700 hover:bg-green-500 cursor-pointer">Meus Pedidos</Button>
        </Link>
        <Button className="bg-green-700 hover:bg-green-500  " onClick={handleLogout}>Sair</Button>
      </>
    );
  } else {
    return <Button onClick={() => auth.setOpen(true)}
    className="bg-green-700 hover:bg-green-500 cursor-pointer">Login / Cadastro</Button>;
  }
};
