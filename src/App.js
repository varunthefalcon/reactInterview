import React, { Component, Fragment } from 'react';
// import Header from './components/header';
// import Footer from './components/footer';
import JSONdata from './mockJSON.json'
import mapIcon from './assets/images/icon_map@2x.png'
import footerLunch from "./assets/images/tab_lunch@2x.png"
import footerInternet from "./assets/images/tab_internets@2x.png"


class App extends Component {
  constructor(props) {
    super(props);
    console.clear()
    // console.log(JSONdata.res)
    this.state = {
      restaurantLists: JSONdata.restaurants
    }
  }
  render() {
    console.log(this.state)
    const { restaurantLists } = this.state;
    return (
      <Fragment>
        <header>
          <h1 className="header_title fontBold">Lunch Tyme</h1>
          <div className="pull-right">
            <img src={mapIcon} className="header_map" alt="header_map" />
          </div>
        </header>
        <main>
          {restaurantLists.map((item, index) => {
            const { name, backgroundImageURL, category} = item
          return <Fragment key={index}>
            <div className=" list_items " style={{ backgroundImage: `url(${backgroundImageURL})` }} >
              <div className='list_itemBlock'>
                <p className='item_title fontBold'> {name} </p>
                <p className='item_category fontRegular'> {category} </p>
              </div>
            </div>
          </Fragment>})}
        </main>
        <footer>
          <div className="footer_tab">
            <div className="footer_tab_item">
              <img src={footerLunch} alt='tab_lunch' />
              <p className="fontRegular">lunch</p>
            </div>
            <div className="footer_tab_item">
              <img src={footerInternet} alt='tab_internets' />
              <p className="fontRegular footer_tab_item_internets">internets</p>
            </div>
          </div>
        </footer>
      </Fragment>
    );
  }
}

export default App;
