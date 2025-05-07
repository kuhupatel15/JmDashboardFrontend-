import React, { useEffect, useState } from "react";
import BASE_URL from "./utils/config"; // ✅ Base URL import kiya

const Advertisement = () => {
  const [adImage, setAdImage] = useState(""); 

  useEffect(() => {
    const fetchAdvertisement = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/advertisements`);
        const data = await response.json();
        console.log("Fetched Advertisement Data:", data); // ✅ Check karo API data sahi aa raha hai?
        if (data.length > 0) {
          setAdImage(data[0].imageUrl);
        }
      } catch (error) {
        console.error("Error fetching advertisement:", error);
      }
      
    };
  
    fetchAdvertisement();
  }, []);
  
  

  return (
    <div className="w-full h-full bg-white">
      {adImage ? (
        <img className="w-full h-full object-contain" src={adImage} alt="Advertisement" />
      ) : (
        <p>Loading Advertisement...</p>
      )}
    </div>
  );
};

export default Advertisement;
