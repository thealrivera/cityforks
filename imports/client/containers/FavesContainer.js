import React from 'react'
import Tracker from 'tracker-component';
import { IndexLink, Link } from 'react-router';
import Faves from '/imports/client/components/Faves.js';
import Footer from '/imports/client/layout/footer.js';

class FavesContainer extends Tracker.Component {

  render() {
    return (
      <div className="appContainer">

        <header className="red bar bar-nav">
          <div className="h1 title">CityForks</div>
        </header>
        <div className="content">
          <Faves />
        </div>

        <Footer />
      </div>
    )
  }
}

export default FavesContainer;