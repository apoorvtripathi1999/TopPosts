import React, { useEffect, useState } from "react";
import Article from "./Article";
import data from "../data/top-headlines.json";
import Toparticles from "./Toparticles";
import mainHeadline from "../data/mainHeadline.json";

export default function Myread() {
  const [cata, setCata] = useState("main");
  function getCata(catagory) {
    setCata(catagory);
  }
  useEffect(() => { }, [cata]);

  return (
    <>
      <div>
        <div className="myread-heading">
          <h1>My Dashboard</h1>
          <div><h6><b>{cata} news</b></h6></div>
        </div>
        <div className="myread-main">
          <div className="myread-sections">
            <div className="border-dark rounded">
              <div
                className="btn-group-vertical"
                role="group"
                aria-label="Vertical button group"
              >
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={() => getCata("main")}
                >
                  Top Headlines
                </button>
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={() => getCata("buisness")}
                >
                  Business
                </button>
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={() => getCata("entertainment")}
                >
                  Entertainment
                </button>
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={() => getCata("general")}
                >
                  General
                </button>
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={() => getCata("health")}
                >
                  Health
                </button>
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={() => getCata("science")}
                >
                  Science
                </button>
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={() => getCata("sports")}
                >
                  Sports
                </button>
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={() => getCata("tech")}
                >
                  Technology
                </button>
              </div>
            </div>
          </div>
          {/* --------------End of navigation------------------------------------------------------*/}
          <div className="myread-sections">
            {mainHeadline.articles.map((e) => {
              console.log(cata);
              return e.source.id == cata ? (
                e.urlToImage ? (
                  <Article imageUrl={e.urlToImage} description={e.title} />
                ) : null
              ) : null;
            })}
          </div>
          {/* --------------End of Main Articles Section-------------------------------------------*/}
          <div className="myread-sections">
            <div className="top-story-heading">
              <h5>
                <b>POPULAR CONTENT</b>
              </h5>
            </div>
            {data.articles.map((e) => {
              return <Toparticles toplinks={e.url} desc={e.title} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}