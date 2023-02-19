import Image from "next/image";
export interface IProject {
  item: any;
}

const Project: React.FC<IProject> = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
      <div className="mb-8">
        <Image className="rounded-2xl" src={item.image} alt="" />
      </div>
      <p className="capitalize text-accent text-sm mb-3">{item.category}</p>
      <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
      <p className="text-base max-w-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit veniam obcaecati ipsam.</p>
    </div>
  );
};
export default Project;