import React, { useEffect, useState } from "react";
import titik from "./Assets/titik.png";
import bulet from "./Assets/bulet.png";

const App = () => {
  const [latestImageUrl, setLatestImageUrl] = useState("");

  useEffect(() => {
    const fetchLatestImage = () => {
      fetch("https://tubesprakpro.bhadrikais.my.id/graph", {
        method: "POST",
      }).catch((error) => console.error("Error fetching latest image:", error));
      fetch("https://tubesprakpro.bhadrikais.my.id/latestImage", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.imageUrl) {
            setLatestImageUrl(data.imageUrl);
          }
        })
        .catch((error) => console.error("Error fetching latest image:", error));
    };

    fetchLatestImage();
    const interval = setInterval(fetchLatestImage, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex overflow-y-hidden ">
      <div className="w-1/2 relative flex flex-col justify-center items-center">
        <img
          src={titik}
          alt=""
          className="w-64 h-64 absolute -left-24 -top-32 -z-10"
        />
        <div className="ml-12 mt-10  absolute top-0 left-0">
          <div className="text-5xl font-semibold tracking-jarak">GRAF</div>
          <div className="text-5xl tracking-jarak">AKADEMIK</div>
          <div className="text-xl">Kelas D - Kelompok 2</div>
        </div>
        <img
          src={bulet}
          alt=""
          className="w-64 h-64 absolute -z-10 -bottom-32 -left-24"
        />
        <div className="flex flex-col items-center mt-10">
          <div className="border-2 border-black p-6 rounded-lg shadow-lg mb-6 h-28 w-64 flex flex-col justify-center items-center">
            <h2 className="text-xl font-bold">LEAD</h2>
            <p>Narapati Keysa A</p>
            <p className="font-semibold">223040155</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="border-2 border-black p-4 rounded-lg shadow-lg h-28 w-64 flex flex-col justify-center items-center">
              <p>Rafli Ramdhani</p>
              <p className="font-semibold">223040010</p>
            </div>
            <div className="border-2  border-black p-4 rounded-lg shadow-lg h-28 w-64 flex flex-col justify-center items-center">
              <p>Bhadrika Aryaputra H</p>
              <p className="font-semibold">223040018</p>
            </div>
            <div className="border-2  border-black p-4 rounded-lg shadow-lg h-28 w-64 flex flex-col justify-center items-center">
              <p>Lisvindanu</p>
              <p className="font-semibold">223040038</p>
            </div>
            <div className="border-2  border-black p-4 rounded-lg shadow-lg h-28 w-64 flex flex-col justify-center items-center ">
              <p>Anin Denin N</p>
              <p className="font-semibold">223040109</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2 h-screen bg-black rounded-l-gede flex flex-col justify-center text-white">
        <div className="text-4xl font-semibold tracking-jarak flex justify-center">
          VISUALISASI
        </div>
        <div className=" flex justify-center semi-bold text-xl mb-4 mt-1 tracking-widest">
          Realtime Graph
        </div>
        <div className="container max-w-lg mx-auto p-4 ">
          <div className="bg-white rounded-xl shadow-md p-4">
            <div
              id="imageContainer"
              className="flex justify-center items-center"
            >
              {latestImageUrl ? (
                <img
                  id="latestImage"
                  src={latestImageUrl}
                  alt="Latest Image"
                  className=""
                />
              ) : (
                <p className="text-center text-black items-center">
                  Loading...
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
