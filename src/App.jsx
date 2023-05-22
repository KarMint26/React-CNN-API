import React from "react";
import useFetch from "./hooks/useFetch";
import { Link } from "react-router-dom";
import "./dist/styles.css";
import Footer from "./components/Footer";

const App = () => {
  const { loading, response } = useFetch();
  return (
    <div>
      {loading && (
        <div className="flex justify-center items-center min-h-screen">
          <div className="spinner absolute text-center bg-[#fff] w-screen h-screen z-[9999]">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      <div className="wrapper flex flex-col justify-center items-center p-12">
        {!loading && (
          <>
            <div className="title-head mb-10 flex flex-col justify-center items-center gap-2">
              <h1 className="text-2xl sm:text-5xl text-slate-700 font-bold font-serif">
                CNN Indonesia News
              </h1>
              <p className="text-slate-700 sm:text-base text-[.9rem]">
                Update Berita dari CNN News
              </p>
            </div>
          </>
        )}
        <div className="content flex flex-row px-2 flex-wrap mx-2 gap-4 justify-center items-center font-serif">
          {response.map((data) => {
            return (
              <>
                <Link
                  target="_blank"
                  to={data.link}
                  className="container px-5 py-3 pb-5 cursor-pointer hover:-translate-y-2 transition duration-200 shadow-lg w-[350px] h-[450px] rounded-lg"
                >
                  <div className="image">
                    <img
                      src={data.image.small}
                      alt="image-asset"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="title my-4">
                    <h1 className="font-bold text-xl">{data.title}</h1>
                  </div>
                  <div className="description">
                    <p>{data.contentSnippet}</p>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
      {!loading && <Footer />}
    </div>
  );
};

export default App;
