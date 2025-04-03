import { useParams } from "react-router-dom";const Unit10 = () => {
   // const { id } = useParams();

   return (
      <div id="unit1">
         <div className="units">
            <h1 class="title">Unit 8: Safety and security</h1>
            {/* <p>Displaying content for unit ID: {id}</p> */}
            <p id="subtitle">
               describe common physical safety issues, what causes them and the
               strategies that can be used to prevent them
            </p>
            <ul>
               <li>
                  evaluate how you use IT equipment and develop ways to minimise
                  any safety risks that you find during your evaluation
               </li>
               <li>discuss the principles of a typical data protection act</li>
               <li>
                  explain what is meant by personal data, why it should be kept
                  confidential and protected and how to avoid inappropriate
                  disclosure of personal data
               </li>
               <li>
                  discuss eSafety strategies to minimise danger when using the
                  internet, sending emails, using social media and playing
                  online games
               </li>
               <li>
                  discuss the threats to data and understand what measures
                  should be taken to protect your data.
               </li>
            </ul>
         </div>
         <div className="units">
            <h1 class="title">STAYING SAFE IN A CONNECTED WORLD</h1>
            <p>
               In the past, when everyone had their own, unconnected personal
               computer, life was pretty simple. Of course, there were hazards,
               computers use electricity and they were even heavier and harder
               to carry around back then. But security meant having a cable to
               fix the computer to the desk, creating a login password and never
               leaving your computer unattended while it was logged in. Computer
               theft was the stealing of actual, physical computers, not
               stealing all of your personal data. Then communicating with
               others became the focus for research and development and local
               area networks (LANs) were created, allowing people to communicate
               and collaborate in offices and schools. But local communications
               were limiting and so along came the internet to link users in
               different parts of the globe so they could swap files and send
               emails to each other. Finally, the world wide web (www) became a
               service available on the internet and a fully connected world was
               born. And now, it is not just people who are connected, but even
               fridges, kettles and tennis rackets. It is now possible for
               someone at the other side of the world to log into your home
               network and switch your kettle on, or use it to send requests to
               web servers somewhere else in the world. Instead of local disk
               drives, we now store our data in ‘the cloud’. Where that is,
               no-one knows. It could be a computer down the road or a large one
               in Iceland or even under the sea so it can keep cool. All these
               aids to communication have been exploited by criminals. These are
               people who want to find out your personal data and use it to
               commit fraud or persuade you which way to vote in an election by
               sending you fake news. Or people who want to find out where you
               live and maybe meet you and take advantage of you. Or people who
               want to send you messages to say unkind things. People today have
               to go to far greater lengths to ensure they are safe when using
               their connected computers, tablets and smartphone. Luckily, as
               criminals have got smarter, so has the security that we use to
               stay safe when using our devices. We just have to be careful.
            </p>

            <div className="image" id="smartphone-img">
               <img
                  id="smartphone"
                  src={`${process.env.PUBLIC_URL}/cs.jpg`}
                  alt="Smartphone"
               />
               <p id="desc">
                  Figure 8.1 Photo by FlyD. Computer security explained
               </p>
            </div>
         </div>
         <div className="units">
            <h1 className="title">8.1 Physical safety issues</h1>
            {/* <h2 className="title">Communication media</h2> */}
            <p>
               The use of computers comes with a number of physical safety
               concerns. There are hazards to the physical safety of users such
               as the cabling, the siting of a new printer, electrical overload
               or having a drink next to a computer. Most of these safety
               concerns are temporary and can be easily avoided. Computers and
               their peripherals are electrical devices that need to be
               connected to each other, and this will involve some cables and an
               electricity supply. Add to that the possibility that several
               computers may be connected by cables in order to create a
               network, and suddenly there are a lot of wires around. Simple
               precautions can be taken to overcome the safety problems that
               this can cause.
            </p>
            <h2 className="title">Trailing cables</h2>
            <p>
               You will probably have noticed that there are usually a lot of
               cables attached to computers, such as power cables, network
               cables and ones connecting mice, keyboards and printers. When
               these cables need to go across the floor, there is a risk that
               people might trip over them. What could happen if someone trips
               on a cable? There might be injury such as a broken bone or an
               electric shock to the person if they grab a live wire or cable.
               If the plug has been pulled out during the trip, there could be
               damage to the lead or plug, and the equipment attached to the
               cable may be damaged if it was pulled off a desk. Ideally, the
               installation of the computers will have been well planned and the
               cables will all be hidden and out of the way (see Figure 8.2). In
               many cases this does not happen, so because of these potential
               risks of tripping, or of electric shocks or fires if the cable or
               plug is damaged, it is good safety practice to make sure that
               when cables need to cross a floor, they are all inside cable
               ducts, or under the carpet or flooring.
            </p>
            <h2 className="title">Spilling drinks</h2>
            <p>
               Most of the time computers and devices need to be plugged in to
               an electrical power source. This is why care has to be taken to
               avoid any risk of electrocution. If a drink spills into your
               computer or device you could risk it being damaged and you may be
               in danger of injury! You will probably have been told not to have
               drinks near to your computer so that you will avoid accidental
               damage to the device or injury to yourself (see Figure 8.3).
               Liquids and electricity do not mix. A spillage could cause
               permanent damage to your devices and, more importantly, to
               yourself. As water conducts electricity, you can easily be
               electrocuted by spilled drinks. If a drink is spilled into your
               keyboard: Don’t panic. <br />• Unplug your computer immediately.
               (Do not wait to shut down your computer using the software.) If
               you unplug it quickly, you may prevent the electronics inside the
               computer from being damaged. <br />• Using a soft cloth, dry up
               as much of the liquid as you can. <br />• Pull out any other
               cables connected to your computer, such as USB components, cards
               and any other external devices. <br />• Hold the laptop or
               keyboard upside down and very gently move it from side to side to
               drain it. Don’t shake it. A lot of the liquid should drain out.{" "}
               <br />• Leave it upside down on the desk so that the rest of the
               liquid can drain out. <br />• Wait about 24 hours then use a
               soft, damp cloth to clean the outside. The best advice is the
               most boring: don’t drink while you work at a computer or near to
               any devices!
            </p>
            <h2 className="title">What is electrical overload?</h2>
            <p>
               When an extension lead has several sockets for you to plug more
               than one appliance into, you may find that once you have
               everything plugged in, together their individual currents will
               add up to more than the maximum current rating stated for the
               extension lead. This is electrical overload, which could cause
               the plug in the wall socket to overheat and cause a fire.
               Similarly, if electrical equipment overheats it can cause fires.
               The danger signs are if the plugs or sockets become hot, or fuses
               blow unexpectedly; there may be flickering lights or burn marks
               on sockets or plugs. If this happens, you should check that there
               isn’t any loose wiring, that only one extension lead per wall
               socket is being used and that there isn’t one extension lead
               plugged into another. To avoid electrical overload and equipment
               overheating, you can calculate the amps being used by dividing
               the amount of wattage by the voltage. For example, if you have an
               electrical item that is rated at 1000 watts and it runs on 120
               volts, when you divide it you will see that almost half of a 20
               amp circuit is already being used. You can usually find the
               information on the bottom of the device or on a sticky label
               attached to its cable.
            </p>

            <h2 className="title">
               Other risks associated with computer equipment
            </h2>
            <p>
               Because computer equipment is often heavy, there is a risk of
               injury if you move it, or if an item of hardware falls on
               someone. If you get a new printer, and it needs to be connected
               to a computer as well as to the electricity power point, you will
               need to decide where to put it. Even if your new printer is Wi-Fi
               enabled, it will still need to plug into the electricity power
               point. Whichever type of printer you have, you will probably put
               it on a shelf near the computer, but before you put it there, ask
               yourself two questions: • Is the shelf designed to carry that
               much weight? • Will the printer fit properly on the shelf without
               it being dangerously balanced? Devices must be placed in suitable
               positions. Make sure equipment is placed on tables or shelves
               that are strong enough for them; the position must be able to
               support the weight of the device and a check should be made to
               see if it will be large enough to support the device under each
               of its corners. Also, devices need to be placed where users can
               get at them easily. If it is a printer, you will need to add more
               paper regularly and to change the ink when necessary
            </p>
         </div>

         <div className="units">
            <h1 className="title">Key Questions</h1>
            <ol>
               <li>
                  a Describe three responsibilities of the data holder that
                  should be in a data protection act. <br /> b Describe three
                  rights that should be given to the data subjects.
               </li>
               <li>
                  Describe what steps you could take to keep safe when playing
                  online games.
               </li>
            </ol>
         </div>
         <div className="units">
            <h1 className="title">Tips</h1>
            <ol>
               <li>
                  Discuss with two students sitting near to you what steps you
                  can take to prevent physical danger to yourself and others
                  when using a computer, whether at home or at school
               </li>
               <li>
                  Collaborate with others in your group to plan what guidelines
                  need to be followed in order to keep safe when using a
                  computer.{" "}
               </li>

               <li>
                  Work individually using a word processor to produce a one-page
                  notice to pin on the computer wall, listing the guidelines.
                  You should format your notice to look interesting so that
                  people will read it. You may want to use a page border,
                  consider the size of the font so it can be easily read when it
                  is on the wall and use an eye-catching heading.
               </li>
            </ol>
         </div>
      </div>
   );
};

export default Unit10;
