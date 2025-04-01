import { useParams } from "react-router-dom";const Unit6 = () => {
   // const { id } = useParams();

   return (
      <div id="unit1">
         <div className="units">
            <h1 class="title">Unit 5: The effects of using IT</h1>
            {/* <p>Displaying content for unit ID: {id}</p> */}
            <p id="subtitle">
               When you have finished this module, you will be able to:
            </p>
            <ul>
               <li>
                  discuss the positive and negative effects of using
                  microprocessor-controlled devices for monitoring and
                  controlling devices in the home
               </li>
               <li>
                  understand the impact of microprocessor-controlled devices on
                  lifestyle, leisure, physical fitness and social interaction
               </li>
               <li>discuss the security of data</li>
               <li>
                  discuss the positive and negative effects of smart devices in
                  monitoring and controlling transport including security of
                  data, autonomous vehicles, transport safety
               </li>
               <li>
                  discuss health issues including causes of and strategies for
                  preventing such issues as repetitive strain injury (RSI), back
                  problems, eye problems and headache
               </li>
            </ul>
         </div>
         <div className="units">
            <h1 class="title">My computer made me ill</h1>
            <p>
               RSI is repetitive strain injury. Repetitive strain injury is part
               of a group of 100 injury types known as musculoskeletal
               disorders. Many employers take it very seriously because
               musculoskeletal disorders make up approximately 30 percent of all
               injuries in the workplace that result in loss of workdays through
               employees’ absence. Approximately 60 percent of office workers
               using a computer all day suffer from wrist pain while at the
               computer and around 50 percent of computer workers say that they
               feel their keyboards are too high. Another part of the problem
               could be because employees say they ignore the recommendations to
               take short, regular breaks from their computers, or that their
               employer won’t let them. This is a wide-spread health hazard
               among computer workers and the most severe injuries mean that
               people may have to be away from work for months, or possibly have
               a permanent disability
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
                  src={`${process.env.PUBLIC_URL}/ryzen.jpg`}
                  alt="Smartphone"
               />
               <p id="desc">
                  Figure 5.1 Photo by Olivier Collet made by Iphone. One of best
                  and high perfomance microprocessors. The biggest competitor
                  for Intel processors, differs my power in video games.
               </p>
            </div>
         </div>
         <div className="units">
            <h1 className="title">5.1 Microprocessorcontrolled devices</h1>
            <h2 className="title">
               Microprocessor-controlled devices in the home
            </h2>
            <p>
               Microprocessors are the small programmable processors found
               inside computers. They accept digital data as input and process
               the instructions stored in memory to produce the output required.
               They need input and output devices to be connected to them to
               make them useful as computer systems. The use of microprocessors
               in household devices has grown to the extent that they can be
               found in most households all over the world. Processors have been
               embedded in household devices for years to monitor and control
               them. This has had enormous impacts on lifestyle such as not
               having to do the washing up or having to spend all day washing
               clothes or standing over a manual washing machine. Increasingly,
               devices are becoming interconnected using the internet.
               Human-operated digital devices have been connected to form
               networks for years (that’s what the internet actually is) but now
               the aim is to allow everything in the world to make connections
               and communicate without direct human involvement. These devices
               are called smart devices. The internet of things (IOT) is the
               term that has been devised to describe this connection of all the
               objects in the world. It is a system of interrelated computing
               devices, mechanical and digital machines, objects, animals or
               people that provide the ability to transfer data over a network
               without requiring human-to-human or human-to-computer
               interaction.
            </p>
         </div>
         <div className="units">
            <h1 className="title">
               The positive and negative effects of smart devices{" "}
            </h1>
            <h2 className="title">In the home</h2>
            <p>
               Here are examples of the positive and negative effects of smart
               devices used in the home
            </p>
            <h3 className="title">Positive effects</h3>
            <ul>
               <li>Saving time and money:</li>
               <li>
                  Some smart fridges can automatically update a user’s
                  electronic shopping list when things such as milk or eggs need
                  to be restocked.
               </li>
               <li>
                  Lost items such as keys that can inform a smartphone where
                  they are
               </li>
               <li>
                  Smart utility meters can monitor usage and send details to a
                  smartphone. Users can adjust the thermostat even when on
                  holiday.
               </li>
               <li>Improved home security:</li>
               <li>
                  Home CCTV systems send data to a smartphone even when the
                  homeowner is away so that they can monitor their home and its
                  surroundings.
               </li>
               <li>Improved care and protection:</li>
               <li>
                  Smart baby monitors can monitor breathing movements,
                  temperature, body position (on the back or on the stomach),
                  fall detection and report to a smartphone.
               </li>
               <li>
                  Monitors can care for the elderly. Sensors monitor light,
                  temperature and movement from room to room so that if the
                  elderly person falls and can’t get up, the carer can be
                  remotely informed
               </li>
            </ul>
            <h3 className="title">Negative effects</h3>
            <ul>
               <li>Smart devices are expensive</li>
               <li>They depend on the internet which may fail.</li>
               <li>Security – they can be hacked.</li>
            </ul>
         </div>

         <div className="units">
            <h1 className="title">Transport</h1>
            <p>
               Microprocessor-controlled systems are used in many aspects of
               transport.
            </p>
            <h2 className="title">Vehicle safety</h2>
            <p>
               Microprocessor-controlled systems are used in all modern motor
               vehicles. The most common use is in the electronic control unit
               (ECU) for their engine management systems. Problems are diagnosed
               and fine tuning is done by computer. Gone are the days when a
               mechanic ‘tinkered’ with the engine to set the timing or ensured
               there was a correct mixture of petrol and air. Using an ECU for
               engine management leads to more efficient fuel consumption and
               less pollution. The ECU has other, safety related functions such
               as: <br /> • Anti-locking braking systems and electronic
               stability control (ESC) to automatically correct driver errors to
               maintain stability, prevent skidding and so reduce accidents.{" "}
               <br />• Using a video camera mounted near the car mirror,
               adaptive cruise control (ACC) maintains a correct distance from
               the car in front and automatically applies the brakes if it slows
               down. Many cars now have collision avoidance systems which will
               warn of any objects in front of the car, including pedestrians
               and cyclists, and will apply the brakes, if necessary. Control
               systems in vehicles improve safety but may malfunction. They are
               complicated devices and may need technological experts to fix.
            </p>
            <h2 className="title">Traffic systems</h2>
            <p>
               Sensors, control systems and computers are used in intelligent
               transport systems, one of the features of smart cities.
               Intelligent transport systems use sensors to collect data from
               sensors such as cameras to monitor the amount of traffic, travel
               speed and traffic jams in various locations. After the data has
               been analysed, optimum traffic flow can be maintained by: <br />•
               Control of traffic light systems. <br />• Informing travellers
               about travel times, travel speeds, accidents, delays, diversions
               through variable message signs, radio announcements, the internet
               and automated SMS calls to smartphones. <br />• Inform users of
               public transport when the buses will be arriving and the number
               of seats on each one. An intelligent transport system improves
               traffic efficiency by minimising traffic problems. It reduces
               travel time of commuters as well as enhances their safety,
               comfort and mental health. An obvious disadvantage is that the
               systems are expensive to implement and may malfunction or break
               down, leading to traffic chaos. Also, the system relies on
               surveillance of vehicles and pedestrians and so impinges on their
               human rights of privacy and security
            </p>
            <h2 className="title">Autonomous vehicles</h2>
            <p>
               Autonomous, or self-driving, vehicles are capable of sensing the
               environment and operating without human involvement. A human
               passenger is not required to take control of the vehicle at any
               time, nor is a human passenger required to be present in the
               vehicle at all. An autonomous car can go anywhere a traditional
               car can go and do everything that an experienced human driver
               does. Autonomous vehicles eliminate human driving error as they
               observe their surroundings and respond to situations with maximum
               efficiency, 24 hours a day. There are, however, concerns about
               safety decisions that have to be made. What happens when the car
               needs to make a decision that could involve taking a human life,
               such as: <br />• If several people were suddenly on the road.
               Should the car swerve and possibly kill one pedestrian on the
               pavement. Should it save several people but kill one? <br />• If
               something else were in the road, should the car swerve and kill a
               single pedestrian to save the life of the driver? <br />• If
               something else were in the road, should the car swerve and kill
               several pedestrians to save the life of the driver? <br />•
               Should it make different decisions if children are involved?{" "}
               <br />• Are young people more worth saving than old people? All
               of these moral and ethical decisions must be programmed into the
               vehicles, and rules and laws must be enacted to define correct
               procedures. What if different countries had different rules and
               you take your driverless car abroad and have a fatal accident?
               Who will be legally responsible? The owner? The manufacturer? The
               programmers?
            </p>
            <h2>Security of data</h2>
            <p>
               As with all computerised systems there are concerns about
               security. Data on all user’s journeys, whether using their own
               vehicle, using public transport or as a pedestrian, could be
               stored and used for other purposes than helping to control
               traffic flow. Some people argue that this data could be misused
               by the state and lead to far greater surveillance and control. It
               could also be stolen by hackers and sold to organisations who
               could benefit from it – for example, to target advertisements at
               people who use particular routes or travel at certain times. The
               control systems used for intelligent transport and in the
               vehicles themselves are vulnerable to hackers who could take over
               traffic light systems and vehicles. Computer experts have shown
               how wirelessly controlled traffic lights can be manipulated using
               a laptop so that they had all green lights on their way to work.
               They have also shown how easy it is to take over the steering,
               lights and wipers of internet connected cars
            </p>
         </div>

         <div className="units">
            <h1 className="title">Key Questions</h1>
            <ol>
               <li>Explain what is meant by a smart device.</li>
               <li>
                  Describe one benefit of the use of smart devices in each of
                  the following areas:
                  <br />a Safety in the home.
                  <br />b Physical fitness.
               </li>
               <li>
                  Discuss the expected benefits and drawbacks of the use of
                  autonomous or self-driving vehicles.
               </li>
            </ol>
         </div>
         <div className="units">
            <h1 className="title">Tips</h1>
            <ol>
               <li>Adopt a good posture.</li>
               <li>Use an ergonomically designed keyboard</li>

               <li>Take regular breaks.</li>
               <li>
                  Use the mouse as little as possible, for example, by using
                  keyboard shortcuts. Alternatively, using a wrist support or
                  ergonomic mouse can help.
               </li>
            </ol>
         </div>
      </div>
   );
};

export default Unit6;
