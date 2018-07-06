import React from 'react';

import QuickLinks from './widgets/QuickLinks';
import Topic from './widgets/Topic';

const Food = () => {

  const links = [
    {text: 'Coffee', image: 'icon-coffee', anchor: 'coffee'},
    {text: 'Groceries', image: 'icon-groceries', anchor: 'groceries'},
    {text: 'Ice Cream', image: 'icon-ice-cream', anchor: 'icecream'},
    {text: 'Pizza', image: 'icon-pizza', anchor: 'pizza' },
    {text: 'Sit down', image: 'icon-food', anchor: 'sitdown'}
  ];

  return (
    <div className="info-page food">
      <div className="title center">
        Food and Treats
      </div>
      <QuickLinks
        prefix="/food"
        links={links}
      />
      <div className="content">
        <p>
          With two kids under 5 we admittedly have not been able to try everything Sandpoint has to offer - particularly when it comes to sit-down dinning or the night life.  But what we have tried and loved you can find here, and if you are able to go try some of the restaurants, bars and live music spots feel free to share your favorites.          
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
          id="coffee"
          title="Coffee"
          image="icon-coffee"
        >
          <p>There are tons of coffee options around town so here is a small sampling.</p>
          <div className="joeandroll groceries"/>
          <p>This is a family favorite and right within biking/walking distance.  Just go back the way you came in and on the right hand side of the road you'll see a small unassuming hut.  The people here are awesome and so is everything the sell.  In particular you should ask about the ginger snaps because they are out of this world!  And of course, say 'hi' from us.</p>
          <p>Another local option on the west side of town is Evans Brothers one block west of fifth on Church street.  They seem to be a local chain that's really popular.</p>
          <p>A bit further north on fifth before the Big 5 sporting goods store is Kokanee coffee - another local shop my wife enjoys.</p>
          <p>Panhandle cone and coffee also offers a good selection but I'm leaving that in the Ice Cream section because that is where they are the very best you'll find.</p>
        </Topic>
        <Topic
          id="groceries"
          title="Groceries"
          image="icon-groceries"
        >
          <p>You have four options for groceries around here.  There is a Safeway on Fifth as you come into Sandpoint but we tend to visit the local options.</p>
          <div className="yokes groceries" />
          <p>Yoke's is our favorite place because we find it has a great balance of "normal" stuff, and a lot of great healthy options. You'll quickly find that ethnic items can be harder to find, but Yoke's seems to fulfill our recipe books the best.</p>
          <div className="superone groceries" />
          <p>SuperOne is the local big chain and it's pretty good and very close.  When we're just making a quick trip this is a good option because of it's proximity and good prices.  It's produce is also usually pretty awesome.</p>
          <div className="winterridge groceries"/>
          <p>Winter Ridge is your healthy alternatives store.  They also have a little cafe much like you'll find at Whole Foods - so it's a pretty neat spot.  If you have any sort of dietary restrictions this is probably you're best bet followed by Yoke's.</p>
        </Topic>
        <Topic
          id="icecream"
          title="Ice Cream"
          image="icon-ice-cream"
        >
          <div className="panhandle groceries"/>
          <p>Panhandle Cone and Coffee is the best ice cream shop we've ever been to.  Period!</p>
          <p>Everything is made in store of course, and the flavors are super fresh and inventive.  There's the classic buttermilk huckleberry, or the lavendar honey, or strawberry rhubarb pie... or my personal favorite Habenro and Pineapple.</p>
          <p>They change them often so we recommend you hit this gem as many times as your diet can allow!</p>
        </Topic>
        <Topic
          id="pizza"
          title="Pizza"
          image="icon-pizza"
        >
          <p>There are actually quite a few pizza options around town and a few that we haven't tried (such as The Hound) but here are the three that we tend to go back to.</p>
          <div className="groceries secondavenue"/>
          <p>Let's start with our favorite - 2nd avenue pizza.  It's most similar to Chicago style pizza but the load on the toppings and every part just tastes good.  It's a bit hard to find on the West side of town in the neighborhood but it's worth the trouble</p>
          <p>If we're going after a cheaper option there are two familiar chains that we'll go back to: Dominoes and Papa Murphy's.  Domines is right in town whereas Papa Murphy's is a bit of trek into Ponderay.</p>
        </Topic>
        <Topic
          id="sitdown"
          title="Sit Down"
          image="icon-food"
        >
          <p>Babysitters have been few and far between for us while we're in town which means the following are good spots for families to visit.</p>
          <div className="groceries mickduffs" />
          <p>The list starts with MickDuffs.  It's a micro-brewery in town with good classic American fair.  It's a good place to take little ones because it's generally loud and they have the classic kids menu that our boys enjoy.  There are also a lot of interesting beers and ciders to try so everyone wins.</p>
          <p><b>Spuds Waterfront Grill</b> - exclusively a breakfast and lunch spot, Spuds is awesome.  Great sandwiches, great location in town on the inlet and fresh huckleberry lemonade.  It's one of those places we'll probably stop in at a few times during our stay.</p>
          <p><b>Loaf and Ladle</b> - You can take kids here or get it for take out and it's very good food.  A bit pricey, but when you taste the food you'll understand why!  The menu is limited but changes often and everything is prepared perfectly and the atmosphere is nice and relaxed while you eat the sophisticated dishes.</p>
          <p><b>Shoga Sushi</b> - one of our babysitter nights we tried Shoga and it's a good sushi option for the area.  It's located at the lodge across the bridge and it didn't disappoint.</p>
          <p><b>Forty-One South</b> - sister restaurant to Shoga, this more traditional restaurant is a lot of fun (though expensive).  It's right on the lake and many times features a band playing outside so you can enjoy a great meal, great wine and then walk down to the shore and lounge about to some folk music before heading back.</p>
          <p><b>Pend O'Reille Winery</b> - One of the local wineries opened a restaurant and tasting room in the middle of town.  While we haven't really had the opportunity to try it out, we've had the wine and are anxious to do so.  They also have live music and other events throughout the summer.</p>
        </Topic>
      </div>
    </div>
  );
};

export default Food;