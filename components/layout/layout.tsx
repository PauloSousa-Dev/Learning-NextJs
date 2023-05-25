import MainHeader from "./main-header/main-header";

function Layout({ children }) {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
}

export default Layout;
