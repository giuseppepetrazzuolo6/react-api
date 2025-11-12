import axios from 'axios'
import { useEffect, useState } from 'react';

function App() {
  const [actress, setActress] = useState([])
  console.log(actress);
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
      <div className="container p-3">
        <h1 className='text-center mb-4'>The best actresses in Hollywood</h1>
        <div className="row g-3">
          {
            actress.map(item =>
              <div className="col-12 col-md-6 col-lg-4" key={item.id}>
                <div className="card_actress">
                  <div className="card_img">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="card_details">
                    <h3>{item.name}</h3>
                    <span>{item.birth_year} - {item.nationality}</span>
                    <p>{item.biography}</p>
                    <p>{item.awards}</p>
                  </div>
                </div>
              </div>
            )
          }
        </div>

      </div>
    </>
  )
}

export default App