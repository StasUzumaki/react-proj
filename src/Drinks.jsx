import React, { Component, useState, useEffect } from 'react'
import Drink from './Drink';

 class Drinks1 extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
            componentDidMount(){
                fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
                .then(res => res.json())
                .then(
                    (result)=>{
                        this.setState({
                            isLoaded: true,
                            items: result.drinks 
                        });
                    },
                    (error)=> {
                        this.setState({
                            isLoaded: true,
                            error
                        })
                    }
                )
            }

    render() {
        const {error, isLoaded, items} = this.state;
        if(error){
            return <p>Error {error.message} </p>
        }   else if (!isLoaded)  {
            return <p>Loading  </p>
        } else {
            return(
                <ul>
                    {
                        items.map(item=> (
                            <Drink name={item.strDrink} image ={item.strDrinkThumb}/>
                        ))}
                    
                </ul>
            )
        }
    }
}

export default function Drinks() {
    const [error, setError] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
                .then(res => res.json())
                .then((result)=>{  
                    setIsLoaded({
                        isLoaded: true,
                    });
                    setItems(result.drinks)

                },
                ).catch((err)=>{
                    setError(err)
                    setIsLoaded(true)
                })
      });


    return(
        <div> 
            { 
                isLoaded ? <div><ul>
                {
                    items.map(item=> (
                    <Drink name={item.strDrink} image ={item.strDrinkThumb}/>
                ))}
            
           </ul> </div>:<div>Loading...</div>
            }
        </div>
       
        ) 
}