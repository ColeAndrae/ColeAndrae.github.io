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
    <div className="sm:w-100 w-80 sm:h-40 h-30 bg-white rounded-lg mt-12 mx-auto flex">
      <a
        style={{ backgroundImage: `url('${image}')` }}
        className="sm:w-30 sm:h-30 w-20 h-20 rounded-lg m-5 border-1 bg-no-repeat bg-center bg-cover transition-transform duration-200 hover:-translate-y-1"
        href={url}
      ></a>
      <div className="flex-col sm:w-50 w-40 my-5">
        <h1 className="font-bold">{title}:</h1>
        <hr></hr>
        <h1 className="sm:text-base text-xs">{summary}</h1>
      </div>
    </div>
  );
}

export default ProjectCard;
