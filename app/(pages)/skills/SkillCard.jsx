import Image from "next/image";



const SkillCard = ({image, name}) => {
  return (
    <div className="flex justify-around items-center  bg-slate-200 p-4 rounded-xl shadow-xl mb-1 lg:mb-16 py-6 md:mb-8 hover:scale-105 ">
      <div className="md:w-24">
       <div className="w-12"> <Image src={image} width="64" height="64" alt="/" /></div>
      </div>
      <div>
        <h3 className=" md:text-2xl">{name}</h3>
      </div>
    </div>
  );
};

export default SkillCard;
