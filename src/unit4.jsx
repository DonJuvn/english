import { useParams } from "react-router-dom";const Unit4 = () => {
   // const { id } = useParams();

   return (
      <div id="unit1">
         <div className="units">
            <h1 class="title">Unit 3: Storage</h1>
            {/* <p>Displaying content for unit ID: {id}</p> */}
            <p id="subtitle">
               When you have finished this module, you will be able to:
            </p>
            <ul>
               <li>identify different data storage media</li>
               <li>
                  identify the devices that are necessary to write and read data
                  to and from the media
               </li>
               <li>
                  describe the uses for the different types of data storage
                  media and compare their advantages and disadvantages
               </li>
               <li>
                  compare the advantages and disadvantages of optical, magnetic
                  and solid-state storage devices.
               </li>
            </ul>
         </div>
         <div className="units">
            <h1 class="title">Overview</h1>
            <p>
               A computer is more than just a screen and keyboard—it is a
               sophisticated system with multiple components working together.
               Understanding how these parts function will help you troubleshoot
               problems and make informed decisions when purchasing or upgrading
               a device.
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
                  src={`${process.env.PUBLIC_URL}/storage.jpg`}
                  alt="Smartphone"
               />
               <p id="desc">
                  Figure 3.1 The Storage server machine at imgIX, UK, is one of
                  the highest production electronic storage.
               </p>
            </div>
         </div>
         <div className="units">
            <h1 className="title"> 3.1 Storage devices and media</h1>
            <p>
               Storage is a very important component in a computer system.
               Computers store data in a digital format so the storage media has
               to be able to store digital data. Storage devices use storage
               media that hold data whether the computer is on or off and are,
               therefore, non-volatile. The storage medium holds the data and
               the storage device is the machine that lets you store the data
               onto the medium, and then reads data from it. For instance, a CD
               RW (Compact Disk Read/Write) disk is the medium because that is
               the part that has the data on it; the CD RW drive (the device
               that writes the data to the disk, or reads the data from the
               disk) is the storage device. There are three main types of
               storage media (magnetic, optical and solid-state) and each type
               stores the data in a different way.{" "}
            </p>

            <h2 className="title">Magnetic storage media and devices</h2>
            <p>
               Magnetic storage media hold data magnetically and include hard
               disk drives and magnetic tape. The surface of the media is made
               of magnetic material and data is stored digitally in the form of
               tiny magnetised regions, or dots. Data is written to magnetic
               storage media by changing the local magnetic polarity to
               represent either a 0 or a 1 – these are ‘bits’. A magnetic device
               can then read the magnetic state of the disk, extracting the 1s
               and 0 s, to retrieve the data from the disk.
            </p>
         </div>
         <div className="units">
            <h1 className="title">Optical storage media and devices</h1>
            <p>
               Optical storage media and devices use light from lasers to read
               and write data.
            </p>
            <ul>
               <li>
                  Optical media include compact disks (CDs), digital versatile
                  disks (DVDs) and Blu-ray disks.
               </li>
               <li>
                  They can store different amounts of data – CDs can store
                  700MB, DVDs, 4.7GB and Blu-ray disks, 128GB.
               </li>
               <li>
                  ROM stands for ‘read-only memory’; these cannot be written to,
                  only read from (CD ROM and DVD ROM).
               </li>
               <li>
                  R stands for ‘recordable’; these can be written to just once
                  and then can only be read from (CD-R and DVD-R).
               </li>
               <li>
                  RW stands for ‘re-writable’; these can be written to multiple
                  times (CD-RW and DVD-RW).
               </li>
            </ul>
            <p>
               An optical disk has a single spiral track running from the inside
               to the outside. The spiral track is over 5 km long. When CDs and
               DVDs are produced, digital data is stored along the track by
               etching pits onto the surface of the disk with a laser in the
               optical storage device. The disk between the pits is called a
               land (see Figure 3.5). When the light from a laser hits the
               lands, it is reflected back to a detector. The light is scattered
               away by the pits and no light is detected. These two events
               represent the digits ‘0’ and ‘1’. Both CD drives and DVD drives
               use a laser to read and to write the data, but a DVD drive uses a
               more precise laser. Because of this, the data on DVD media can be
               closer together and therefore more data can be squeezed onto the
               surface.
            </p>
         </div>

         <div className="units">
            <h1 className="title">Solid-state storage media and devices</h1>
            <p>
               Solid-state storage media use flash memory, which makes them much
               faster than traditional fixed hard disks. Flash memory consists
               of non-volatile memory chips containing transistors called
               floating gate transistors that keep their charge even when the
               power is switched off. (Normal transistors lose their state when
               the power is turned off.) At first, all transistors are charged
               (set to 1). But when a save operation begins, current is blocked
               to some transistors, switching them to 0. This type of storage is
               called solid-state because there are no moving parts. Devices
               using solid-state storage media include solidstate drives, memory
               sticks and pen drives, and flash memory cards.
            </p>
         </div>
         <div className="units">
            <h1 className="title">Key Questions</h1>
            <ol>
               <li>
                  There are three main types of storage device.
                  <li>
                     a State what type of storage medium is used by memory
                     sticks and memory cards.
                  </li>
                  <li>b Name two devices that store data magnetically.</li>
                  <li>c List three devices which store data using lasers</li>
               </li>
               <li>Why are storage devices necessary?</li>

               <li>
                  What is the difference between a storage medium and a storage
                  device? Give examples.
               </li>
            </ol>
         </div>
         <div className="units">
            <h1 className="title">Tips</h1>
            <ol>
               <li>Learn about the latest computer storage advancements.</li>
               <li>
                  Compare performance specifications before purchasing a new
                  device.
               </li>

               <li>
                  Get aqcuianted with SSD and HDD drivers. Which is better in
                  what situation?
               </li>
            </ol>
         </div>
      </div>
   );
};

export default Unit4;
