import React from "react";
import Weather from "./weather";
import Main from "../mian/main";
import "./input.css";

export default class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      query:undefined,
      loading : false,
      data: {
        des:undefined,
        weather:{
          temperature : '',
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
    // console.log(this.state.data.des[0].id);
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

  render() {
    return (
      <div className=
      {
        this.state.data.des !== undefined ? 
                        this.state.data.des[0].main: null
                      } bg_image
                      >
      <div className="wrapper">     
          
                {
          this.state.loading ? <h1>loadinggg</h1> :
          this.state.data.des !== undefined ? 
          <div>
            {/* <form 
            className="p-3"
            onSubmit={this.handleSubmit}>
            <input
            className="form_input"
            placeholder="Enter Search Text"
            type="text"
            value={this.state.query}
            onChange={this.handleChange}/>
        </form> */}
          <Weather data={this.state.data}
          loading={this.state.loading } /> 
          </div> :
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
          <Main/>
        </form>
          </div>
          // <h2>enter city name</h2> 
        }
          </div>
      </div>

    );
  }
}
