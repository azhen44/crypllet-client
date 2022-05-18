import React ,{useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { MarketContext } from "../context/MarketContext";
import axios from "axios";
import { TransactionContext } from "../context/TransactionContext";
const Tickercard = ({symbol, price, changePercent, faveItem}) => {
  return (
    
      <tr className="text-white text-base text-center mx-2 cursor-pointer">
        <Link to={`/Market/${symbol.slice(0,-4)}`}>
          <td> {symbol.slice(0,-4)}</td>
        </Link>
        <td>{`$${price.slice(0,-6)}`} </td>
        <td>{changePercent.slice(0,-1)}%</td>
        <td onClick={()=> faveItem(symbol)}><FontAwesomeIcon className="hover:fill-red-500" icon={faHeart}/></td>
      </tr>
    
    
  )
}

const Market = () => {
  const { coinInfo, changeMarketView} = useContext(MarketContext)
  const { currentAccount } = useContext(TransactionContext)

  const faveItem = (symbolName) => {
    const params = new URLSearchParams()
    params.append('coin', symbolName)
    params.append('wallet_address', currentAccount)
    console.log(symbolName)   
      axios.post("http://localhost:3001/user_coins", params
        ,{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

    

  const res = coinInfo.map( (x) => {
    return (

      <Tickercard key={x.symbol} symbol={x.symbol} price={x.lastPrice} changePercent={x.priceChangePercent} faveItem={faveItem}
      /> 
   
    )
  }) 
  
  return (
    <div className="flex w-full justify-center items-center gradient-bg-services">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
       <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className={`text-white text-3xl sm:text-5xl py-2 bg-neutral-600`}>
          Market
        </h1>
        <h1
          className={`text-white text-3xl sm:text-5xl py-2`}
          onClick={changeMarketView}
        >
          <Link to={'/favourites'} >My Favourite</Link>
        </h1>
      </div>
        <table>
          <tbody>
            <tr>
              <th className="text-white py-2 text-gradient ">Symbol</th>
              <th className="text-white py-2 text-gradient ">Price</th>
              <th className="text-white py-2 text-gradient ">24hr Change</th>
            </tr>
          {res}
        </tbody>
        </table>
    </div>
  </div>
  )
}

export default Market;