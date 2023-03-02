import React,{useState, useEffect} from 'react';
import './pokodex.css'


function Pokemon({pokemonUrl}){


    let [pokemonInfo,setPokemonInfo] = useState(null);
    let [info,setInfo] = useState(null);

     useEffect(()=> {
        fetch(pokemonUrl)
            .then(res => res.json())
            .then(data =>setPokemonInfo(data))
    },[pokemonUrl]);


        if(pokemonInfo !== null){

        return(
            <>
            <div onClick={()=> setInfo({pokemonInfo})}>
                <img alt={pokemonInfo.id} src={pokemonInfo.sprites.front_default}/>
                <p>{pokemonInfo.name}</p>
                <div>
                 <div className="types">{pokemonInfo.types.map(el=>{
                     return(
                            <div className={ 'bt ' + ((el.type.name ==='fire' )? 'fire': ''
                            || (el.type.name ==='grass' )? 'grass': ''
                            || (el.type.name ==='poison' )? 'poison': ''
                            || (el.type.name ==='flying' )? 'flying': ''
                            || (el.type.name ==='water' )? 'water': ''
                            || (el.type.name ==='bug' )? 'bug': '')
                            }>{el.type.name}
                            </div>
                        );
                 })}</div>
                </div>
                <ShowInfo info={info}/>
            </div>
            </>
     );

}

}

function ShowInfo({info}){

    if(info !== null){
        console.log(info.pokemonInfo.name)
return(
    <>
            <p>{info.pokemonInfo.name}</p>
    </>
               //      <div>
               //          <img alt={el.id} src={el.sprites.front_default}/>
               //          <p>{el.name}</p>
               //          <div>
               //              <div className="types">{el.types.map(el=>{
               //                  return(
               //                      <div className={ 'bt ' + ((el.type.name ==='fire' )? 'fire': ''
               //                      || (el.type.name ==='grass' )? 'grass': ''
               //                      || (el.type.name ==='poison' )? 'poison': ''
               //                      || (el.type.name ==='flying' )? 'flying': ''
               //                      || (el.type.name ==='water' )? 'water': ''
               //                      || (el.type.name ==='bug' )? 'bug': '')
               //                      }>{el.type.name}
               //                      </div>
               //                  );
               //              })}</div>
               //          </div>
               //      </div>

);
}}

function Pokedex(){

    let [pokemon,setPockemon] = useState([]);

    useEffect(()=> {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=12")
            .then(res => res.json())
            .then(data =>setPockemon(data.results))
    },[]);

    return(
        <>
            <div className="container">

                <div className="title-box">
                        <div className="title">Pokedex</div>
                </div>

                <div className="cards">

                  {pokemon.map((item) => {

                        return (
                            <div className="card" >
                                <Pokemon pokemonUrl={item.url}/>
                            </div>
                        )

                    })}

                </div>
                <div>
                    <ShowInfo />
                </div>

            </div>
        </>
    );
}

export default Pokedex;