import React from "react";
import "../search/weather.scss";
const mainWeather = (props) => {
  console.log(props, "props");
  
  
  
  // return (
    // if(props.data.des===undefined){
    //   return (<div></div>);
    // }
    //       else{
      // {props.data.des.map(item =>{
      //   let {description,main, id} = item;
      //   console.log(description,main,id);
      // })}
   return(
        <div className="bg-wrapper">
           <div className="main_box">
             <div className="location">
               {/* <div> */}
               <h4>{props.data.location.city},{props.data.location.country}</h4>
               <span>{new Date().toLocaleDateString()}</span>
               <h6 className="greeting"> Good Morning</h6>
                {/* </div> */}
              <div className="weather-tip">
                      {
                        props.data.des[0].main == "Mist" ? "Misty Outside" :
                        props.data.des[0].main == "Rain" ? "Don't forget your umbrella":
                        props.data.des[0].main == "Clouds"? "Better take your umbrella":
                        props.data.des[0].main == "Mist"? "Better take your umbrella":
                        props.data.des[0].main == "Smoke"? "Don't forget your mask":
                        props.data.des[0].main == "Haze"? "Better take your umbrella":
                        props.data.des[0].main == "Dust"? "Dust outside! don't forget to cover your face":
                        props.data.des[0].main == "Clear"? "Sunny day time to go out":
                        props.data.des[0].main == "Thunderdtorm"? "Heavy Rain stay inside":
                        props.data.des[0].main == "Snow"? "cold outside! dress accordingly":
                        props.data.des[0].main == "Clear" ? "Clear day" : null
                      }
                    <h6 className="p-0 m-0">Humidity- {props.data.weather.humidity}</h6>
                    <h6>Pressure- {props.data.weather.pressure}</h6>

                      </div>
                      </div>

               <div className="main_temp">
                 <h2 className="">{Math.round(props.data.weather.temperature)}&deg;C</h2>
                   <h5 className="">{props.data.des[0].description}</h5>
                    <p className="">Feels like- {Math.floor(props.data.weather.feels_like)} &deg;C</p>
                    </div>
                       <div className="temp_minmax">
                        <p>Min- {props.data.weather.min_temperature}&deg;C</p>
                         <p>Max- {props.data.weather.max_temperature}&deg;C</p>
                         </div>
                                      </div>
            </div>
      );
    };

export default mainWeather;


// import React from "react";
// import "./mainWeather.css";
// const MainWeather = (props) => {
//   console.log("props", props);
//   return (
//     <div className="container">
//       <div className="main_box">
//         <div className="location">
//   <h3>{props.location.city}, {props.location.country}</h3>
//   <span>saturday 5:00</span>
//         </div>
//         <div className="main_temp">
//           <h5 className="p-2 m-1">Scattered Clouds</h5>
//           <h2 className="p-2 m-1">{Math.floor(props.data.weather.temperature)}&deg;C</h2>
//           <p className="p-2 m-1">Feels like- {Math.floor(props.data.weather.feels_like)} &deg;C</p>
//           <div className="temp_minmax mb-2">
//             <p>Min- {props.data.weather.min_temperature}&deg;C</p>
//             <p>Max- {props.data.weather.max_temperature}&deg;C</p>
//           </div>
//           <span className="weather-tip">
//             might be better to bring an umbrella
//           </span>
//         </div>
//       </div>
//       {/* <div>
//         <h2>{props.location.city}</h2>
//         <h3>{props.data.location.country}</h3>
//       </div>
//       <h2>{props.data.weather.temperature}&deg;C</h2>
//       <ul>
//   <li>maximum- {props.data.weather.max_temperature}&deg;C</li>
//   <li>minimum- {props.data.weather.min_temperature}&deg;C</li>
//   <li>pressure- {props.data.weather.pressure}</li>
//   <li>humidity- {props.data.weather.humidity}</li>
//       </ul> */}
//     </div>
//   );
// };
// export default MainWeather;
