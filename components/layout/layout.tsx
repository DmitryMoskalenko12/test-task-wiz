import Header from "../header/header";
import Footer from "../footer/footer";

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
    <Footer/>
    </>
  )
}

export default Layout;