import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

export default function Home() {
  const center = {
    lat: 10.99835602,
    lng: 77.01502627,
  };

  const markers = [
    {
      id: 1,
      lat: 11.008508456858964,
      lng: 77.0154122380887,
    },
    {
      id: 2,
      lat: 11.008634833785433,
      lng: 77.02695646540657,
    },
    {
      id: 3,
      lat: 11.000209586687447,
      lng: 77.02069082530096,
    },
  ];

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  });

  if (!isLoaded) {
    return <p>loading....</p>;
  }

  return (
    // Important! Always set the container height explicitly
    <div className="h-screen w-full">
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={{
          zoomControl: false,
        }}
      >
        {markers?.map((marker) => (
          <Marker
            key={marker?.id}
            position={{
              lat: marker?.lat,
              lng: marker?.lng,
            }}
          ></Marker>
        ))}
      </GoogleMap>
    </div>
  );
}
