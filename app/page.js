'use client';
import Age from "@/components/Age";
import Country from "@/components/Country";
import Gender from "@/components/Gender";
import { useState } from "react";

export default function Home() {
  const [name, setname] = useState('')
  //initialised some dummy deta as the api was not working 
  const [age, setage] = useState({ age: "34" })
  const [gender, setgender] = useState({ gender: "male" })
  const [countries, setcountries] = useState({
    country: [{ country_id: "us" }, { country_id: "in" }]
  })
  const [isLoading, setisLoading] = useState(false)

  const predict = async (e) => {
    e.preventDefault()
    setisLoading(true)
    try {
      const [response1, response2, response3] = await Promise.all([
        fetch(`https://api.agify.io?name=${name}`),
        fetch(`https://api.genderize.io?name=${name}`),
        fetch(`https://api.nationalize.io?name=${name}`)
      ]);

      setage(await response1.json());
      setgender(await response2.json());
      setcountries(await response3.json());
      
      

    } catch (error) {
      console.log('Error fetching data:', error);
    }finally{
      setisLoading(false)
    }

  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
        <div className="wrapper">
          <div className="input-area">
            <form onSubmit={predict}>
              <input id="name" value={name} onChange={(e) => setname(e.target.value)} placeholder="ENTER YOUR NAME..."></input>
              <button type="submit" > PREDICT</button>
            </form>
          </div>

          {isLoading ? <div className='card count-card'>
            <h4>  LOADING </h4>
          </div> : 
          <>
                <div className="first-row">
                  <Age age={age} />
                  <Gender gender={gender} />
                </div>
                <div className="second-row">
                  {countries?.country?.map((country, index) => (
                    <Country key={index} country={country?.country_id} />
                  ))}
                  {countries?.error ? <div className='card'>
                      <h4>  Country </h4>
                      <div className='error' > error :{countries?.error}</div></div> : <></>
                  }

                </div>
            </>
          }

        </div>
      </div>
    </main>
  );
}
