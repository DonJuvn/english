import { useParams, Link } from "react-router-dom";
const Unit1 = () => {
   //  const { id } = useParams();

   return (
      <div>
         {/* <button id="back">
            {" "}
            <Link to={`/`}>
               <img src={`${process.env.PUBLIC_URL}/back.png`} alt="Back" />
            </Link>
         </button> */}
         <div className="units">
            <h1 className="title">Introduction</h1>
            <p>
               Welcome to the new, full-colour Cambridge IGCSE ICT (Information
               and Communication Technology) Coursebook. This new text has been
               extensively overhauled and revised from the previous edition, for
               two main reasons : <br />• to focus clearly on the University of
               Cambridge International Examinations (CIE) IGCSE examination in
               ICT (syllabus 0417); <br />• to update the content with recent
               developments in ICT and its effects on our lives. <br />
               In making these changes, we have: <br />• created a brand-new
               accompanying CD-ROM loaded with materials to improve student
               success in the examination;
               <br />• ensured that all explanations are accessible to students;{" "}
               <br />• included practical examples of the devices, processes and
               methods being explained; <br />• included brand new short,
               self-assessment questions throughout the text; <br />• revised
               and updated the exercises for homework and class discussion;
               <br /> • refreshed the design, making ful use of colour and
               photographs where possible. <br /> The coursebook is designed to
               help students studying for the CIE IGCSE examination in ICT
               sections 1-8, which is the examined section. On the CD-ROM, we
               have supplied practical coursework projects with exemplar answers
               and our examiner's comments to provide practical help on how to
               tackle the remaining two parts of syllabus, the practically
               assessed exercises. Other material on the CD-ROM provides
               revision of the coursebook material. <br />
               The text follows the syllabus contents as closely as possible,
               varying only where needed to assist with the narrative flow and
               reduce duplication between sections. Each Module begins with a
               list of learning objectives (headed 'When you have finished this
               module, you will be able to:') and ends with a summary of the
               specific points that have been covered. The learning outcomes are
               intended to provide a skeleton upon which to hang the detail
               which is covered in the text. The summary, by contrast, is
               intended to assist students when they revise, by providing a
               short overview of the contents to let students be confident in
               their grasp of the material. <br /> Throughout each Module,
               specific syllabus codes are shown alongside subheadings to show
               which parts of the syllabus are being addressed in each case, as
               follows. <br /> The text aims to encourage an active learning
               style and includes many self-assessment questions as well as
               varied longer-answer questions and tasks, while maintaining a
               structured approach to the learning process. <br />{" "}
               Self-assessment questions require short answers only, and are
               intended to allow students to check their understanding of the
               material as they move through the coursebook. Answers to these
               questions are provided at the end of the coursebook. The
               self-assessment questions are indicated in the text with an icon
               like this.
            </p>
         </div>
         <div className="units">
            <h1 id="subtitle">SAQ</h1>
            <p>
               Longer-answer questions are of two types. These questions are
               contained within a box labelled 'Questions, as follows.
            </p>
         </div>

         <div className="units">
            <h1 id="subtitle">Questions</h1>
            <p>
               Some questions are related directly to the requirements that
               students will find when they sit their examination. <br /> These
               questions are intended to stretch the students more than the SAQs
               do, and let them demonstrate their understanding of the concepts
               being taught. These questions are related to the text and are
               intended to form a starting point for activity in class or for
               individual work. They are indicated in the text with an i c o n
               like this. <br />
               Other questions are more broadly based and are intended to
               encourage students to find out about a small area of the course,
               and are often suitable for classroom discussion as well as
               independent thinking. We find this type of work to be especially
               effective because it allows students to formulate their own
               answers - there is often no single right answer to the question.
               These questions are indicated with an icon like this. <br />
               Finally, there are Extension questions and tasks. These include
               concepts, examples or thinking that fall beyond the strict
               boundaries of the syllabus. However, addressing these questions
               will deepen students' understanding of and appreciation for the
               concepts being presented. Each of these pieces of work is meant
               as a starting point which may interest students, particularly the
               more able, and encourage them to carry out some independent
               enquiry into a topic. It must be stressed that this work is not
               an integral part of the syllabus requirements and can be omitted
               without prejudicing attainment in the examination. These
               Extension materials are contained within clearly marked boxes,
               headed like this.
            </p>
         </div>
         <div className="units">
            <p>The CD-ROM contains several categories of material.</p>
            <ul>
               <li>Real CIE past exam papers (Papers 1, 2 and 3).</li>
               <li>
                  Our exemplar answers for the CIE past papers, including our
                  mark scheme for Paper 2 (Practical test A). We have also
                  provided comments, indicating common pitfalls or giving some
                  explanation of why certain answers are correct or how the
                  marks are awarded
               </li>
               <li>Revision questions (without answers).</li>
               <li>
                  Revision notes and tests to ensure that students' revision
                  goes smoothly.
               </li>
               <li>
                  A Learning and Revision Guide with useful tips on study skills
                  and exam technique.
               </li>
               <li>A Glossary of Key Terms and their definition.</li>
            </ul>
            <p>
               We hope that this resource is both useful and interesting to the
               reader, and helps students achieve a good grade in the CIE IGCSE
               in ICT.
            </p>
         </div>
      </div>
   );
};

export default Unit1;
