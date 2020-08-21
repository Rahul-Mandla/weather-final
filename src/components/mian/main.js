import React from "react";
import MainWeather from "./mainWeather";
import Input from "../search/input";
import "../search/input.css";

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      coords: {
        latitude: 50,
        longitude: 53
      },
      data: {
        des:undefined,
        weather:{
          temperature : undefined,
          max_temperature : '',
          min_temperature:'',
          feels_like : '',
          humidity:'',
          pressure:''
        },
        location:{
          city:'',
          country:''
        }
      }
    };
  }

  handleChange=(event) =>{
    this.setState({query: event.target.value});
  }
  handleSubmit=(event) =>{
    this.search();
    event.preventDefault();
  }
  search = async () => {
    try {
      const apiKey = "7fb305d07fac8cc7eb312a8785084448";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.query}&units=metric&appid=${apiKey}`;
    const res = await fetch(url);
    console.log(res);
    if(!res.ok){
      console.log(`${res.status} ${res.statusText}`);}
    const json = await res.json();
    console.log(json);
    this.setState(
      { 
        loading:false,
        data:{
          des:json.weather,
          loading:true,
          
          weather:{
            temperature:json.main.temp,
            max_temperature : json.main.temp_max,
            min_temperature:json.main.temp_min,
          feels_like:json.main.feels_like,
          humidity:json.main.humidity,
          pressure:json.main.pressure
        },
        location:{
          city:json.name,
          country:json.sys.country
        }
      } 
      // ,loading:false
    }
    );
    console.log(this.state.data,"search")
    } catch (error) {
      console.log(error.message);
    }
    
    // });
  };

  componentDidMount = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let newCoords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        console.log(newCoords, "newcoords");
        // console.log(`latt is ${lattitude} and long is ${longitude}`)
        this.setState({ coords: newCoords });

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.coords.latitude}&lon=${this.state.coords.longitude}&units=metric&appid=7fb305d07fac8cc7eb312a8785084448`;
        console.log(url);
        fetch(url)
          .then((res) => res.json())
          .then((json) => {
            this.setState({ data:{
              des:json.weather,
              weather:{
                temperature : json.main.temp,
                max_temperature : json.main.temp_max,
                min_temperature:json.main.temp_min,
                feels_like:json.main.feels_like,
                humidity:json.main.humidity,
                pressure:json.main.pressure
              },
              location:{
                city:json.name,
                country:json.sys.country
              }
            } });
          });
      });
    } else {
      console.log("not supported");
    }
  };
  render() {
    return (
      <div className= 
      {
        this.state.data.des !== undefined ? 
            this.state.data.des[0].main: null
          }
          >
      <div className="wrapper">    
        {this.state.data.weather.temperature !== undefined ?
        <div>
            <form 
            className="p-3"
            onSubmit={this.handleSubmit}>
            <input
            className="form_input"
            placeholder="Enter Search Text"
            type="text"
            value={this.state.query}
            onChange={this.handleChange}/>
        </form>
        <MainWeather data={this.state.data}
        weather={this.state.data.weather}
        location={this.state.data.location
        } />
        </div>
        : <h1>Loadiing....</h1>
      }
      </div>
     </div>
    );
  }
}
