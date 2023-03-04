# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Description

In my project are three components, main is Pokedex and his childs Pokemon and ShowInfo.
In component Pokedex i take data from link by hook useEffect and save it to state pokemon.
Then in return i send sate pokemon by props to child Pokemon,where i`m processing url which i took 
from props and retrun info about pokemons and show it in my main component.In this retrun i have
event onClick which current data of clicked pokemon and send to father component. In father component
i take this info in function currentInfo cheking if indo doesnt null then save to state cuurent 
and send it to component ShowInfo.
