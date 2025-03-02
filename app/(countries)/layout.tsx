import { PropsWithChildren } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Donations from "../components/Donations";
import Description from "../components/Description";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main>
        {children}
        <Description />
        <Donations />
        <Footer />
      </main>
    </>
  );
}
