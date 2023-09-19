import chatImg from '../../../public/assets/projects/chat_buddy_app.png';
import goldsImg from '../../../public/assets/projects/golds_gym_app.png'
import ProjectItem from './ProjectItem';


const Projects = () => {
  return (
    <div id='projects' className='w-full pt-8 md:pt-28 lg:snap-start h-screen'>
      <div className='max-w-[1480px] mx-auto px-2 py-16 '>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Chat Buddy App'
            backgroundImg={chatImg}
            projectUrl='/projects/chatBuddy'
            tech='React JS'
          />
          <ProjectItem
            title='Golds Gym App'
            backgroundImg={goldsImg}
            projectUrl='/projects/golds'
            tech='React JS'

          />
          
        </div>
      </div>
    </div>
  );
};

export default Projects;