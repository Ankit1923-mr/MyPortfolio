import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const skills = [
  { name: "Python", imageUrl: "/assets/images/python.jpeg" },
  { name: "C++", imageUrl: "/assets/images/cpp.png" },
  { name: "Java", imageUrl: "/assets/images/java.jpeg" },
  { name: "MySQL", imageUrl: "/assets/images/mysql.png" },
  { name: "Machine Learning", imageUrl: "/assets/images/machinelearning.jpeg" },
  { name: "Deep Learning", imageUrl: "/assets/images/deeplearning.jpeg" },
  { name: "Langchain", imageUrl: "/assets/images/Langchain.jpeg" },
  { name: "Natural Language Processing (NLP)", imageUrl: "/assets/images/NLTK.png" },
  { name: "Tensorflow", imageUrl: "/assets/images/Tensorflow.jpeg" },
  { name: "Shell Programming", imageUrl: "/assets/images/shell.jpeg" },
  { name: "HTML", imageUrl: "/assets/images/HTML.jpg" },
  {name:"CSS" , imageUrl: "/assets/images/CSS.png"},
  { name: "React.js", imageUrl: "/assets/images/React.jpeg" },
  { name: "Node.js", imageUrl: "/assets/images/node.png" },
];

const projects = [
  {
    title: "AI-Based Investment Allocation System",
    description: "Developed an AI solution for senior citizens, optimizing investment allocation using an AI Agent.",
  },
  {
    title: "Spam Detection System",
    description: "Built a spam detection model using NLP and deep learning techniques.",
  },
  {
    title: "UCF Crime Analysis",
    description: "Analyzed crime data using YOLO for object detection and ML models for predictive insights.",
  },
  {
    title: "Energy-Aware Video Processing Framework",
    description: "Designed an OpenMP-based parallel framework for energy-efficient video processing.",
  },
];

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          Ankit
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Software Engineer based in India, specializing in AI, Machine Learning, and Full-Stack Development. I have hands-on experience with Python, ML/DL frameworks, and frontend/backend development using React and Node.js.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience & Projects</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I've worked on AI and full-stack projects, implementing solutions using Python, ML/DL, React.js, and Node.js.
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {projects.map((project, index) => (
              <VerticalTimelineElement
                key={project.title}
                date="Project"
                iconStyle={{ background: "#ff9f00" }}
                icon={<div className='flex justify-center items-center w-full h-full'>📌</div>}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: "#ff9f00",
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {project.title}
                  </h3>
                  <p className='text-black-500 font-medium text-base'>
                    {project.description}
                  </p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;