import { PropsWithChildren } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Donations from "../components/Donations";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main>
        {children}
        <Donations />
        <Footer />
      </main>
    </>
  );
}
