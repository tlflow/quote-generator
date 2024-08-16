import { useState, useEffect } from 'react';

function useFetchQuotes() {
  const [quotes, setQuotes] = useState([]);

   useEffect(() => {
    fetch('/quotes.json')
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data);
      })
      .catch((error) => {
        console.log(error);
      });
   }, []);

  return quotes;
}

export default useFetchQuotes;
