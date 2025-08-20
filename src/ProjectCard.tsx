interface ProjectCardProps {
  image: string;
  url: string;
  summary: string;
  title: string;
}

function ProjectCard(props: ProjectCardProps) {
  let image = props.image;
  let url = props.url;
  let summary = props.summary;
  let title = props.title;
  return (
    <div className="w-100 h-40 bg-white rounded-lg my-12 mx-auto flex">
      <a
        style={{ backgroundImage: `url('${image}')` }}
        className="w-30 h-30 rounded-lg m-5 border-1 bg-no-repeat bg-center bg-cover transition-transform duration-200 hover:-translate-y-1"
        href={url}
      ></a>
      <div className="flex-col w-50 m-5">
        <h1 className="font-bold">{title}:</h1>
        <hr></hr>
        <h1 className="">{summary}</h1>
      </div>
    </div>
  );
}

export default ProjectCard;
