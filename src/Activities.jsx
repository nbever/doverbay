import React from 'react';

import Topic from './widgets/Topic';
import QuickLinks from './widgets/QuickLinks';

const Activities = () => {

  const links = [
    {text: 'Biking', image: 'icon-mountain-bike', anchor: 'bike'},
    {text: 'Blueberries', image: 'icon-sun', anchor: 'blueberries'},
    {text: 'Boating', image: 'icon-boat', anchor: 'boating'},
    {text: 'Fishing', image: 'icon-fishing', anchor: 'fish'},
    {text: 'Hiking', image: 'icon-hike', anchor: 'hike'},
    {text: 'Kayak', image: 'icon-kayak', anchor: 'kayak'},
    {text: 'Movies', image: 'icon-film', anchor: 'movies'}
  ];

  return (
    <div className="info-page">
      <div className="title center">
        Activities
      </div>
      <QuickLinks
        prefix="/activities"
        links={links}
      />
      <div className="content">
        <p>
          We certainly haven't done everything in the area, but here are some things we have done and would highly recmomend.
        </p>
        <p className="map-link"><a target="_blank" href="https://www.google.com/maps/d/embed?mid=13TCjkSgKsrBbrG_IdvywObgvXuvO5APR">A map to all listed locations!</a></p>
        <iframe 
          className="embedded-map"
          src="https://www.google.com/maps/d/embed?mid=13TCjkSgKsrBbrG_IdvywObgvXuvO5APR" 
          width="100%" 
          height="240">
        </iframe>
      </div>
      <div className="info-list content">
        <Topic
          id="bike"
          title="Biking"
          image="icon-mountain-bike"
        >
          <p>We aren't huge mountain bike types - we're more the "bike into town" types.  However, I'm told this is a great place for mountain biking and there is a great system of trails nearby.</p>
          <p>Just head east on 2 and turn left at Syringa Heights.  If you follow (the upper) to Pine and turn left you'll end up at a little place called "Greta's Segway" - from there you can go in an ride to your hearts delight.</p>
          <p>Schweitzer mountain is another popular mountain biking destination for the more advanced riders, adn you should be able to rent all the gear you need there as well. </p>
        </Topic>
        <Topic
          id="blueberries"
          title="U-Pick Blueberries"
          image="icon-sun"
        >
          <p>There is a blueberry farm just up the road that grows a ton of different varities of blueberries.  Better yet, you can come and pick them when they're in season and take them home at a great price.</p>
          <p>The season starts in mid-July and extends through most of August and even if you don't care for blueberries usually, you will enjoy there.</p>
          <p>First off, there are a ton of varieties that you just don't see in the store.  For instance, our favorite has been the Rika variety which are a sweet and sour type that is simply awesome.</p>
        </Topic>
        <Topic
          id="boating"
          title="Boating"
          image="icon-boat"
        >
          <p>Most people enjoy a day on the lake so naturally boating is a huge activity around here.  There is a boat ramp down at the marina and many other public ones around the area.  If you'd like to get away from folks a bit more, try the Kramer marina East on highway 2 towards Clark Fork and find something remote.  Don't have a boat?  No problem.  Just head down to the marina and there are boat rental upstairs above the convenience store.</p>
        </Topic>
        <Topic
          id="fish"
          title="Fishing"
          image="icon-fishing"
        >
          <p>If you see water, go ahead and fish... except for at the Marina - they don't like folks fishing from the docks there.  My favorite place is to jump in the Kayak and head west, fishing in the estuaries and the little inlets.</p>
          <p>But there are plenty of good spots within walking distance that my (then) 3yr. old caught some smallmouth by himself.  Just head on the path towards the park and follow the signs to the Balto dog park.</p>
          <p>Just before the park there is a dirt path that goes "down" and winds towards the estuary.  If you follow it you'll get to a wooden walkway that leads to a dead end right in the middle of the water.  If you can stand the goose dropping, this is a great quick place to catch a fish or two.</p>
          <div>
            Here are the lures that we've had success with:
            <div className="flex">
              <div>
                <div className="minnow" />
                <div>Rapala small minnow</div>
              </div>
              <div>
                <div className="brown-fish" />
                <div>Some sort of brown bigger fish (largemouth)</div>
              </div>
              <div>
                <div className="blue-fish" />
              </div>
              <div>
                <div className="plastic-worm"/>
              </div>
            </div>
          </div>
        </Topic>
        <Topic
          id="hike"
          title="Hiking"
          image="icon-hike"
        >
          <p>Lots of hiking to be done here for the novice to the expert.  See above (biking) for the Syringa trails, they're great to hike with little ones as well.</p>
          <p>Another hike we really liked with our little boys was the Mineral Point/Lost Lake hike.  The road to get there is really rocky and long, but it was fun when we arrived.  Just take the left trail head and left fork and you can get to this pristine mountain lake.</p>
          <p>For those advanced hikers that want a challenge you have to go do Scotchman Peak.  It's nice challenging trek to a beautiful summit that makes a great place to relax and eat lunch before heading down.  You might even come across some wild huckleberries!</p>
        </Topic>
        <Topic
          id="kayak"
          title="Kayaking"
          image="icon-kayak"
        >
          <p>Kayaking is my personal favorite activity and there are no shortages of great spots to go.  Right behind the neighborhood is a wonderful estuary that's fun to start off in.</p>
          <p>You can drop-in where ever suits you, but my favorite place is behind the house, down the (soon to be) road.  There is a gentle slope and eventually they tell me it will be a full beach and dock.</p>
          <p>If that's still inaccessible due to construction there is a little nitch just to the left of the bridge you drove over coming into the sub division.  It's rocky, but nice and out of the way.  Finally, if you want to hike the boat down to the marina you can launch along that shore too - but it's not nearly as calm of water.</p>
          <p>There are more estuaries just West but if you want to go to a good kayaking destination, head east on 2 toward the Clark Fork delta.  Here there is an abundance of quiet water estuaries that are great for spotting wildlife.</p>
        </Topic>
        <Topic
          id="movies"
          image="icon-film"
          title="Movies"
        >
          <p>After a day of adventuring sometime you need to just sit back and enjoy a movie.  We got yo ucovered here!</p>
          <p>There is a theater north on highway 95 by the Yoke's grocery store.  It's also accessible off of highway 2, but you don't risk getting stuck by a train if you tak 95.</p>
          <p>We also have left a hard drive with some movies on it that you're welcome to plug into any of the TVs or it may work to plug into the router and access from one of the remote video applications.</p>
          <p>Also please feel free to attach the Roku TVs to your netflix, amazon prime or sling accounts and enjoy.  (Just don't forget to sign out before you leave!)</p>
        </Topic>
      </div>
    </div>
  );
};

export default Activities;