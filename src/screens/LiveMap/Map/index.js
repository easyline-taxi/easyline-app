import * as React from "react";
import MapView, { Marker, Polygon, Polyline } from "react-native-maps";
import styles from "./styles";
import { Text, View, Dimensions, Image } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function App() {
  const [polygonEditingMode, setPolygonEditMode] = useState(false);
  const [editingPolygonNodes, setEditingPolygonNodes] = useState([]);
  const [polygonNodes, setPolygonNodes] = useState([]);

  function handleSetNode(coordinate) {
    if (editingPolygonNodes.length < 4) {
      setEditingPolygonNodes([...editingPolygonNodes, coordinate]);
    } else {
      setEditingPolygonNodes([]);
    }
  }

  function handleMapPress(e) {
    const pressCoordinate = e.nativeEvent.coordinate;
    if (polygonEditingMode) {
      handleSetNode(pressCoordinate);
    }
  }

  function handleEditButtonPress() {
    setPolygonEditMode(true);
  }

  function handleSaveEditingPolygonNodes() {
    if (editingPolygonNodes.length === 4) {
      setPolygonNodes(editingPolygonNodes);
      setEditingPolygonNodes([]);
      setPolygonEditMode(false);
    }
  }

  function handleCancelPolygonEditing() {
    setEditingPolygonNodes([]);
    setPolygonEditMode(false);
  }

  function handleClearPolygonSaved() {
    setPolygonNodes([]);
  }

  function handlePolygonEditingGoBack() {
    if(editingPolygonNodes.length > 1) {
      const removedLastIndexEditingPolygonNodes = editingPolygonNodes.slice(0, editingPolygonNodes.length-1)

      setEditingPolygonNodes([...removedLastIndexEditingPolygonNodes]);
    }
  }

  const mapStyle = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#ebe3cd",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#523735",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#f5f1e6",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#c9b2a6",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#dcd2be",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#ae9e90",
        },
      ],
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae",
        },
      ],
    },
    {
      featureType: "poi",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#93817c",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#a5b076",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#447530",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f1e6",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#fdfcf8",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#f8c967",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#e9bc62",
        },
      ],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry",
      stylers: [
        {
          color: "#e98d58",
        },
      ],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#db8555",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#806b63",
        },
      ],
    },
    {
      featureType: "transit",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#8f7d77",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#ebe3cd",
        },
      ],
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#b9d3c2",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#92998d",
        },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -22.971208,
          longitude: -43.184021,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        customMapStyle={mapStyle}
        onPress={handleMapPress}
      >
        <MapView.Circle
          center={{
            latitude: -22.971208,
            longitude: -43.184021,
          }}
          radius={400}
          strokeWidth={2}
          strokeColor="rgba(242,87,101,0.5)"
          fillColor="rgba(242,87,101,0.3)"
        />
        <Marker
          coordinate={{ latitude: -22.971208, longitude: -43.184021 }}
          title={"PA"}
          description={"Ipanema Top Taxi"}
        >
          <Image source={require("../../../../assets/img/taxi.png")} style={{ height: 55, width: 55 }} />
        </Marker>
        {editingPolygonNodes.length >= 1 && <Polygon coordinates={editingPolygonNodes} />}
        {polygonNodes.length === 4 && <Polygon coordinates={polygonNodes} fillColor={`rgba(255,0,0, ${polygonEditingMode ? "0.2" : "0.4"})`} strokeColor={`rgba(0,0,0, ${polygonEditingMode ? "0.2" : "1"})`} />}
      </MapView>
      <View style={styles.buttonsContainer}>
        {polygonEditingMode && (
          <>
            <TouchableOpacity style={styles.button} onPress={handleClearPolygonSaved}>
              <Text style={styles.text}>Limpar salvo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handlePolygonEditingGoBack}>
              <Text style={styles.text}>Retroceder</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleCancelPolygonEditing}>
              <Text style={styles.text}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSaveEditingPolygonNodes}>
              <Text style={styles.text}>Salvar</Text>
            </TouchableOpacity>
          </>
        )}
        {!polygonEditingMode && (
          <TouchableOpacity style={styles.button} onPress={handleEditButtonPress}>
            <Text style={styles.text}>Editar</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
