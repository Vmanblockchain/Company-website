import { team } from '@/constants/data';
import Image from 'next/image';

const Team = () => {
  return (
    <div className="bg-white w-full py-16 sm:py-36 px-5 sm:px-0">
      <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="w-full sm:w-1/2 flex flex-col space-y-4">
          <h1 className="text-4xl sm:text-6xl">{team.title}</h1>
          <p className="text-sm sm:text-base">{team.description}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-8 sm:gap-y-24 mt-12">
          {team.members.map((member) => (
            <div
              key={member.id}
              className="flex flex-col justify-center items-center sm:items-start space-y-4"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={144}
                height={144}
                className="bg-gray-200 rounded-full"
              />
              <div className="flex flex-col">
                <h1 className="text-xl">{member.name}</h1>
                <span className="text-sm">{member.designation}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
