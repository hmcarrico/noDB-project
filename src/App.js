import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header/Header';
import Quotes from './components/quotes/Quotes';



//EXAMPLE

//https://i.kinja-img.com/gawker-media/image/upload/s--U4HG5QsZ--/c_scale,f_auto,fl_progressive,q_80,w_800/ewlttmui5bdofhfpcpsv.png

//Strength, endurance, agility, speed, reflexes, durability, and healing are at the zenith of natural human potential

class App extends Component {
  constructor(){
    super();
    this.state = {
      superheros: [],
      name:'',
      imgUrl:'',
      superPower:'',
      homePlanet:'',
      updateName: ''

  }
  }
  componentDidMount(){
   axios.get("/api/superheros")
    .then(res => {
      console.log(res);
      this.setState({
        superheros: res.data 
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  addHero = (name, imgUrl, superPower, homePlanet) => {
     axios.post('/api/superheros', {name, imgUrl, superPower, homePlanet})
    .then((res) => {
      console.log(res.data)
      this.setState({
        superheros: res.data,
        name:'',
        imgUrl:'',
        superPower:'',
        homePlanet:'',
        updateName: '',
        updatePower: '',
        updatePlanet: ''
      })
    })
  }

  updateHero(id, name){
    axios.put(`/api/superheros/${id}`, {name}).then(hero => 
      this.setState({
        superheros: hero.data,
        name:''
      })
    )
  }

  updateHero2(id, superPower){
    axios.put(`/api/superheros/${id}`, {superPower}).then(hero => 
      this.setState({
        superheros: hero.data,
        superPower:''
      })
    )
  }

  updateHero3(id, homePlanet){
    axios.put(`/api/superheros/${id}`, {homePlanet}).then(hero => 
      this.setState({
        superheros: hero.data,
        homePlanet:''
      })
    )
  }
  
  updateName(val){
    this.setState({updateName:val})
  }

  updatePower(val){
    this.setState({updatePower:val})
  }

  updatePlanet(val){
    this.setState({updatePlanet:val})
  }

  deleteHero(id){
    axios.delete(`/api/superheros/${id}`).then(hero => {
      this.setState({
      superheros: hero.data
      })
    })

  }

  handleName = (name) => {
    this.setState({name: name})
   }

   handleImg = (img) => {
    this.setState({imgUrl: img})
   }

   handlePower = (power) => {
    this.setState({superPower: power})
   }

   handleHome = (home) => {
    this.setState({homePlanet: home})
   }

  render() {

   console.log(this.state.superheros)

   let heros = this.state.superheros.map((e) => {
      return (
        <div className='stuff'>
        <p><u className='bob'>Name:</u> {e.name} <br />
        <img src={e.url} className='images' alt='ERROR' /> <br /> <br />
        <u className='bob'>Super Power:</u> {e.superPower} <br /> <br />
        <u className='bob'>Home: Planet</u> {e.homePlanet}</p> <br /> <br />
        <input placeHolder="Enter New Name" onChange={e=>this.updateName(e.target.value)}/>
        <button onClick={() => this.updateHero(e.id, this.state.updateName)}>Edit Name</button>
        <br />
        <br />
        <input placeHolder="Enter New Power" onChange={e=>this.updatePower(e.target.value)}/>
        <button onClick={() => this.updateHero2(e.id, this.state.updatePower)}>Edit Power</button>
        <br />
        <br />
        <input placeHolder="Enter New Planet" onChange={e=>this.updatePlanet(e.target.value)}/>
        <button onClick={() => this.updateHero3(e.id, this.state.updatePlanet)}>Edit Planet</button>
        <br />
        <br />
        <button onClick={() => this.deleteHero(e.id)}>Delete Hero</button>
        <hr />
        </div>
      )
   })

    return (
      <div className="App">
      <div className='App2'>
        <Header/>
        
        <p className='movies'><u>Random Movie Quote:</u> <br /> <br /><Quotes /><br /> </p>
        {heros}
        <input className='tBox1' value={this.state.name} onChange={(e) => this.handleName(e.target.value)} placeholder="NAME"/>
        <br />
        <br />
        <input className='tBox2' value={this.state.imgUrl} onChange={(e) => this.handleImg(e.target.value)} placeholder="IMAGE URL"/>
        <br />
        <br />
        <input className='tBox3' value={this.state.superPower} onChange={(e) => this.handlePower(e.target.value)} placeholder="SUPER POWER"/>
        <br />
        <br />
        <input className='tBox4' value={this.state.homePlanet} onChange={(e) => this.handleHome(e.target.value)} placeholder="HOME PLANET"/>
        <br />
        <br />
        <button onClick={() => this.addHero(this.state.name,this.state.imgUrl,this.state.superPower,this.state.homePlanet)}>Add Hero</button>
        <br />
        <br />
        <br />
        <div className='dirt'>
        <Quotes />
        </div>
        </div>
      </div>
    )
  }
}

export default App;
