import React from 'react';
import { Link } from 'react-router-dom';
// import CardContext from '../../../store/cardProductCat/CardContext';
// import { useContext } from 'react';

export default function CardProductCat(props) {
    // const { handleClick } = useContext(CardContext);

    return ( 
        <>
        <Link to={`/chocanh/${props.productid}`}>

        <div className='col-xl-4 col-md-6 tb-card-single'>
               <div className="cards__product__home" id='card' style={{ width: '17rem', marginRight: '14px', marginBottom: '22px', textAlign: "center", background: '#a79c9c1a', border: '1px solid #fff', borderRadius: '0px', overflow: 'hidden' }}>
                   <div className='cart-header'>
                       <img src={props.imgCard} className="card-img-top cart-img" alt="..." />
                       <i className="fa fa-cart-plus icon-plus" title='Add To Cart'></i>
                   </div>
                   <div className="contents-card card-body">
                       <div>
                           <div style={{ color: '#666666', fontSize: '10px' }} className='title-card'>{props.category} <br /> <p style={{ fontSize: '15px', color:'#666666' }}>{props.title}</p> </div>
                       </div>
                       <div className='price-card'><b>{props.price}đ</b></div>
                   </div>
               </div>
               </div>
        </Link>
       </>
    )
}