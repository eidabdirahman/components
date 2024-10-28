import { useState } from "react";
import Modal from "../components/Modal"
import Button from "../components/Button";
function ModalPage (){
    const [showModal, setShowModal]=useState(false);

    const handleClick = ()=>{
        setShowModal(true);
    };

    const handleClose = () =>{
        setShowModal(false);
    };

    const actionBar = <Button onClick={handleClose} primary>Yeah!</Button>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            HI, this is a modal of list. Are you ready to see more information
        </p>
    </Modal>

    return (
        <div>
            <Button onClick={handleClick} primary>show Modal</Button>
            {showModal && modal }
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
             vulputate massa vel vehicula. Duis molestie metus dolor.
              Nulla molestie, justo eget vehicula tincidunt, risus ex aliquet nunc, 
              nec fermentum metus odio vitae ante. Pellentesque et feugiat dolor, ut varius ante. 
              Nam suscipit volutpat orci blandit accumsan. Phasellus pulvinar 
            massa et pulvinar elementum. Nam ut feugiat justo, vel ultricies odio.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
             vulputate massa vel vehicula. Duis molestie metus dolor.
              Nulla molestie, justo eget vehicula tincidunt, risus ex aliquet nunc, 
              nec fermentum metus odio vitae ante. Pellentesque et feugiat dolor, ut varius ante. 
              Nam suscipit volutpat orci blandit accumsan. Phasellus pulvinar 
            massa et pulvinar elementum. Nam ut feugiat justo, vel ultricies odio.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
             vulputate massa vel vehicula. Duis molestie metus dolor.
              Nulla molestie, justo eget vehicula tincidunt, risus ex aliquet nunc, 
              nec fermentum metus odio vitae ante. Pellentesque et feugiat dolor, ut varius ante. 
              Nam suscipit volutpat orci blandit accumsan. Phasellus pulvinar 
            massa et pulvinar elementum. Nam ut feugiat justo, vel ultricies odio.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
             vulputate massa vel vehicula. Duis molestie metus dolor.
              Nulla molestie, justo eget vehicula tincidunt, risus ex aliquet nunc, 
              nec fermentum metus odio vitae ante. Pellentesque et feugiat dolor, ut varius ante. 
              Nam suscipit volutpat orci blandit accumsan. Phasellus pulvinar 
            massa et pulvinar elementum. Nam ut feugiat justo, vel ultricies odio.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
             vulputate massa vel vehicula. Duis molestie metus dolor.
              Nulla molestie, justo eget vehicula tincidunt, risus ex aliquet nunc, 
              nec fermentum metus odio vitae ante. Pellentesque et feugiat dolor, ut varius ante. 
              Nam suscipit volutpat orci blandit accumsan. Phasellus pulvinar 
            massa et pulvinar elementum. Nam ut feugiat justo, vel ultricies odio.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
             vulputate massa vel vehicula. Duis molestie metus dolor.
              Nulla molestie, justo eget vehicula tincidunt, risus ex aliquet nunc, 
              nec fermentum metus odio vitae ante. Pellentesque et feugiat dolor, ut varius ante. 
              Nam suscipit volutpat orci blandit accumsan. Phasellus pulvinar 
            massa et pulvinar elementum. Nam ut feugiat justo, vel ultricies odio.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
             vulputate massa vel vehicula. Duis molestie metus dolor.
              Nulla molestie, justo eget vehicula tincidunt, risus ex aliquet nunc, 
              nec fermentum metus odio vitae ante. Pellentesque et feugiat dolor, ut varius ante. 
              Nam suscipit volutpat orci blandit accumsan. Phasellus pulvinar 
            massa et pulvinar elementum. Nam ut feugiat justo, vel ultricies odio.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
             vulputate massa vel vehicula. Duis molestie metus dolor.
              Nulla molestie, justo eget vehicula tincidunt, risus ex aliquet nunc, 
              nec fermentum metus odio vitae ante. Pellentesque et feugiat dolor, ut varius ante. 
              Nam suscipit volutpat orci blandit accumsan. Phasellus pulvinar 
            massa et pulvinar elementum. Nam ut feugiat justo, vel ultricies odio.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
             vulputate massa vel vehicula. Duis molestie metus dolor.
              Nulla molestie, justo eget vehicula tincidunt, risus ex aliquet nunc, 
              nec fermentum metus odio vitae ante. Pellentesque et feugiat dolor, ut varius ante. 
              Nam suscipit volutpat orci blandit accumsan. Phasellus pulvinar 
            massa et pulvinar elementum. Nam ut feugiat justo, vel ultricies odio.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
             vulputate massa vel vehicula. Duis molestie metus dolor.
              Nulla molestie, justo eget vehicula tincidunt, risus ex aliquet nunc, 
              nec fermentum metus odio vitae ante. Pellentesque et feugiat dolor, ut varius ante. 
              Nam suscipit volutpat orci blandit accumsan. Phasellus pulvinar 
            massa et pulvinar elementum. Nam ut feugiat justo, vel ultricies odio.
            </p>
        </div>
    )
}

export default ModalPage;