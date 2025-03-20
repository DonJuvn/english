import { useParams } from "react-router-dom";
const Unit2 = () => {
   // const { id } = useParams();

   return (
      <div>
         <h1 id="title">Types and components of computer systems</h1>
         {/* <p>Displaying content for unit ID: {id}</p> */}
         <p id="subtitle">
            When you have finished this module, you will be able to:
         </p>
         <ul>
            <li>
               define and give examples of hardware and software, and describe
               the difference between them
            </li>
            <li>identify the main hardware components of a computer system</li>
            <li>
               identify the need for an operating system, and describe various
               user interfaces associated with operating systems
            </li>
            <li>
               identify different types of computer ranging from mainframes to
               PDAs.
            </li>
         </ul>
         <h1 id="subtitle">Overview</h1>
         <p>
            As you look around the world today, you will see information and
            communication technology (ICT) being used almost everywhere. This
            module will help you to learn and understand more about different
            ICT systems, what these systems can do and how they affect society.
            One of the first electronic computers was invented in the 1940s by a
            team of code breakers working at Bletchley Park in the UK. They were
            trying to decode messages sent by German forces during World War I.
            The machine was called Colossus (Figure 1.1). In the years since
            then, many different types of computers have been developed -
            mainframes, personal computers and laptops. More recently
            smartphones, mobile phones that are also computers, have become
            prevalent (Figure 1.2). Not so obvious are the computers embedded in
            equipment such as automatic washing machines or the control systems
            for greenhouses or factories. You will learn about all these
            applications of ICT in this course. This first module focuses on
            basic computer systems and their components. First you will learn
            about hardware and software, and the difference between them. You
            will look at the main hardware components of a computer system, then
            at some of the different operating systems (software) that computers
            need in order to work.
         </p>
         <div className="image">
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
         </div>
      </div>
   );
};

export default Unit2;
