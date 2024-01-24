import ProjectCard from "../components/ProjectCard";
import { Projects } from "../constants";

const page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/mountains.jpg)" }}
      className="w-screen h-screen flex items-center justify-center bg-center bg-cover "
    >
      <div className="grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]">
        {Projects.map((data, index) => (
          <ProjectCard
            key={index}
            image={data.src}
            title={data.title}
            text={data.title}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
