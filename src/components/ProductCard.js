import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { useCart } from 'react-use-cart';
import { BsCartPlus } from 'react-icons/bs'


const ProdectCard = (props) => {
      let { title, release_date, id, vote_average, poster_path, original_title, original_language, overview, popularity, genre_ids, vote_count } = props.data;
      const [theme] = useThemeHook();
      const { getItem, updateItem } = useCart();
      const { addItem } = useCart();
      console.log("SSSSSSSSSSSSSSSS", props.data.id);



      const addToCart = () => {
            addItem({
                  id: props.data.id,
                  title: props.data.title,
                  price: 100,
                  quantity: 1,
                  release_date: props.data.release_date,
                  poster_path: props.data.poster_path,
                  original_title: props.data.original_title,
                  original_language: props.data.original_language,
                  overview: props.data.overview,
                  popularity: props.data.popularity,
                  genre_ids: props.data.genre_ids,
                  vote_average: props.data.vote_average,
                  vote_count: props.data.vote_count,


            })

      }

      const item = getItem(props.data.id)
      const price = item ? item.price : null;

      function handleClick() {
            // Prompt the user for a new price
            const newPrice = prompt('Enter a new price:');

            // Update the price of the item in the cart
            updateItem(props.data.id, { price: newPrice });

            const success = updateItem(props.data.id, { price: newPrice });

            if (success) {
                  console.log('Price updated successfully');
            } else {
                  console.error('Error updating price');
            }

      }




      return (
            <Card style={{ width: '20rem', padding: "0px", margin: "10px", height: "auto" }} className={`${theme ? 'bg-light-black text-light' : 'bg-light text-black'} text-center p-0 overflow-hidden shadow  mb-4`}>

                  <div style={{ background: "white", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "ingerit" }}>
                        <div  >
                              <Card.Img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} style={{ objectFit: "cover", height: "500px" }} />
                        </div>
                  </div>

                  <Card.Body>
                        <Card.Title style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>{title}</Card.Title>
                        <Card.Title> THB <span className='h5'>{100}</span></Card.Title>
                        <Card.Title>
                              <Button onClick={handleClick}>Edit price</Button>
                        </Card.Title>
                        <Button
                              onClick={() => addToCart()}
                              className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary '}d-flex align-item-center m-auto border-0`}
                        >
                              <BsCartPlus size="1.6rem" />
                              Add to cart

                        </Button>
                  </Card.Body>
            </Card>
      )
}




export default ProdectCard