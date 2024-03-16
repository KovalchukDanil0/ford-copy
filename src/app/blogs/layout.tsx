import { PropsWithChildren } from "react";
import "./styles.css";

export default function DashboardLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <div id="blog">
      {children}
      <h2>Blogs carousel</h2>
    </div>
  );
}
