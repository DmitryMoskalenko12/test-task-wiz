import Header from "../header/header";

type MyComponentProps = {
  children: React.ReactNode;
};

const Layout: React.FC<MyComponentProps> = (props) => {

  return (
    <>
    <Header/>
     <main>
      {props.children}
     </main>
    </>
  )
}

export default Layout;