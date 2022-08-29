import "./App.css";
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import Info from "./components/Info/Info";
import Utiles from "./components/Utiles/Utiles";

const App = () => {
 
  return (
    <>
      <main >
        <article className="articleButton">
          <Button/>
          <Info/>
        </article>
        <article>
          <Utiles/>
        </article>
      </main>
      <Footer/>
    </>
  );
};

export default App;
