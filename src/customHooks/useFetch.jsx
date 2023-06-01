import { useState } from "react";

export default function useFetch() {
  const hash = "&ts=10&apikey=b732999649de0859e0e4d574707db4ec&hash=a6d21bcb5f6ff38734ec923f22493ff6"
  const [loading, setLoading] = useState(true);

  function get(url) {
    return new Promise((resolve, reject) => {
      fetch(url+hash)
        .then(response => response.json())
        .then(data => {
          if (!data) {
            setLoading(false);
            return reject(data);
          }
          setLoading(false);
          resolve(data);
        })
        .catch(error => {
          setLoading(false);
          reject(error);
        });
    });
  }

  

  return { get, loading };
};