import React, { useState, useEffect } from "react";
import axios from "axios";
import Joke from "./Joke";
import "./JokeList.css";

function JokeList() {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch jokes
  const getJokes = async () => {
    try {
      let jokes = [];
      while (jokes.length < 5) {
        let response = await axios.get("https://icanhazdadjoke.com/", {
          headers: { Accept: "application/json" },
        });
        let newJoke = response.data.joke;
        if (!jokes.includes(newJoke)) {
          jokes.push({ id: response.data.id, text: newJoke, votes: 0 });
        }
      }
      setJokes(jokes);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getJokes();
  }, []);

  if (isLoading) {
    return (
      <div className="JokeList-spinner">
        <i className="far fa-8x fa-laugh fa-spin" />
        <h1 className="JokeList-title">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="JokeList">
      <h1>Dad Jokes</h1>
      <div className="JokeList-jokes">
        {jokes.map((joke) => (
          <Joke key={joke.id} text={joke.text} votes={joke.votes} />
        ))}
      </div>
    </div>
  );
}

export default JokeList;
