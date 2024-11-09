import './User.css';
import PropTypes from 'prop-types'; 
import { CgCalendarDates } from "react-icons/cg";
import logo from '../../assets/images/logo.png';
import logo5 from '../../assets/images/logo5.png';
import logo6 from '../../assets/images/logo6.png';
import { FaRegComments } from "react-icons/fa6";
import { AiOutlineLink } from "react-icons/ai";
import { VscLayers } from "react-icons/vsc";




const User = ({user}) => {
    const { client, description,  attachments, comments, views,due_date } = user;
    return (
        <div className="bg-gray-200  px-4 py-5 grid grid-rows-4 h-36 w-66  ">
            <h2>To do</h2>
           
            <div className='flex  '>
            <img className='' src={logo} alt="" />
            
            <p className='' >Client Name:{client}</p> 
            </div>
            
            <p className='flex items-center'> <VscLayers></VscLayers> {description}</p> 
              
            <div className='flex gap-1 '>
           
            <img  src={logo5} alt="" />
            <img  src={logo6} alt="" />

            <p className=''>{attachments}+</p>
            <p className='flex items-center'>  <FaRegComments ></FaRegComments>{comments}  </p>
            <p className='flex items-center '> <AiOutlineLink></AiOutlineLink>{views}</p>
            <p className='flex items-center'> <CgCalendarDates></CgCalendarDates> {due_date}</p>
            
            </div>
            
           </div>     
    );
};
User.propTypes ={
    user:PropTypes.object.isRequired
}


export default User;