import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { useResultContext } from "../contexts/ResultContextProvider";
import { default as Loading } from "./Loading";

const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();
  useEffect(() => {
    if (searchTerm) {
      console.log(searchTerm);
      switch (location.pathname) {
        case "/search":
          var body = JSON.stringify({
            text: searchTerm??"Google ",
            safesearch: "off",
            timelimit: "",
            region: "wt-wt",
            max_results: 20,
          });
          getResults(`/websearch`, "Javascript", body);

          break;
        case "/videos":
          var body = JSON.stringify({
            text: searchTerm??"Justin Bieber",
            safesearch: "off",
            timelimit: "",
            duration: "",
            resolution: "",
            region: "wt-wt",
            max_results: 50,
          });

          getResults(`/videosearch`, "Javascript", body);

          break;
        case "/images":
          var body = JSON.stringify({
            text: searchTerm?? "rose",
            safesearch: "off",
            region: "wt-wt",
            color: "",
            size: "",
            type_image: "",
            layout: "",
            max_results: 100,
          });
          getResults(`/imagesearch`, "Javascript", body);

          break;
        case "/news":
          getResults(`/`, "Javascript");

          break;
      }
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;
  console.log("RESULT");
  console.log(results);
  switch (location.pathname) {
    case "/search":
  return (
    <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
      {results?.result?.map(({ href, title }, index) => (
        <div key={index} className="md:w-2/5 w-full">
          <a href={href} target="_blank" rel="noreferrer">
            <p className="text-sm">
              {href && href.length > 30 ? href.substring(0, 30) : href}
            </p>
            <p className="text-lg hover:underline dar:text-blue-300 text-blue-700">
              {title}
            </p>
          </a>
        </div>
      ))}
    </div>
  );

    case "/news":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center">
          {results?.result?.map(({ url, title, image }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={url} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {url.length > 30 ? url.substring(0, 30) : url}
                </p>
              </a>
              <div>
              <p className="text-lg hover:underline dar:text-blue-300 text-blue-700">
                  {title}
                </p>
              </div>
               
              
            </div>
          ))}
        </div>
      );
    case "/images":
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.result?.map(({ image, url, title, index }) => (
            <a
              className="sm:p-3 p-5"
              href={url}
              key={index}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={image}
                alt={title}
                loading="lazy"
                className="max-w-96 max-h-48"

              />
              <p className="w-36 break-words text-sm mt-2 ">{title}</p>
            </a>
          ))}
        </div>
      );

    case "/videos":
      return (
        <div className="flex flex-wrap  ">
          {results?.result?.map(({ content, index, title ,description}) => (
            <div key={index} className="">
              <h2 className="text-blue-500 mb- ml-10 text-lg ">{title}</h2>
              <div className="flex">
              <ReactPlayer url={content} className="max-h-48 m-4 max-w-xs rounded" />
              <h4 className="break-words max-w-lg ">
                {description}
              </h4>

              </div>
            </div>
          ))}
        </div>
      );

    default:
      return "ERROR!";
  }
};

export default Results;
