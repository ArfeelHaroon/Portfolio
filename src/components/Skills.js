import { BsTools } from "react-icons/bs";
import {   FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaLaravel,
  FaDocker,  
 } from 'react-icons/fa';

 import { SiTailwindcss, SiJson } from "react-icons/si";
function Skills() {
   return (
      <div id="skills" className="skills px-md-5 px-xs-0 mt-3 pt-3 tech-icons">
         <h3 className='p-3 m-auto text-center text-capitalize'>
            <BsTools />
            <span className="mx-3 text-center"> SKILLS </span>
         </h3>
         <div className="SkillsContainer mx-auto mt-5">
            <div className="using">
               <h4 className="px-3 py-2 text-center m-auto m-md-0"> Using now</h4>
               <div className="container text-center mt-4">
                  <div className="row align-items-center">
                     <div className="col-6 col-md-4 col-xl-3">
                        <FaHtml5 size={60} color="#e44d26" />
                        <p>HTML 5</p>
                     </div>
                     <div className="col-6 col-md-4 col-xl-3">
                        <FaCss3Alt size={60} color="#1572B6" />
                        <p>CSS 3</p>
                     </div>
                     <div className="col-6 col-md-4 col-xl-3">
                        <FaBootstrap size={60} color="#7952B3" />
                        <p>BOOTSTRAP</p>
                     </div>

                     <div className="col-6 col-md-4 col-xl-3">
                        <FaJs size={60} color="#f7df1e" />
                        <p>JAVASCRIPT</p>
                     </div>

                     <div  className="col-6 col-md-4 col-xl-3">
                        <FaReact title="React" color="#61DAFB" size={60} />
                        <p>REACT</p> 
                     </div>

                     <div  className="col-6 col-md-4 col-xl-3">
                        <FaPhp title="PHP" color="#8892BE" size={60} />
                        <p>PHP </p>
                     </div>
                     
                  <div  className="col-6 col-md-4 col-xl-3">
                        <FaGitAlt title="Git" color="#F1502F" size={60} />
                        <p>GIT </p>
                     </div>

                     <div  className="col-6 col-md-4 col-xl-3">
                        <FaGithub title="GitHub" color="#000" size={60} />
                        <p>GITHUB</p>
                     </div>

                     <div  className="col-6 col-md-4 col-xl-3">
                        <FaLaravel title="Laravel" color="#FF2D20" size={60} />
                        <p>LARAVEL </p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="learning">
               <h4 className="px-3 py-2 text-center m-auto m-md-0"> Learning</h4>
               <div className="container text-center mt-5">
                  <div className="row align-items-center">
                     <div className="col-6 col-md-4 col-xl-3">
                       <FaDocker size={60} color="#61DAFB"/>
                       <p>Docker</p>
                     </div>

                     <div className="col-6 col-md-4 col-xl-3">
                        <SiJson size={60} />
                       <p>REST API / JSON</p>
                     </div>

                     <div className="col-6 col-md-4 col-xl-3">
                        <SiTailwindcss size={60} color="#61DAFB"/>
                       <p>Tailwind CSS</p>
                     </div>
                  </div>
               </div>

            </div>

         </div>
      </div>
   );
}
export default Skills;
