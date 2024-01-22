import { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

interface Props {
  children: ReactNode;
}

export default function Layout(props: Props) {
  const { children } = props;
  return (
    <div className="w-full flex flex-col overflow-auto font-Inter">
      <Navbar />
      <div className="w-full grow h-screen">{children}</div>
      <Footer />
    </div>
  );
}
