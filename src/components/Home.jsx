import CardPizza from './CardPizza.jsx'
import {pizzas} from '../assets/js/pizzas.js'
import Header from './Header.jsx'
function Home(){
    return (
        <>
        <div>
            <Header />
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          {pizzas.map(pizza => (
            <CardPizza
              key={pizza.id}
              name={pizza.name}
              desc={pizza.desc}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
              alt={pizza.name}
            />
          ))}
        </div>
        </>
    )
}

export default Home;
          