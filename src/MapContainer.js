import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
  const mapStyles = { height: "100vh", width: "100%" };
  const defaultCenter = { lat: 26.5096, lng: 80.2793 }; // Jeevaas Hospital coordinates

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={18}
        center={defaultCenter}
        mapTypeId="satellite" // For 3D view
      />
    </LoadScript>
  );
}

export default MapContainer;
