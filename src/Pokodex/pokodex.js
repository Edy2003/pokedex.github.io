import React,{useState, useEffect} from 'react';
import './pokodex.css'


function Pokemon({pokemonUrl,currentInfo}){


    let [pokemonInfo,setPokemonInfo] = useState(null);


     useEffect(()=> {
        fetch(pokemonUrl)
            .then(res => res.json())
            .then(data =>setPokemonInfo(data))
    },[pokemonUrl]);


        if(pokemonInfo !== null){

        return(
            <>
            <div onClick={ ()=> currentInfo({pokemonInfo})}>
                <img alt={pokemonInfo.id} src={pokemonInfo.sprites.front_default}/>
                <p>{pokemonInfo.name}</p>
                <div>
                 <div className="types">{pokemonInfo.types.map(el=>{
                     return(
                            <div className={ 'type ' + ((el.type.name ==='fire' )? 'fire': ''
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

            </div>
            </>
     );

}

}

function ShowInfo({current}){
    if(current!==null) {
        return (
            <>
                <div className="current">
                    <img className="image" src={current.pokemonInfo.sprites.front_default}/>
                    <b>{current.pokemonInfo.name}</b>
                    <div className="characteristics">
                        <div className="characteristic-block">
                            <div className="characteristic">
                                Type
                            </div>
                            <div className="value">
                                Fire
                            </div>
                        </div>
                        <div className="characteristic-block">
                            <div className="characteristic">
                                Attack
                            </div>
                            <div className="value">
                                {current.pokemonInfo.stats.map((item)=>{return(item.base_stat)})[1]}
                            </div>
                        </div>
                        <div className="characteristic-block">
                            <div className="characteristic">
                                Defense
                            </div>
                            <div className="value">
                                {current.pokemonInfo.stats.map((item)=>{return(item.base_stat)})[2]}
                            </div>
                        </div>
                        <div className="characteristic-block">
                            <div className="characteristic">
                                HP
                            </div>
                            <div className="value">
                                {current.pokemonInfo.stats.map((item)=>{return(item.base_stat)})[0]}
                            </div>
                        </div>
                        <div className="characteristic-block">
                            <div className="characteristic">
                                SP Attack
                            </div>
                            <div className="value">
                                {current.pokemonInfo.stats.map((item)=>{return(item.base_stat)})[3]}
                            </div>
                        </div>
                        <div className="characteristic-block">
                            <div className="characteristic">
                                SP Defense
                            </div>
                            <div className="value">
                                {current.pokemonInfo.stats.map((item)=>{return(item.base_stat)})[4]}
                            </div>
                        </div>
                        <div className="characteristic-block">
                            <div className="characteristic">
                                Speed
                            </div>
                            <div className="value">
                                {current.pokemonInfo.stats.map((item)=>{return(item.base_stat)})[5]}
                            </div>
                        </div>
                        <div className="characteristic-block">
                            <div className="characteristic">
                                Weight
                            </div>
                            <div className="value">
                                {current.pokemonInfo.weight}
                            </div>
                        </div>
                        <div className="characteristic-block">
                            <div className="characteristic">
                                Total moves
                            </div>
                            <div className="value">
                                {current.pokemonInfo.moves.length}
                            </div>
                        </div>

                    </div>
                </div>
            </>)
    }
}

function Pokedex(){
    const pokePerRow = 9;

    let [pokemon,setPockemon] = useState([]);
    let [current,setCurrent] = useState(null);
    let [next,setNext] = useState(pokePerRow);

    function handleMorePoke(){
        setNext(next + pokePerRow)
    }

    useEffect(()=> {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=50")
            .then(res => res.json())
            .then(data =>setPockemon(data.results))
    },[]);



    function currentInfo(info){
        if(info!==null){
            setCurrent(info)
        }
    }

    return(
        <>
            <div className="container">

                <div className="title-box">
                        <span className="title">Pokedex</span>
                </div>
                <div className="cards">

                  {pokemon.slice(0,next).map((item) => {
                        return (
                            <div className="card" >
                                <Pokemon pokemonUrl={item.url}
                                         currentInfo={currentInfo}/>
                            </div>
                        )
                    })}

                    {next<pokemon?.length && (
                        <button className="button" onClick={handleMorePoke}> Load more</button>
                    )}
                </div>
                <div className="info">
                        <ShowInfo current={current}/>
                </div>

            </div>
        </>
    );
}

export default Pokedex;