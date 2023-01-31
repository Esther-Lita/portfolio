import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const myProjects = [
    {
      title: "Weather App Dark",
      image: "/img/weatherapp.png",
      alt: "Black Theme Weather App Project",
      description: "React.JS, CSS, HTML",
      web: "https://dashing-crisp-63467d.netlify.app/",
    },
    {
      title: "Weather App In Colors",
      image: "/img/weatherapp1.png",
      alt: "Gradient Colors Weather App Project",
      description: "HTML, CSS, Vanilla Javascript",
      web: "https://hilarious-toffee-d88377.netlify.app",
    },
    {
      title: "Dictionary Web",
      image: "/img/dictionary.png",
      alt: "Dictionary Web Project",
      description: "React.js, CSS, HTML, Tailwindcss",
      web: "https://tubular-pony-f19819.netlify.app/",
    },
    {
      title: "Porfolio",
      image: "/img/portfolioweb.png",
      alt: "Online Porfolio Project",
      description: "HTML, CSS, Bootstrap, Flexbox",
      web: "https://my-online-portfolio-k6tql5cmp-litaesther10.vercel.app/index.html",
    },
    {
      title: "Croissant Web",
      image: "/img/croissant-project.png",
      alt: "Web About Croissant Project",
      description: "HTML, CSS, Bootstrap, FlexboxL",
      web: "https://sprightly-unicorn-72fa74.netlify.app",
    },
    {
      title: "Lanzarote Web",
      image: "/img/lanzarote-project.png",
      alt: "Landing Page Web Project About Lanzarote",
      description: "HTML, CSS",
      web: "https://www.shecodes.io/workshops/shecodes-basics-948b080f-f680-4a22-b8bd-8d57ae6ee387/projects/722629",
    },
  ];

  return (
    <div id="projects" className="py-32 ">
      <h2 className="mb-5 text-3xl font-bold text-center text-gray-900 font-inter md:text-4xl lg:text-5xl">
        Some of my creations{" "}
      </h2>
      <p className="mb-12 font-light text-center text-gray-500 md:text-lg lg:text-xl font-robotoSlab">
        Including this website
      </p>
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2">
        {myProjects.map((project) => {
          return (
            <Wrapper key={project.title}>
              <Link href={project.web} target="_blank">
                {" "}
                <Image
                  src={project.image}
                  alt={project.alt}
                  className=" rounded-2xl"
                  width={1000}
                  height={1000}
                />
              </Link>
              <InfoWrapper>
                <div className="flex justify-center w-full">
                  <div className="font-normal ">
                    <p className="text-sm text-center font-inter ">
                      {project.title}
                    </p>
                    <p className="text-xs text-center font-robotoCondensed">
                      {" "}
                      {project.description}
                    </p>
                  </div>
                </div>
              </InfoWrapper>
            </Wrapper>
          );
        })}
      </div>
    </div>
  );
}

function Wrapper(props) {
  return (
    <div className="relative max-w-lg p-4 mx-5 my-5 bg-white border-transparent shadow-md rounded-2xl lg:my-12 group hover:shadow-xl hover:shadow-gray-400 hover:border-gray-300 hover:border-b hover:cursor-pointer hover:-translate-y-2">
      {props.children}
    </div>
  );
}

function InfoWrapper(props) {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white transition-all duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-80 rounded-b-2xl">
      {props.children}
    </div>
  );
}
