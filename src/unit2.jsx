import { useParams } from "react-router-dom";const Unit2 = () => {
   // const { id } = useParams();

   return (
      <div id="unit1">
         <div className="units">
            <h1 class="title">Types and components of computer systems</h1>
            {/* <p>Displaying content for unit ID: {id}</p> */}
            <p id="subtitle">
               When you have finished this module, you will be able to:
            </p>
            <ul>
               <li>
                  define and give examples of hardware and software, and
                  describe the difference between them
               </li>
               <li>
                  identify the main hardware components of a computer system
               </li>
               <li>
                  identify the need for an operating system, and describe
                  various user interfaces associated with operating systems
               </li>
               <li>
                  identify different types of computer ranging from mainframes
                  to PDAs.
               </li>
            </ul>
         </div>
         <div className="units">
            <h1 class="title">Overview</h1>
            <p>
               As you look around the world today, you will see information and
               communication technology (ICT) being used almost everywhere. This
               module will help you to learn and understand more about different
               ICT systems, what these systems can do and how they affect
               society. One of the first electronic computers was invented in
               the 1940s by a team of code breakers working at Bletchley Park in
               the UK. They were trying to decode messages sent by German forces
               during World War I. The machine was called Colossus (Figure 1.1).
               In the years since then, many different types of computers have
               been developed - mainframes, personal computers and laptops. More
               recently smartphones, mobile phones that are also computers, have
               become prevalent (Figure 1.2). Not so obvious are the computers
               embedded in equipment such as automatic washing machines or the
               control systems for greenhouses or factories. You will learn
               about all these applications of ICT in this course. This first
               module focuses on basic computer systems and their components.
               First you will learn about hardware and software, and the
               difference between them. You will look at the main hardware
               components of a computer system, then at some of the different
               operating systems (software) that computers need in order to
               work.
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
                  src={`${process.env.PUBLIC_URL}/smartphone.jpg`}
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
            <h1 className="title">Hardware and software</h1>
            <p>
               Hardware refers to the physical components of a computer system
               that allow it to function and perform various tasks. It includes
               devices such as processors, memory modules, storage drives, and
               peripheral devices. The processor, also known as the CPU, acts as
               the brain of the computer, executing instructions and managing
               data processing. Memory, including RAM and ROM, temporarily or
               permanently stores data needed for operations. Storage devices,
               such as hard drives and solid-state drives, provide space for
               long-term data storage. Other essential hardware components
               include the motherboard, which connects all parts of the system,
               the power supply unit, which delivers electrical power, and the
               graphics processing unit, which enhances visual performance for
               tasks like gaming and video rendering. Hardware components work
               together to support the execution of software and enable users to
               interact with the system effectively. Software refers to the set
               of instructions and programs that tell a computer how to perform
               specific tasks. It is divided into system software and
               application software. System software includes operating systems
               that manage hardware resources and provide a user interface, as
               well as utility programs that help maintain and optimize system
               performance. Application software consists of programs designed
               for end users, such as word processors, web browsers, media
               players, and development tools. Software enables users to perform
               various functions, from basic computing tasks to complex
               programming and multimedia processing. It operates in conjunction
               with hardware, allowing users to interact with digital devices
               and complete specific activities efficiently.
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
         <h1 id="subtitle">SAQ</h1>
         <ol>
            <li>ljf</li>
         </ol>
      </div>
   );
};

export default Unit2;
