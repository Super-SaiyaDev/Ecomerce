import React from "react";
import image from '../../assets/image-1.jpg'
import image2 from '../../assets/image-12.jpg'
import CardProducto from "./components/card-products";
// import axios from "axios";
const HeaderProducts = () => {

// const [data,setData] = useState({});

//  useEffect(() => {
//     axios.get('https://mashvisor-api.p.rapidapi.com/rental-rates')
//     .then((res) => {
//       setData(res.data)
//       console.log(res.data)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
//  },[])


  return (
    <>
      <div className="container">
        <div className="container-card">
          <CardProducto
            image={image}
            location={"Los mina, Santo Domingo"}
            distance={"12"}
            date={"12/12/2021"}
            price={"$44,400"}
            valoracion={42}
          />
          <CardProducto
            image={image2}
            location={"Los mina, Santo Domingo"}
            distance={"12"}
            price={"$44,400"}
          />
          <CardProducto
            image={"../../assets/image-11.jpg"}
            location={"Los mina, Santo Domingo"}
            distance={"12"}
            price={"$44,400"}
          />
          <CardProducto
            image={"../../assets/image-11.jpg"}
            location={"Los mina, Santo Domingo"}
            distance={"12"}
            price={"$44,400"}
          />
          <CardProducto
            image={"../../assets/image-11.jpg"}
            location={"Los mina, Santo Domingo"}
            distance={"12"}
            price={"$44,400"}
          />
          <CardProducto
            image={"../../assets/image-11.jpg"}
            location={"Los mina, Santo Domingo"}
            distance={"12"}
            price={"$44,400"}
          />
          <CardProducto
            image={"../../assets/image-11.jpg"}
            location={"Los mina, Santo Domingo"}
            distance={"12"}
            price={"$44,400"}
          />
          <CardProducto
            image={"../../assets/image-11.jpg"}
            location={"Los mina, Santo Domingo"}
            distance={"12"}
            price={"$44,400"}
          />
          <CardProducto
            image={"../../assets/image-11.jpg"}
            location={"Los mina, Santo Domingo"}
            distance={"12"}
            price={"$44,400"}
          />
        </div>
      </div>
    </>
  );
};

export default HeaderProducts;
