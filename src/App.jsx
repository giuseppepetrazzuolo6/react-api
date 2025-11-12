import axios from 'axios'
import { useEffect, useState } from 'react';

function App() {
  const [actress, setActress] = useState([])
  //console.log(actress);
  const actressesApiUrl = 'https://lanciweb.github.io/demo/api/actresses/'

  function getActresses() {
    axios.get(actressesApiUrl)
      .then(response => {
        const listActresses = response.data
        //console.log(listActresses);
        setActress(listActresses)

      })
      .catch(error => {
        console.error('Errore nella chiamata API:', error);
      });
  }

  useEffect(() => {
    getActresses();
  }, []);

  return (
    <>

    </>
  )
}

export default App