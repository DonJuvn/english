import { useParams } from "react-router-dom";
const Unit8 = () => {
   // const { id } = useParams();

   return (
      <div id="unit1">
         <div className="units">
            <h1 class="title">Unit 7: The systems life cycle</h1>
            {/* <p>Displaying content for unit ID: {id}</p> */}
            <p id="subtitle">
               When you have finished this module, you will be able to:
            </p>
            <ul>
               <li>state the stages of the systems life cycle</li>
               <li>explain how a current system is analysed and recorded</li>
               <li>create a system specification</li>
               <li>create designs for a new system</li>
               <li>find out about the different ways that data can be inp</li>
               <li>explain how new systems can be implemented</li>
               <li>explain the uses of expert systems</li>
               <li>
                  describe what needs to be included in technical documentation
                  and in user documentation
               </li>
               <li>explain how new systems should be evaluated</li>
            </ul>
         </div>
         <div className="units">
            <h1 class="title">
               THE WORST AND MOST EXPENSIVE CONTRACTING FIASCO IN HISTORY
            </h1>
            <p>
               ‘If you fail to plan, you are planning to fail’ – Benjamin
               Franklin All projects to develop new or improve existing computer
               systems start off with good intentions. Those in favour of the
               new systems usually proclaim:
            </p>
            <ul>
               <li>
                  It will help everyone to get their jobs done better and more
                  efficiently.
               </li>
               <li>It will save money. </li>
               <li>Everyone will find it easy to use. </li>
               <li>People will love to work in this new high-tech way.</li>
            </ul>
            <p>
               But are these statements true? Have the users been asked for
               their opinions? Without thorough research, meticulous planning
               and efficient management, projects can easily end in failure. In
               Britain in 2002, the National Program for IT (NPfIT) in the
               National Health Service (NHS) was the largest public-sector IT
               program ever attempted in the UK with an original budget of £6
               billion. It was an ambitious project to bring the NHS’s use of
               information technology into the 21st century (see Figure 7.1),
               through the introduction of integrated electronic patient records
               systems, online ‘choose and book’ services, computerised referral
               and prescription systems, digital scanning and integrated IT
               systems across hospitals and community care. The project was
               abandoned in 2011 after numerous failures to meet targets and
               expectations. A report by the Public Accounts Committee (PAC)
               concluded the attempt to upgrade NHS computer systems in England
               ended up becoming one of the ‘worst and most expensive
               contracting fiascos’ in public sector history with a final cost
               of £12.7 billion. But what went wrong? The failure was due to a
               combination of errors. It was a ‘top-down’ project – politicians
               and managers raced headlong into policymaking and implementation
               processes with little time to consult with the people who would
               be using the system: the nurses, doctors and health
               professionals. It should have focused on meeting the specific
               needs of the users on the ground, a ‘bottom-up’ approach. The
               design was flawed and did not take account of local needs and how
               it would impact on user satisfaction. There was a lack of project
               management without leadership in planning and consulting the
               users and providing training.
            </p>

            <div className="image" id="smartphone-img">
               <img
                  id="smartphone"
                  src={`${process.env.PUBLIC_URL}/medical.jpg`}
                  alt="Smartphone"
               />
               <p id="desc">Figure 6.1 Photo by Spensor Davies. Canon EOS R5</p>
            </div>
         </div>
         <div className="units">
            <h1 className="title">7.1 The systems life cycle</h1>
            {/* <h2 className="title">Communication media</h2> */}
            <p>
               The systems life cycle is a series of stages that are worked
               through during the development of a new IT system or the
               improvement of an existing one. These stages are:
            </p>
            <ul>
               <li>analysis of the current system</li>
               <li>design</li>
               <li>testing</li>
               <li>system implementation</li>
               <li>documentation</li>
               <li>evaluation.</li>
            </ul>
            <h1 className="title">7.2 Analysis of the current system</h1>
            <p>
               Analysis involves investigating how the existing system works and
               what is required for the new system.When an organisation, or a
               client thinks that one of its systems has problems or it needs
               improvement, a systems analyst studies the system to find out
               where the problems are, and how the system can be improved.
            </p>
            <h2 className="title">Methods of researching an existing system</h2>
            <p>
               The information can be collected in a number of ways: <br />
               <strong>Observation</strong>: The systems analyst can learn from
               watching what is going on in an organisation and how tasks are
               completed. It could involve sitting with users and watching how
               they carry out their tasks or sitting separately and watching
               many users at the same time. The systems analyst will try to
               understand how things are done and the relationships between
               different people’s work. The advantage of observation is that it
               gathers real-life details and leads to an in-depth understanding
               of how systems work. The disadvantage is that people tend not to
               work in a normal way if they know they are being watched (Figure
               7.2) as they may become stressed or work more or less efficiently
               than normal <br />
               <strong>Interviews</strong>: The systems analyst will want to
               find out how things work and what doesn’t work properly in an
               organisation. The obvious thing to do is to ask the people who
               operate the system at the moment. The advantage of using
               interviews is that it allows the systems analyst to talk to the
               people who are actually using the system rather than just
               receiving information from their managers. They can find out
               practical issues with the existing system and ideas of how it
               could be improved. Questions do not have to be fixed in advance,
               but it is helpful if the analyst has a logical, enquiring mind
               and knows how to get information from people. Another advantage
               is that follow-up questions can be asked about areas that were
               not identified in advance. A disadvantage is that workers may
               become stressed and feel that they are being interrogated. They
               may not give honest answers if they think they will be relayed to
               their managers. Also, it is a time consuming method if each
               person is interviewed individually. <br />
               <strong>Questionnaires</strong>: With this method, many people’s
               views can be obtained in a short period of time. They are far
               less time consuming than conducting individual interviews and can
               be completed online for convenience and it also allows for the
               answers to be automatically recorded and analysed by the
               software. Each person also has the chance to consider their
               answers before filling in the questionnaire, and the analyst and
               worker do not have to be available at the same time, as they
               would with an interview. Questionnaires can also be anonymous and
               so get more truthful answers. The disadvantages are that some of
               the people may not take it seriously and the questions can be
               phrased to persuade the person being asked to give a particular
               answer. The users’ answers have to be analysed and so the
               questions may be simple yes/no or multiple choice ones and these
               may not fully reflect the views of the people answering them. It
               is very difficult to analyse free text answers where a person can
               give their honest opinion. <br />
               <strong>Examination </strong> of existing documents: Documents
               reveal a lot about an organisation. Most processes and procedures
               require documents for data input and output. The analyst will be
               looking for answers to questions such as: How is the data
               collected? What data is collected? What happens to this data
               after it has been collected? A disadvantage of document
               examination is that documentation may be difficult to understand
               for someone who is outside the organisation, so it may be
               necessary to interview someone to explain it. Documents also do
               not always reveal all of the processes and procedures about a
               system and this method is never used on its own
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
                  While investigating an existing system, observation,
                  interviews and questionnaires can be used. Compare and
                  contrast these three methods.
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
                  Here are two scenarios: a A shoe shop wants to install a
                  computerised stock control system. Until now, the owner has
                  done all the ordering of new shoes at the start of each month.
                  b A shop selling musical instruments, servicing and mending
                  them, has used a computerised system for some time for selling
                  items and services and for giving receipts to customers. There
                  are four people who work in the shop. Two concentrate on
                  selling the instruments and the other two service and mend the
                  musical instruments. The stock is ordered by the owner and he
                  is in charge of all the record keeping and paying the wages.
                  The owner now needs a computerised stock control system and a
                  method of ordering so that he doesn’t have to spend so much
                  time dealing with the suppliers. Take part in a class
                  discussion about which would be the best method for the
                  analyst to collect information in each of the two situations
                  given. Also discuss why the methods might differ.
               </li>
               <li>Print out your form(s) and pin them to the wall.</li>

               <li>
                  Look at all of the other forms, then compare them with yours
                  looking for ideas for possible improvements to the layouts,
                  the wording, font size and style, any other ideas that you
                  think may be improvements you would consider another time.
               </li>
            </ol>
         </div>
      </div>
   );
};

export default Unit8;
