import { classNames } from "../lib/classNames";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      service: "Web Development",
      description:
        "I design and create websites that look good and run smoothly.",
      color: "shadow-lime-400",
      icon: "/img/icons/web-template.png",
    },
    {
      service: "Web Template",
      description: "Let's work on the design of your next project!",
      color: "shadow-cyan-400",
      icon: "/img/icons/newspaper.png",
    },
    {
      service: "Responsive Web",
      description: "I make sure the content is perfect for all devices.",
      color: "shadow-purple-400",
      icon: "/img/icons/mobile-in-hand.png",
    },
    {
      service: "Online Portfolio",
      description: "Tired of boring portfolios? Let's get to work! ",
      color: "shadow-fuchsia-400",
      icon: "/img/icons/ribbon-folder.png",
    },
    {
      service: "Image Gallery",
      description: "If you love photografy, let me help you show your art.",
      color: "shadow-amber-400",
      icon: "/img/icons/art.png",
    },
    {
      service: "Information App",
      description:
        "Thanks to the APIs we can display real content of any kind!",
      color: "shadow-emerald-400",
      icon: "/img/icons/api-configuration.png",
    },
  ];

  return (
    <div className="my-20 md:my-40">
      <h2 className="mb-5 text-4xl font-bold text-center text-gray-900 md:text-5xl lg:text-7xl font-inter">
        My Services
      </h2>
      <div className="flex flex-col justify-center mt-20 md:grid lg:grid-cols-3 md:grid-rows-2">
        {services.map((service) => {
          return (
            <div
              className={classNames(
                service.color,
                " max-w-xs py-2 px-4 mx-auto md:my-16 text-center border-b border-gray-200 shadow-lg rounded-2xl md:mx-16 my-8  "
              )}
              key={service.service}
            >
              <Image
                src={service.icon}
                width={100}
                height={80}
                className="m-auto "
              />
              <h4 className="mb-5 text-2xl font-bold text-gray-700 font-inter md:text-3xl">
                {service.service}
              </h4>
              <p className="mb-1 text-sm text-gray-400 lg:text-lg font-robotoSlab">
                {" "}
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
