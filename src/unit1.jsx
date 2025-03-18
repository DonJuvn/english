import { useParams, Link } from "react-router-dom";
const Unit1 = () => {
   //  const { id } = useParams();

   return (
      <div>
         <button id="back">
            {" "}
            <Link to={`/`}>
               <img src={`${process.env.PUBLIC_URL}/back.png`} alt="Back" />
            </Link>
         </button>
         <h1 className="title">Introduction</h1>
         <p>
            Welcome to the new, full-colour Cambridge IGCSE ICT (Information and
            Communication Technology) Coursebook. This new text has been
            extensively overhauled and revised from the previous edition, for
            two main reasons : <br />• to focus clearly on the University of
            Cambridge International Examinations (CIE) IGCSE examination in ICT
            (syllabus 0417); <br />• to update the content with recent
            developments in ICT and its effects on our lives. <br />
            In making these changes, we have: <br />• created a brand-new
            accompanying CD-ROM loaded with materials to improve student success
            in the examination;
            <br />
            • ensured that all explanations are accessible to students; <br />•
            included practical examples of the devices, processes and methods
            being explained; <br />• included brand new short, self-assessment
            questions throughout the text; <br />• revised and updated the
            exercises for homework and class discussion;
            <br /> • refreshed the design, making ful use of colour and
            photographs where possible. <br /> The coursebook is designed to
            help students studying for the CIE IGCSE examination in ICT sections
            1-8, which is the examined section. On the CD-ROM, we have supplied
            practical coursework projects with exemplar answers and our
            examiner's comments to provide practical help on how to tackle the
            remaining two parts of syllabus, the practically assessed exercises.
            Other material on the CD-ROM provides revision of the coursebook
            material. <br />
            The text follows the syllabus contents as closely as possible,
            varying only where needed to assist with the narrative flow and
            reduce duplication between sections. Each Module begins with a list
            of learning objectives (headed 'When you have finished this module,
            you will be able to:') and ends with a summary of the specific
            points that have been covered. The learning outcomes
         </p>
      </div>
   );
};

export default Unit1;
