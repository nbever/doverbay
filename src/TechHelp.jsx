import React from 'react';

import QuickLinks from './widgets/QuickLinks';
import Topic from './widgets/Topic';

const TechHelp = () => {
  
  const links = [
    {text: 'Internet', image: 'icon-internet', anchor: 'web'},
    {text: 'TVs', image: 'icon-tv', anchor: 'tv'}
  ];

  return (
    <div className="info-page tech-help">
      <div className="title center">
        Tech Help
      </div>
      <QuickLinks
        prefix="/tech"
        links={links}
      />
      <div className="content">
        <p>If you're experiencing any trouble with the technology in the house, or looking for help connecting your device you might find help on this page.  There's also a good chance that we'll be able to help you more specifically than the staff at the Marina so don't hesitate to reach out.  When/if you do, it would be helpful to give us a name and time that we migh tbe able to call over to help you.  We can just use the land line, or contact you on your mobile device - whichever you'd prefer.</p>
      </div>
      <div className="content info-list">
        <Topic
          id="web"
          title="Internet"
          image="icon-internet"
        >
          <p>Connection details:</p>
          <table>
            <tbody>
              <tr>
                <td className="network">gojira-5</td>
                <td>5k network for media streaming</td>
                <td>{'K@!judesu'}</td>
              </tr>
              <tr>
                <td className="network">gojira-2.4</td>
                <td>Network for internet access for laptops and devices (probably the one you're looking for!)</td>
                <td>{'K@!judesu'}</td>
              </tr>
              <tr>
                <td className="network">605</td>
                <td>Northland communications network - private</td>
                <td>[private]</td>
              </tr>                                
            </tbody>
          </table>
          <p>If the connection is not working you'll want to check the lights on the modem and router and compare them to this photo of "working".</p>
          <div className="router groceries" />
          <div className="modem groceries" />
          <p>Going left to right... the one with the 3 anetnnae is the router, next to that is the blu-ray player, lastly you have the modem from Northland.</p>
          <p>To reset the system, first disconnect and power everything down.  Start with the modem, connect it to the cable and turn it on, waiting for the lights to look like above before continuing.</p>
          <p>Assuming that was successful, connect the router ack to the modem and power it on again waiting for the lights to mimic the above photo.</p>
          <p>If this does not work, you should contact us and we'll work with Northland to try and get the issue resovled on their end.</p>
        </Topic>
        <Topic
          id="tv"
          image="icon-tv"
          title="TVs"
        >
          <p>There are three TVs in the unit, one in the guest room, one in the living room and one in the loft.  The ones in the guest room and the loft are Roku TVs which means that in addition to functioning like a regular TV, they also run the Roku app which allows connection to tons of internet streaming services.</p>
          <p>While you're here, feel free to add or remove channels from the Roku devices and use your Netflix, Amazon Prime, Vudu, Hulu, SlingTV etc. accounts to access the content you'd like.  Or... start a trial on one of those services and find something new and cool!</p>
          <p>When you check out just remember to sign out so that you don't leave unfettered access for the next occupants.</p>
          <p>If you just want normal cable, it's connected in three of the cable jacks in the house.  The loft, the guest room and the large upstairs room.  On the Roku TVs select the "cable" option from the start up menu.  For the Sony Bravia you'll need to click the "source" button and cycle through until you get to the cable input</p>
          <div className="rokucable groceries" />
          <p>Now... on the Sony sometimes it loses it's channels and you'll want to run it through the auto-program feature for them all to get added back.  Below is the screen sequence required to get this done:</p>
          <p>First hit the "home" button on the remote to get to the menu</p>
          <div className="autop-1 groceries" />
          <p>Next select "Settings"</p>
          <div className="autop-2 groceries" />
          <p>Find the "Channels" options and select "Auto Program"</p>
          <div className="autop-3 groceries" />
          <p>When it's done you should see this...</p>
          <div className="autop-4 groceries" />
        </Topic>
      </div>
    </div>
  );
};

export default TechHelp;