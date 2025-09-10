import one from "../assets/images/one.jpg"
import two from "../assets/images/three.jpg"
import three from "../assets/images/two.jpg"

//Product Component
function Product()
{
  return(
    <div className="products">
      <div className="box">
        <img src={one} alt="Desiner Club" ></img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus animi cupiditate quos necessitatibus voluptatum veritatis fugiat provident quod? Quae animi recusandae officiis nisi dolores. Ratione quas quidem blanditiis quos molestiae?</p>
      </div>
      <div className="box">
        <img src={two} alt="Villain"></img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In fugit exercitationem at doloribus, consequuntur veniam quaerat ratione, labore fuga voluptates, voluptatem nihil dolores molestiae nulla odio non ad expedita enim.</p>
      </div>
      <div className="box">
        <img src={three} alt="Fogg"></img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores suscipit veritatis explicabo, soluta quasi nemo dolore fuga vel aliquid temporibus. Laborum, temporibus ex quisquam reprehenderit maiores eveniet repellendus</p>
      </div>
    </div>
  )
}

export default Product
