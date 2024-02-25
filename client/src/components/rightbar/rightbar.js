import React from 'react';
import './rightbar.css';
//import img1 from '../../assets/1.jpg';
//import img2 from '../../assets/2.jpg';
//import img3 from '../../assets/3.jpg';
//im//port img1 from "../../assets/1.jpg";
const Rightbar = () => {
  return (
    <div>
      <div className="rightBar">
        <div className="container">
          <div className="item">
            <span>Suggestions For You</span>
            <div className="user">
              <div className="userInfo">
                <img src="https://img.freepik.com/free-vector/hand-drawn-side-profile-cartoon-illustration_23-2150517168.jpg?size=338&ext=jpg&ga=GA1.1.539837299.1708732800&semt=ais?auto=compree&cs=tinysrgb&w=1600" alt="" />
                <span>xxxx</span>
              </div>
        <div className="buttons">
                <button>confrim</button>
                <button>delete</button>
              </div>
              <div className="item">
              <div className="user">
              <div className="userInfo">
                <img src="https://img.freepik.com/free-vector/hand-drawn-side-profile-cartoon-illustration_23-2150517171.jpg?size=338&ext=jpg&ga=GA1.1.539837299.1708732800&semt=ais?auto=compree&cs=tinysrgb&w=1600" alt="" />
                <span>aaaa</span>
              </div>
              <div className="buttons">
                <button>confrim</button>
                <button>delete</button>
              </div>
            </div>
            </div>
            </div>


            
            <span>Online</span>
            <div className="user">
              <div className="userInfo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSrPd41D9lL19McgR1NteAgnXalhdP0Go9l4FoipzqvE4SPnjse2X-JGKAeeGNiPu0Baw&usqp=CAUauto=compress&cs=tinysrgb&w=1600" alt="" />
                <div className="online" />
                <span>yyyy</span>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img src="https://img.freepik.com/free-vector/hand-drawn-side-profile-cartoon-illustration_23-2150503821.jpg?size=338&ext=jpg&ga=GA1.1.539837299.1708732800&semt=aisauto=compress&cs=tinysrgb&w=1600" alt="" />
                <div className="online" />
                <span>zzzz</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
