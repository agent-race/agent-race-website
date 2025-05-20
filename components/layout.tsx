import { Header } from "./header";
import { Footer } from "./footer";
import { ReactNode } from "react";
import { rem } from "@mantine/core";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div style={{ height: rem(56) }}> {/* place holder for header navigation bar */} </div>
      <main>{children}</main>
      <Footer />
    </>
  );
}
