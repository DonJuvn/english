import { useParams } from "react-router-dom";const Unit7 = () => {
   // const { id } = useParams();

   return (
      <div id="unit1">
         <div className="units">
            <h1 class="title">Unit 6: ICT applications</h1>
            {/* <p>Displaying content for unit ID: {id}</p> */}
            <p id="subtitle">
               When you have finished this module, you will be able to:
            </p>
            <ul>
               <li>
                  identify communication media and mobile communication devices
                  and their uses
               </li>
               <li>
                  describe computer modelling and computer-controlled systems
                  such as robotics, and the advantages and disadvantages of
                  their use
               </li>
               <li>
                  discuss management systems for school management and computer
                  aided learning
               </li>
               <li>
                  describe online systems to make bookings for cinemas and
                  concerts, etc.
               </li>
               <li>
                  discuss different banking applications and the advantages and
                  disadvantages of each
               </li>
               <li>
                  describe the characteristics and uses of computers in medicine
                  and understand the uses of expert systems for a variety of
                  different applications
               </li>
               <li>explain the uses of expert systems</li>
               <li>
                  explain how computers work in the retail industry, the uses of
                  different payment methods, and understand the advantages and
                  disadvantages of internet shopping
               </li>
               <li>
                  be able to identify the characteristics and uses of
                  recognition systems, including OMR, OCR, RFIDs and biometric
                  recognition
               </li>
               <li>
                  know and understand the uses, and advantages and disadvantages
                  of satellite systems.
               </li>
            </ul>
         </div>
         <div className="units">
            <h1 class="title">ONLINE SHOPPING WITH A LITTLE CHAOS!</h1>
            <p>
               Amazon is a retail giant with centres in around 175 countries
               around the world. Since 2019 Amazon has become the world’s
               largest online retailer. The success of Amazon has been
               attributed partly to the fact that, using its Prime service, the
               time between a customer making an order online and receiving it
               at their house can be 24 hours or less, and in some cities they
               may have delivery in two hours! To achieve this, Amazon needs to
               operate in its warehouses at speeds previously unknown in other
               retail businesses. You might think that this would demand perfect
               organisation of their stock on the shelves, the correct placing
               of every item in an exact place as soon as they arrive in the
               warehouse. This is not the case. Amazon achieve their super-fast
               turnover from order to delivery by using the chaos method of
               storing goods with complete randomness (see Figure 6.1). When a
               box of goods arrives, such as a delivery of 100 mobile phones,
               the box is opened and each individual phone is placed on any
               shelf at random, wherever there is a space. It means that each of
               the 100 new mobile phones could be stored in up to 100 different
               places. You may wonder how this could possibly work! A system of
               bar coding is used to identify items and locations across all of
               its warehouses. When an item is placed on a shelf, a hand-held
               bar code scanner prints out two bar codes, one for the item, the
               other for the shelf: the management system can then inform the
               workers how many items of stock there are and their location. So
               that the workers, whether humans or robots, can keep up with
               demand, they need to be able to find everything quickly.
               Management software tells the workers how many items need to be
               picked up, where the nearest one is, and the quickest route to
               it. The workers pick a number of items at one time that have been
               ordered by different people, therefore saving them time as they
               don’t have to keep going back to the same location to pick up the
               same item which they would, if one order was prepared at a time.
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
                  src={`${process.env.PUBLIC_URL}/amazon.jpg`}
                  alt="Smartphone"
               />
               <p id="desc">
                  Figure 6.1 Photo by Adrian Sulyok. Bucharest, Romania. "We are
                  happy for using this photo on your site. We would appreciate
                  if you'll include a photo credit link under the photo to our
                  site https://www.sulyokimaging.ro" said author
               </p>
            </div>
         </div>
         <div className="units">
            <h1 className="title">6.1 Communication</h1>
            <h2 className="title">Communication media</h2>
            <p>
               In the past it was traditional to communicate mainly by
               letter-writing, written reports, newsletters, telephone and
               face-to-face meetings, but the use of ICT has brought about major
               changes in the way we communicate with each other on a personal
               level, and also on the way that organisations communicate.
            </p>
            <h2 className="title">Newsletters</h2>
            <p>
               Organisations such as businesses, schools, universities and clubs
               produced printed or electronic newsletters for employees,
               customers, parents and students, or for their members. They are
               used to give updates on progress and new developments dd can be a
               single sheet or many pages long. The use of word processing and
               desktop publishing software has allowed more sophisticated
               newsletters. Features include:
            </p>
            <ul>
               <li>using columns</li>
               <li>altering the margins and the spacing</li>
               <li>changing the character size</li>
               <li>using different typefaces (fonts), like Arial or Courier</li>
               <li>different effects, like italic, bold and superscripts</li>
               <li>indenting text</li>
               <li>automated bullet points and numbering systems</li>
               <li>justification of text</li>
               <li>inserting links</li>
               <li>use of headers, footers, automatic page numbering.</li>
            </ul>
            <p>
               There is a skill in producing a newsletter, and part of the skill
               is to ensure that the document looks impressive, while remaining
               readable without too many distracting effects.
            </p>
            <h2 className="title">Posters</h2>
            <p>
               A poster contains less text and information than a newsletter and
               has a greater visual element so that it is eye catching. Posters
               are intended to communicate one message rather than being a
               document containing lots of information on different topics. The
               difference is in the design of the finished product (Figures 6.2
               and 6.3). Posters are usually used to advertise products and
               events.
            </p>
            <h2 className="title">Websites</h2>
            <p>
               A website is a collection of interactive web pages containing
               text, graphics, audio, video and links to other pages. A website
               is hosted on a web server on the internet. The information on the
               website can be viewed by internet users using a web browser.
               Websites are used to raise the profile either of a person or an
               organisation and to communicate with others. Websites can be used
               for various purposes:
            </p>
            <ul>
               <li>for entertainmen</li>
               <li>to provide information about and organisation</li>
               <li>to advertise an organisation or product</li>
               <li>
                  to allow users to upload and download files, e.g. application
                  forms
               </li>
               <li>
                  to allow users to order products advertised on the website.
               </li>
            </ul>
            <p>
               For example, a school website is used to show information about
               the school, and to communicate with parents and other interested
               people to ensure that they feel fully involved with the school.
               The website is also used to advertise the school to people who
               currently have no connection with it, potential new parents in
               particular, and it is also used to advertise school events.
            </p>
            <h2 className="title">Multimedia presentations</h2>
            <p>
               A multimedia presentation is a standalone presentation that uses
               a mixture of different media such as text, video, audio and
               images to present information effectively and to maintain the
               interest of the viewer. Changes from one screen to another can
               use complex transitions to catch attention. Hyperlinks can be
               included as part of a single-user presentation to give the user a
               choice of path through it.{" "}
            </p>
         </div>
         <div className="units">
            <h1 className="title">Mobile communication</h1>
            <p>
               Smartphones are mobile devices that can be used for many methods
               of communication. Like all other telephones, smartphones can be
               used for voice or phone calls. They allow two or more people to
               communicate by talking to each other. Phone calls can also be
               made between landlines and mobile phones. SMS, which stands for
               short message service, allows users to send short text messages
               to each other. They are delivered very quickly and allow
               instantaneous text conversations.
            </p>
            <h2 className="title">Voice over internet protocol</h2>
            <p>
               The voice over internet protocol (VOIP) allows the use of the
               internet to carry voice data when making phone calls. When using
               VoIP technology, the voice data is broken into packets of data
               that are sent along different routes to arrive at the same
               destination where they are reassembled in the right order, (see
               Chapter 4, Section 4.1 Networks). VOIP technology is referred to
               as packet switching. VOIP telephony is generally free for the
               actual calls. The only costs are those for attaching to the
               internet, but the person making the call will not pay for these
               if they are in a restaurant or coffee shop providing free
               internet access. VOIP telephony can be between a computer and a
               landline telephone, not just between two computers or
               smartphones. VOIP is also used when making video calls over the
               internet using the device’s camera, speaker and monitor. Various
               service such as WhatsApp and FaceTime allow users to make video
               calls. As more data has to be transmitted than just a voice call,
               the picture can sometimes lock so that no motion is shown.
            </p>
            <h2 className="title">Accessing the internet</h2>
            <p>
               Mobile devices can access the internet using either Wi-Fi or a
               mobile or cellular network, which is also a wireless network that
               is distributed through cells. Each cell includes a fixed location
               transceiver known as a base station. Working together, these
               cells provide wireless coverage over a large geographical area.
               Each cell offers coverage of between nine and 21 miles. When a
               user moves out of range, the signal falls and the base station
               makes a request to transfer control to another base station that
               is receiving the strongest signals without notifying the
               subscriber. This is called handover. Over the years cellular
               technology has improved, with each improvement being called a
               ‘generation’. Most people now use third generation (3G) or fourth
               generation (4G) technology, but this is due to be superseded very
               soon in some areas with 5G.
            </p>
         </div>

         <div className="units">
            <h1 className="title">Key Questions</h1>
            <ol>
               <li>
                  ‘WeSellShoes’ is a shop that sells various types of footwear
                  to customers in their local town. Describe two advantages to
                  them of designing and maintaining a website.
               </li>
               <li>
                  An organisation created a computer model to assist it in
                  designing and testing a new factory for producing chemicals.
                  When the factory was actually built there were several
                  production problems and a major accident. Describe three
                  reasons why the model was unsuccessful.
               </li>
               <li>
                  A manufacturing company is planning to introduce industrial
                  robots. Describe two benefits and two drawbacks of this
                  decision both for themselves and their workers.
               </li>
            </ol>
         </div>
         <div className="units">
            <h1 className="title">Tips</h1>
            <ol>
               <li>
                  With a partner, investigate how computer systems are used for
                  administration and learning in your school or college.
               </li>
               <li>
                  Create a presentation of your findings to explain to potential
                  parents how the systems are used.
               </li>

               <li>
                  Work together to create the three-fold brochure on desktop
                  publishing software exactly as you had planned it. For more
                  information about creating a brochure, see Chapter 12
                  (Images), Chapter 13 (Layout) and Chapter 17 (Document
                  production).
               </li>
            </ol>
         </div>
      </div>
   );
};

export default Unit7;
