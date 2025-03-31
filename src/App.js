import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import appStore from "./utils/AppStore";
import {Provider} from "react-redux"
import Loader from "./components/Loader";
import { useState,useEffect } from "react";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timer;
    const startTime = Date.now();

    const handleLoaded = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(3000 - elapsedTime, 0);

      timer = setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    };

    if (document.readyState === 'complete') {
      handleLoaded();
    } else {
      window.addEventListener('load', handleLoaded);
    }

    return () => {
      window.removeEventListener('load', handleLoaded);
      if (timer) clearTimeout(timer);
    };
  }, []);


  if (isLoading) {
    return <Loader/>
  }

  return (
      

    <>
    <div className="flex flex-col min-h-screen">

      <Provider store={appStore}>
        <Body/>

      </Provider>
     </div>
    </>
  );
}

export default App;
