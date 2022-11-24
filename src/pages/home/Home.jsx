import React from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import PageBonus from "../../components/HomePage/PageBonus"

const Home = () => {


  return (
    <>
      <div>
        <NavBar/>
        <PageBonus/>
        <Footer/>
      </div>
    </>
  );
};
// const Home = ({ user }) => {

//   const logoutnhe = () => {
//     window.open("http://localhost:8800/api/auth/logout", "_self");
//   };
//   return (
//     <>
//       <div>Home</div>
//       <h1>{`Hello ${user.displayName}`}</h1>{" "}
//       <img src={user.photos[0].value} alt="avatar" />
//       <button onClick={logoutnhe}>Log out nhé</button>
//     </>
//   );
// };

export default Home;
