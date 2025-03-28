import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import appStore from "./utils/AppStore";
import {Provider} from "react-redux"


function App() {
  return (
    <>
    <div className="flex flex-col min-h-screen">

      <Provider store={appStore}>
        <Body/>

      </Provider>
      <Footer/>
    </div>
    </>
  );
}

export default App;
