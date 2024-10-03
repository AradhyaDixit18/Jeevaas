import React, { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';

const GlobeComponent = () => {
  const globeRef = useRef();

  // Hospital coordinates
  const hospitalLocation = [{ lat: 26.5096, lng: 80.2793 }];

  useEffect(() => {
    // Customize the globe's appearance (e.g., add location marker)
    globeRef.current.pointOfView({ lat: 26.5096, lng: 80.2793, altitude: 2 }, 4000);
  }, []);

  return (
    <div className="globe-container">
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        backgroundColor="rgba(0, 0, 0, 0)" // Transparent background
        htmlElementsData={hospitalLocation}
        htmlElement={(d) => {
          const el = document.createElement('div');
          el.innerHTML = '<img src="https://img.icons8.com/ios-filled/50/000000/marker.png" style="width: 25px; height: 25px"/>';
          return el;
        }}
      />
    </div>
  );
};

export default GlobeComponent;
