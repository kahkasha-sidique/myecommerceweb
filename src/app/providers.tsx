"use client";

import { cartStore } from "@/store/cartStore";
import { Provider } from "react-redux";


export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={cartStore}>{children}</Provider>;
}