import Menu from "./Components/Shared/Menu";

export default function RootLayout({ children }) {
  return <body>
    <Menu />
    {children}
  </body>;
}
