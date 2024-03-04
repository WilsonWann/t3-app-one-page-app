import { Header, Navbar, FixedButtons, Footer } from "~/lib/components";
import type { PropsWithChildren } from "react";

const RootLayout = (props: PropsWithChildren) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Navbar />
      {props.children}
      <FixedButtons />
      <Footer />
    </main>
  );
};

export default RootLayout;
