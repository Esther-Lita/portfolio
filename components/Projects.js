import Image from "next/image";
import Link from "next/link";

import Wrapper from "./projects-wrappers/Wrapper";
import InfoWrapper from "./projects-wrappers/InfoWrapper";
import weatherapp from "../public/img/weatherapp.png";
import weatherapp1 from "../public/img/weatherapp1.png";
import croissant from "../public/img/croissant-project.png";
import lanzarote from "../public/img/lanzarote-project.png";
import dictionary from "../public/img/dictionary.png";
import portfolioweb from "../public/img/portfolioweb.png";

export default function Projects() {
  return (
    <div id="projects" className="py-32 ">
      <h2 className="mb-5 text-3xl font-bold text-center text-gray-900 font-inter md:text-4xl lg:text-5xl">
        Some of my creations{" "}
      </h2>
      <p className="mb-12 font-light text-center text-gray-500 md:text-lg lg:text-xl font-robotoSlab">
        Including this website
      </p>
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2">
        <Wrapper>
          <Link
            href="https://dashing-crisp-63467d.netlify.app/"
            target="_blank"
          >
            {" "}
            <Image
              src={weatherapp}
              alt="Weather App Project"
              className=" rounded-2xl"
            />
          </Link>
          <InfoWrapper>
            <div className="flex justify-center w-full">
              <div className="font-normal ">
                <p className="text-sm text-center font-inter ">Weather App</p>
                <p className="text-xs text-center font-robotoCondensed">
                  {" "}
                  React.js, CSS, HTML
                </p>
              </div>
            </div>
          </InfoWrapper>
        </Wrapper>
        <Wrapper>
          <Link
            href="https://hilarious-toffee-d88377.netlify.app"
            target="_blank"
          >
            <Image
              src={weatherapp1}
              alt="Weather App Project"
              className=" rounded-2xl"
            />
          </Link>
          <InfoWrapper>
            <div className="flex justify-center w-full">
              <div className="font-normal ">
                <p className="text-sm text-center font-inter">Weather App</p>
                <p className="text-xs text-center font-robotoCondensed">
                  HTML, CSS, Vanilla Javascript
                </p>
              </div>
            </div>
          </InfoWrapper>
        </Wrapper>
        <Wrapper>
          <Link href="https://tubular-pony-f19819.netlify.app/" target="_blank">
            <Image
              src={dictionary}
              alt="Dictionary Web Project"
              className="m-auto rounded-2xl"
            />
          </Link>
          <InfoWrapper>
            <div className="flex justify-center w-full">
              <div className="font-normal ">
                <p className="text-sm text-center font-inter">Dictionary Web</p>
                <p className="text-xs text-center font-robotoCondensed">
                  React.js, CSS, HTML, Tailwindcss
                </p>
              </div>
            </div>
          </InfoWrapper>
        </Wrapper>
        <Wrapper>
          <Link
            href="https://my-online-portfolio-k6tql5cmp-litaesther10.vercel.app/index.html"
            target="_blank"
          >
            <Image
              src={portfolioweb}
              alt="Portfolio Web"
              className=" rounded-2xl"
            />
          </Link>
          <InfoWrapper>
            <div className="flex justify-center w-full">
              <div className="font-normal ">
                <p className="text-sm text-center font-inter">Weather App</p>
                <p className="text-xs text-center font-robotoCondensed">
                  HTML, CSS, Bootstrap, Flexbox{" "}
                </p>
              </div>
            </div>
          </InfoWrapper>
        </Wrapper>
        <Wrapper>
          <Link
            href="https://sprightly-unicorn-72fa74.netlify.app"
            target="_blank"
          >
            <Image
              src={croissant}
              alt="Croissant Landing Page"
              className=" rounded-2xl"
            />
          </Link>
          <InfoWrapper>
            <div className="flex justify-center w-full">
              <div className="font-normal ">
                <p className="text-sm text-center font-inter">Croissant Web</p>
                <p className="text-xs text-center font-robotoCondensed">
                  HTML, CSS, Bootstrap, Flexbox
                </p>
              </div>
            </div>
          </InfoWrapper>
        </Wrapper>
        <Wrapper>
          <Link
            href="https://www.shecodes.io/workshops/shecodes-basics-948b080f-f680-4a22-b8bd-8d57ae6ee387/projects/722629"
            target="_blank"
          >
            {" "}
            <Image
              src={lanzarote}
              alt="About Lanzarote Landing page"
              className=" rounded-2xl"
            />
          </Link>
          <InfoWrapper>
            <div className="flex justify-center w-full">
              <div className="font-normal ">
                <p className="text-sm text-center font-inter">Lanzarote Web</p>
                <p className="text-xs text-center font-robotoCondensed">
                  HTML, CSS
                </p>
              </div>
            </div>
          </InfoWrapper>
        </Wrapper>
      </div>
    </div>
  );
}
