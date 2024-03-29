import { Element } from 'react-scroll';
import bg6 from '../img/bg6.png'

const Project = () => {
  const projects = [
    {
      id: 1,
      name: "WorkoutBuddy",
      description: "A workout management application using MongoDB, Express.js, React.js, and Node.js (MERN Stack). Facilitated seamless creation, updating, and deletion of personalized workout plans, enhancing user flexibility and efficiency in achieving fitness objectives.",
      githubLink: "https://github.com/Sakshi-Bhatia13/WorkoutBuddy"
    },
    {
      id: 2,
      name: "WatchFulEye",
      description: "Built and implemented an automated system integrated with CCTV Systems to alarm appropriate authorities upon detecting violent behavior using ML Model in TFLite trained on RWF-2000 Dataset. Developed Flutter app for user Interface to alarm Authorities.",
      githubLink: "https://github.com/Sakshi-Bhatia13/WatchFulEye"
    },
    {
      id: 3,
      name: "QuickChat",
      description: "Developed and implemented React-based login and register pages,and a chat application design,Integrated Firebase v9 for authentication and real-time chat functionality,showing expertise in backend integration and database management.Utilized Sass for responsive design.",
      githubLink: "https://github.com/Sakshi-Bhatia13/ChatApp"
    }
  ];

  return (
    <Element name = 'projects'>
    <div className="w-full" style={{ backgroundImage: `url(${bg6})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h1 className="text-4xl font-bold text-purple-100 border-b-4 border-purple-700 inline-block mt-20">Projects</h1>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {projects.map(({ id, name, description, githubLink }) => (
            <div key={id} className=" text-white shadow-md rounded-lg shadow-purple-300 hover:scale-110 hover:duration-300">
              <div className="p-4">
                <p className="text-2xl text-purple-400 font-semibold mb-2">{name}</p>
                <p className="text-lg mb-2">{description}</p>
                <div className="flex justify-center">
                  <a href={githubLink} target="_blank" rel="noopener noreferrer" className="w-full px-6 py-3 m-4 duration-200 hover:scale-105 bg-purple-950 text-white rounded-md text-center">
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Element>
  );
};

export default Project;
