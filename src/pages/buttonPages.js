import { FaChartLine, FaCannabis, FaBluesky } from "react-icons/fa6";
import  Button from "./components/button";
function buttonPages(){
    return (
        <div>
            <div>
                <Button secondary rounded outline >
                <FaChartLine />
                    court
                </Button>
            </div>
            <div>
                <Button secondary className="mb-5">
                <FaCannabis />
                    save me
                </Button>
            </div>
            <div>
                <Button success outline >
                <FaBluesky />
                    call me
                </Button>
            </div>
            <div>
                <Button warning rounded >
                    buy now
                </Button>
            </div>
            <div>
                <Button primary rounded >
                    go away
                </Button>
            </div>
           
        </div>
    )
};

export default buttonPages;