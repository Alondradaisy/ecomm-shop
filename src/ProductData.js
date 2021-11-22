import { v4 as uuidv4 } from "uuid";

const productList = [
  {
    id: uuidv4(),
    title: "Rachel Comey Gyre Fringe Midi Skirt",
    description:
      "Layers of festive fringe adorn this midi skirt, adding movement to every step you take.  ",
    brand: "Rachel Comey",
    price: 59500,
    img: "",
  },
  {
    id: uuidv4(),
    title: "Rejina Pyo Lime Lilly Skirt ",
    description:
      "A hip-hugging midi-skirt with a crinkled satin finish by London-based designer Rejina Pyo.",
    brand: "Rejina Pyo",
    price: 57500,
    img: "",
  },
  {
    id: uuidv4(),
    title: "Common Projects Track Classic Sneakers",
    description:
      "These Track Classic ripstop sneakers with leather trim bring together retro cool with an athletic vibe for everyday wear.",
    brand: "Common Projects",
    price: 47900,
    img: "",
  },
  {
    id: uuidv4(),
    title: "Maryam Nassir Zadeh Agatha Slide",
    description: "Block Heel Clear Slide",
    brand: "Maryam Nassir Zadeh",
    price: 44800,
    img: "",
  },
];

/*
export  product list for use across our app
in real use, we would be using axios get data from an actual database/backend.
*/

export const fetchProducts = () =>
  new Promise((resolve, reject) => {
    // console.log('fetching Data from imaginary products database')
    setTimeout(() => {
      try {
        // get products from our list
        resolve(productList);
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
