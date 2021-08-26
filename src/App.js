import { useEffect, useState } from "react";
import Cases from "./Cases";
import Countries from "./Countries";
import Footer from "./Footer";
import Instructions from "./Instructions";
import Showcase from "./Showcase";

function App() {

  const [cases, setCases] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {

      const getCases = async () => {

        try {
          const url = 'https://api.covid19api.com/summary';
          const response = await fetch(url);

          if (!response.ok) {
            throw new Error (`HTTP Error ! status : ${response.status}`);
          }

          const data = await response.json();

          setCases(data);
          setIsPending(false);
        } catch (e) {
          console.error(e);
        }

      };

      getCases();
        
  }, []);

  return (
    <div className="App">
      <Showcase />
      <div className="content">
        <Cases cases={ cases } isPending={ isPending }/>
        <Countries cases={ cases } />
        <Instructions />
      </div>
      <Footer />
    </div>
  );
}

export default App;
