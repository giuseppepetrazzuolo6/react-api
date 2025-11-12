import axios from 'axios'

function App() {
  const actressesApiUrl = 'https://lanciweb.github.io/demo/api/actresses/'

  axios.get(actressesApiUrl)
    .then(response => {
      const listActresses = response.data
      console.log(listActresses);

    })
    .catch(error => {
      console.error('Errore nella chiamata API:', error);
    });

  return (
    <>

    </>
  )
}

export default App