import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header.js";
import GameCard from "./components/GameCard/GameCard.js"

class App extends Component {
  state = {
    points: 0,
    highScore: 0,
    tiles: [{name:"Sake",img:"https://media1.popsugar-assets.com/files/thumbor/pSKtIjG5_7-iQ1rCipmnM0wN37E/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/02/18/162/n/28443503/73fff5022e19a6fc_shutterstock_97913285/i/Salmon-Nigiri.jpg"},
    {name:"Toro",img:"https://tracychang.files.wordpress.com/2010/10/img_8756.jpg"},
    {name:"Aji",img:"http://i0.wp.com/www.foodrepublic.com/wp-content/uploads/2016/09/4192186354_384534ddd8_o.jpg?resize=700%2C525"},
    {name:"Hamachi",img:"https://sushiday.com/wp-content/2008/05/yellowtailnigiri-1620x1156.jpg"},
    {name:"Iwashi",img:"http://cdn.heysesame.com/wp-content/uploads/30011956/Japanese-Iwashi-Sardine-nigiri-680x907.jpg"},
    {name:"Tsukiji",img:"https://c1.staticflickr.com/3/2515/5749600372_70b7a06d3f_b.jpg"},
    {name:"Uni",img:"https://s3.amazonaws.com/bucket.leye.co/uploads/2009/01/Naoki-Sushi_Japanese-Uni-Nigiri-07-1.jpg"},
    {name:"Ikuro",img:"https://i.pinimg.com/originals/eb/cf/0f/ebcf0f089ef3d5cca1684634b04f02fc.jpg"},
    {name:"Saba",img:"https://eatcleanme.com/media/catalog/product/m/i/miyabi-order_healthy_food_dubai-saba_nigiri.jpg"},
    {name:"Engawa",img:"https://media-cdn.tripadvisor.com/media/photo-s/07/37/fd/0d/hirame-no-engawa-nigiri.jpg"},
    {name:"Kisu",img:"https://adelewong.files.wordpress.com/2015/01/img_1894_fotor.jpg"},{name:"Kohada",img:"https://i.pinimg.com/originals/07/b5/bc/07b5bcc95aff57b0ae7007641771e496.jpg"},{name:"Katsuo",img:"https://orange.japan-talk.com/images/jt/thumbnails/Katsuo-sushi-205.jpg"},{name:"Suzuki",img:"https://i.redd.it/34mb2jf87zx01.jpg"},{name:"Sayori",img:"https://media-cdn.tripadvisor.com/media/photo-s/07/0a/ec/b2/iwashi-nigiri.jpg"},{name:"Kuruma",img:"https://orange.japan-talk.com/images/jt/thumbnails/Kuruma-sushi-205.jpg"}],
    clickedTiles: [],
    message: ""
  }

  shuffle = () => {
    let currentTile = this.state.tiles;
    let newTile = [];
    while(currentTile.length > 0){
      newTile.push(currentTile.splice(Math.floor(Math.random()*currentTile.length),1)[0]);
    }
    return newTile;
  }

  _onSushiClick = (sushiName) => {
    //we'll check if the name matches anything in the clicked tile
    if(this.state.clickedTiles.includes(sushiName)){
      this.setState({
        points:0,
        clickedTiles: [],
        message: "Ack, told ya not to do that, you just pooped your pants!"
      });
    }
    else{
      let message = "";
      if(this.state.points+1 >= 16){
        message = "Holy shit, you ate all 16 sushi's!";
      }
      else if(this.state.points+1 >= 12){
        message = "Your stomach is a black hole!";
      }
      else if(this.state.points+1 >= 8){
        message = "Wow your abillity to discern sushi is impressive.";
      }
      else if(this.state.points+1 >= 4){
        message = "Keep on chugging you goddamn beast!";
      }
      let newClickedTiles = this.state.clickedTiles;
      newClickedTiles.push(sushiName);
      let newTile = this.shuffle();
      let highScore = this.state.highScore;
      if(this.state.points === this.state.highScore){
        highScore = this.state.points+1;
      }
      this.setState(
        {  tiles: newTile,
          points: this.state.points+1,
          clickedTiles: newClickedTiles,
          highScore: highScore,
          message: message
        }
      );
    }
  }

  render() {
    return (
      <div>
        <Header message={this.state.message} currentPoint = {this.state.points} highScore = {this.state.highScore}/>
        {this.state.tiles.map((item,i) => {
          return(<GameCard key={i} name={item.name} img={item.img} onsushiclick={() => {this._onSushiClick(item.name)}} />);
        })}
      </div>
    );
  }
}

export default App;
