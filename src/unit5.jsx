import { useParams } from "react-router-dom";
const Unit5 = () => {
   // const { id } = useParams();

   return (
      <div id="unit1">
         <div className="units">
            <h1 class="title">Unit 4: Networks</h1>
            {/* <p>Displaying content for unit ID: {id}</p> */}
            <p id="subtitle">
               When you have finished this module, you will be able to:
            </p>
            <ul>
               <li>
                  discuss the operation of a router and other common network
                  devices, such as network interface cards, hubs, bridges,
                  switches
               </li>
               <li>explain the use of Wi-Fi and Bluetooth in networks</li>
               <li>discuss cloud computing and how to store and share data</li>
               <li>
                  describe the characteristics and purpose of common network
                  environments
               </li>
               <li>list the differences between different network types</li>
               <li>
                  discuss security issues regarding data transfer, including
                  understanding about passwords and other authentication methods
               </li>
               <li>explain the use of anti-malware software</li>
               <li>describe electronic-conferencing.</li>
            </ul>
         </div>
         <div className="units">
            <h1 class="title">Celebrity data breaches</h1>
            <p>
               Celebrity data breaches are not new. Taylor Swift and Ariana
               Grande have been victims on Instagram where hackers have broken
               into their accounts and posted things pretending to be them.
               Instagram (which has around 700 million users worldwide) email
               people who are well known to tell them of the dangers. They ask
               all users to beware of unusual phone calls, emails or texts.
               Hacking is made possible because when someone opens an account
               with a social media site, they are asked for pieces of
               information such as where you were born, what your first school
               was, what your nickname at school was. This sort of information
               is very easy to find out about celebrities because there is such
               a lot of information about celebrities already on the internet.
               It is also why you should be wary of joining in with survey-style
               memes on social media that ask you to share information about
               yourself, for example, ‘your first pet was called…; your
               favourite cereal is… etc.’, however much fun they may be to fill
               in, you may inadvertently be sharing information a hacker could
               use. Another method a hacker could use is by gaining access to a
               Wi-Fi network that the celebrity is connected to and installing
               an app onto one of their devices. This would give the hacker full
               access to find photos and other private information. In this
               chapter, you will learn about networks and security issues with
               such networks.
            </p>
            {/* <div className="image">
           <img
              src="https://i.pinimg.com/originals/97/ba/ba/97baba3ccbfeebaaf2e37ff9f2c6b240.jpg"
              alt=""
           />
           <p id="desc">
              Figure 1.1 The Colossus machine at Bletchley Park, UK, was one of
              the first electronic computers. It was invented in the 1940s.
              Because valves (large electronic components) were used, Colossus
              was huge, filling the room.
           </p>
        </div> */}
            <div className="image" id="smartphone-img">
               <img
                  id="smartphone"
                  src={`${process.env.PUBLIC_URL}/networks.jpg`}
                  alt="Smartphone"
               />
               <p id="desc">
                  Figure 4.1 Photo by Taylor Vick. University of Washington,
                  Seattle, United States.
               </p>
            </div>
         </div>
         <div className="units">
            <h1 className="title">4.1 Networks</h1>
            <p>
               A network connects computers and other digital devices together
               and allows them to share data and resources. Networks allow the
               use of the following: <br />
               Computer-to-computer communication.
               <br />
               • Computers communicating with devices such as printers, mice and
               keyboards. <br />
               • Mobile phone networks. <br />
               • Smart televisions. <br />• Tablets and media players
               downloading videos and music and playing them through external
               devices such as speakers and digital projectors.
            </p>
         </div>
         <div className="units">
            <h1 className="title">Network types</h1>
            <p>
               Types of networks include local area networks (LAN), including
               wireless local area networks (WLAN), and wide area network (WAN).{" "}
            </p>
            <h2 className="title">Local area network</h2>
            <p>
               A local area network (LAN) enables a group of computers that are
               in close proximity to each other to be networked. Typically, a
               LAN would be used in a school, in an office or at home. A LAN is
               useful because it allows resources such as files, printers, games
               and other software applications to be shared by the computers on
               the network. There are two ways of connecting the devices so that
               they can communicate with each other. These are: • By cables that
               have to be routed throughout the buildings. • Using radio waves
               so that no cables are required. This method is called a wireless
               local area network or WLAN. An advantage of a WLAN over a cable
               LAN is that it allows the users to move around the area with
               their devices and remain connected. With a cable LAN they would
               have to log off, remove the cable, plug the cable in somewhere
               else and log in again. A WLAN also lets one or more people
               connect their mobile devices such as laptops, mobile phones,
               tablets, media players, speakers and printers. This are often
               called a personal area network (PAN).
            </p>

            <h2 className="title">Wide area network</h2>
            <p>
               A wide area network (WAN) is a network that connects separate
               LANs over a large geographical area. Typically, a WAN will
               connect cities, a country or many countries. Imagine an
               organisation that has offices in more than one town; they would
               probably each have a LAN set up in each building and then connect
               them all together into a WAN. A WAN ensures that computers in one
               location can communicate with computers and users in other
               locations. The internet is a huge wide area network. The separate
               networks are connected by cables running throughout the world
               under the ground and under the sea and by satellite
               communications.
            </p>
         </div>

         <div className="units">
            <h1 className="title">Common network environments</h1>
            <h2 className="title">Internet, intranet and extranet</h2>
            <p>
               The internet is a global network of interconnected computer
               networks. The internet is used to connect people, communities and
               countries worldwide. Businesses can use the internet for
               information retrieval, communications, marketing and sales to
               distant customers, and banking. The internet allows all users
               access to web pages. The internet uses a set of rules or
               protocols called TCP/ IP. This stands for transmission control
               protocol/internet protocol. That is why all computers need a
               unique IP address so that data can be directed to the correct
               one. Intranets and extranets use the same protocols. An intranet
               is a private computer network within an organisation, such as a
               school or a business which uses internet technology. Even though
               an intranet uses internet technologies, it is separate from the
               global internet and cannot be accessed by outside users. An
               intranet contains web pages about the organisation. For example,
               it can publish newsletters, health and safety policies,
               information about courses and training and forms for requesting
               payment and holidays. An extranet is an intranet that allows
               users from other organisations to use it for specific purposes
               (see Figure 4.5). Examples include hospital intranets that allow
               access to community doctors to book appointments for patients or
               a manufacturing company that allows access
            </p>
         </div>

         <div className="units">
            <h1 className="title">Key Questions</h1>
            <ol>
               <li>
                  There are different types of networks that are in use in
                  organisations and companies. <br />a Describe the differences
                  between the internet, an intranet and an extranet. <br /> b
                  Give examples of situations in which they would be used.
               </li>
               <li>
                  Copy and complete the table below with the words internet,
                  extranet or intranet.
               </li>
               <li>Define cloud computing.</li>
               <li>State where cloud data and apps are stored.</li>
               <li>
                  Which of these statements shown in the table below are true
                  and which are false?
               </li>
            </ol>
         </div>
         <div className="units">
            <h1 className="title">Tips</h1>
            <ol>
               <li>Learn about the latest computer hardware network types.</li>
               <li>Try to connect two PCs manually</li>

               <li>
                  Regularly update and maintain hardware components for optimal
                  efficiency.
               </li>
            </ol>
         </div>
      </div>
   );
};

export default Unit5;
