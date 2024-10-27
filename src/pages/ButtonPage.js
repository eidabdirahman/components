import { FaBasketball, FaBandcamp, FaArrowsToDot } from "react-icons/fa6";
import Button from '../components/Button';
function ButtonPage() {
  const handleClick = () => {
   
  };

  return (
    <div>
      <div>
        <Button
          secondary
          outline
          rounded
          className="mb-5"
          onClick={handleClick}
        >
          <FaBandcamp />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline onMouseEnter={handleClick}>
          <FaArrowsToDot />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning onMouseLeave={handleClick}>
          <FaBandcamp />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <FaBasketball />
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
