import { useParams } from "react-router-dom";
const Unit4 = () => {
   // const { id } = useParams();

   return (
      <div id="unit1">
         <div className="units">
            <h1 class="title">Unit 2: Computer Systems and Hardware</h1>
            {/* <p>Displaying content for unit ID: {id}</p> */}
            <p id="subtitle">
               When you have finished this module, you will be able to:
            </p>
            <ul>
               <li>
                  Understand the role of ICT in everyday life and various
                  industries.
               </li>
               <li>
                  Explain the evolution of computing technologies and their
                  impact.
               </li>
               <li>Identify ethical and legal concerns related to ICT.</li>
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
                  src={`${process.env.PUBLIC_URL}/oldcomputer.jpg`}
                  alt="Smartphone"
               />
               <p id="desc">
                  Figure 1.1 The Colossus machine at Bletchley Park, UK, was one
                  of the first electronic computers. It was invented in the
                  1940s. Because valves (large electronic components) were used,
                  Colossus was huge, filling the room.
               </p>
            </div>
         </div>
         <div className="units">
            <h1 className="title">2.1 Computer Hardware Components </h1>
            <p>
               Every computer consists of essential hardware elements that work
               together: Input devices, such as keyboards, mice, touchscreens,
               and microphones, allow users to interact with the system.
               Processing units, like the CPU (Central Processing Unit) and GPU
               (Graphics Processing Unit), handle instructions and calculations.
               Output devices, including monitors, printers, and speakers,
               display or present processed data. Storage devices, like HDDs
               (Hard Disk Drives), SSDs (Solid-State Drives), and external
               storage solutions, keep data safe and accessible. 2.2 Internal
               vs. External Storage Storage plays a vital role in system
               performance: Internal storage refers to built-in components such
               as RAM and SSDs, affecting a computer’s speed and multitasking
               capabilities. External storage includes removable drives, USB
               flash drives, and cloud storage, providing additional space for
               backups and portability. 2.3 Performance Factors of a Computer
               Have you ever wondered why some computers run faster than others?
               Several factors influence performance: Processor speed (measured
               in GHz) and the number of cores determine how quickly a computer
               can execute tasks. RAM capacity affects the ability to multitask
               without slowdowns. Storage type plays a role, as SSDs offer
               significantly faster data retrieval than traditional HDDs.
               Graphics processing is essential for gaming, video editing, and
               high-performance applications.
            </p>
         </div>
         <div className="units">
            <h2 className="title">Main Types of Hardware</h2>
            <ul>
               <li>
                  <strong>Input Devices:</strong> Allow users to enter data into
                  a computer system, such as keyboards, mice, and microphones.
               </li>
               <li>
                  <strong>Output Devices:</strong> Display or produce results
                  from processed data, including monitors, printers, and
                  speakers.
               </li>
               <li>
                  <strong>Processing Unit:</strong> The CPU executes
                  instructions and manages tasks within a computer system.
               </li>
               <li>
                  <strong>Memory:</strong> Includes RAM for temporary storage
                  and ROM for essential system instructions.
               </li>
               <li>
                  <strong>Storage Devices:</strong> HDDs offer large-capacity
                  storage at slower speeds, while SSDs provide faster
                  performance using flash memory.
               </li>
               <li>
                  <strong>Motherboard:</strong> The main circuit board that
                  connects all components and enables communication between
                  them.
               </li>
               <li>
                  <strong>Power Supply Unit (PSU):</strong> Converts electricity
                  into usable power for internal components.
               </li>
               <li>
                  <strong>Graphics Processing Unit (GPU):</strong> Handles
                  rendering and visual computations for gaming, video editing,
                  and other graphical tasks.
               </li>
            </ul>
         </div>

         <div className="units">
            <h2 className="title">Main Types of Software</h2>
            <ul>
               <li>
                  <strong>System Software:</strong> Manages hardware resources
                  and system functionality.
                  <ul>
                     <li>
                        <strong>Operating Systems:</strong> Windows, macOS,
                        Linux.
                     </li>
                     <li>
                        <strong>Utility Programs:</strong> Antivirus software,
                        disk cleanup tools.
                     </li>
                  </ul>
               </li>
               <li>
                  <strong>Application Software:</strong> Designed for user
                  tasks.
                  <ul>
                     <li>
                        <strong>Productivity Tools:</strong> Word processors,
                        spreadsheets.
                     </li>
                     <li>
                        <strong>Multimedia Programs:</strong> Image and video
                        editing software.
                     </li>
                     <li>
                        <strong>Web Browsers:</strong> Chrome, Firefox, Safari.
                     </li>
                  </ul>
               </li>
               <li>
                  <strong>Programming Software:</strong> Provides tools for
                  developing and writing code.
                  <ul>
                     <li>
                        <strong>Compilers and Interpreters:</strong> Convert
                        programming languages into machine-readable
                        instructions.
                     </li>
                     <li>
                        <strong>
                           IDEs (Integrated Development Environments):
                        </strong>{" "}
                        Provide a workspace for coding, debugging, and testing
                        applications.
                     </li>
                  </ul>
               </li>
            </ul>
            <ul>
               <li>Web page editors are used to create web pages.</li>
               <li>
                  Audio production and editing programs are a common way of
                  producing high-quality music at owl cost.
               </li>
               <li>
                  In contrast to general-purpose applications, specialist,
                  custom-made software can only be used in one main component of
                  a general-purpose computer OS .{" "}
               </li>
               <li>
                  A computer is a device, or a group of devices, designed to do
                  something, such as process information or control a particular
                  situation.{" "}
               </li>
               <li>
                  Examples include applications for payroll, accounts, stock
                  control, route planning or a system. The hardware of most
                  computers can be divided into several types of device
               </li>
            </ul>
         </div>
         <div className="units">
            <h1 className="title">Remote controls</h1>
            <p>
               A remote control is a small, handheld device that can be used to
               operate equipment such as a TV or stereo. It has a number of
               buttons. When a button is pressed, the remote control sends an
               infrared signal to the equipment. Each signal contains a code;
               there are enough different codes to allow all the buttons to have
               their own code so that the equipment knows what to do. Remote
               controls are used to control home entertainment systems,
               satellite boxes, lighting and shutters, for example. Their main
               advantage is convenience; for example, you do not need to stand
               up to change the TV channel. A disadvantage is that the signal
               can interfere with other equipment and can be blocked by objects
               between the remote control and the equipment it controls.
            </p>
         </div>
         <div className="units">
            <h1 className="title">Touch screens</h1>
            <p>
               A touch screen can be found on personal computers, laptops,
               tablets and smartphones. It is a display screen that is both an
               input and an output device. A touch screen can determine where on
               the screen the user has touched and sends that information to the
               processor. You may have noticed that sometimes you can use a
               touch screen with your gloves on and sometimes you can’t. That’s
               because there are two types of touch screens: <br /> • Resistive,
               which means it is sensitive to pressure from your finger or other
               object pressed onto the screen. The point of contact is detected
               because two metallic layers touch at that certain point resulting
               in a change in voltage. <br /> • Capacitive, which means that the
               screen is sensitive to static electricity on an exposed finger.
               This is detected by sensors placed at the four corners of the
               screen allowing it to detect the touch point. Touch screens are
               common in information systems in places like train stations or
               self-service checkouts at a supermarkets.
            </p>
         </div>
         <div className="units">
            <h1 className="title">Key Questions</h1>
            <ol>
               <li>
                  How do different hardware components contribute to a
                  computer’s performance?
               </li>
               <li>What are the advantages of SSDs over HDDs?</li>

               <li>
                  How do input and output devices enhance user interaction with
                  computers?
               </li>
            </ol>
         </div>
         <div className="units">
            <h1 className="title">Tips</h1>
            <ol>
               <li>Learn about the latest computer hardware advancements.</li>
               <li>
                  Compare performance specifications before purchasing a new
                  device.
               </li>

               <li>
                  Regularly update and maintain hardware components for optimal
                  efficiency.
               </li>
            </ol>
         </div>
      </div>
   );
};

export default Unit4;
