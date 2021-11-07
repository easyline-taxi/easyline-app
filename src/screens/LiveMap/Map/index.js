import React, { useEffect, useRef } from "react";
import MapView, { Marker, Polygon, Polyline, MapViewProps } from "react-native-maps";
import styles from "./styles";
import { Text, View, Dimensions, Image } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Alert } from "react-native";

import { isConvex } from "../../../utils/checkpolygonconvex";
import { useLocation } from "../../../contexts/location";
import api from "../../../Services/api";

export default function App() {
  const [maximumPolygonNodesLength] = useState(5);
  const [polygonEditingMode, setPolygonEditMode] = useState(false);
  const [editingPolygonNodes, setEditingPolygonNodes] = useState([]);
  const [polygonNodes, setPolygonNodes] = useState([]);
  const [currentLocation, setCurrentLocation] = useState({});
  const [followUser, setFollowUser] = useState(false);
  const mapRef = useRef(null);

  const { location } = useLocation();

  useEffect(() => {
    (async function () {
      await setPointArea();
    })();
  }, []);

  useEffect(() => {
    setCurrentLocation({
      currentLatitude: location.latitude,
      currentLongitude: location.longitude,
    });

    if (followUser) {
      centerInUserLocation();
    }
  }, [location]);

  function handleSetNode(coordinate) {
    if (editingPolygonNodes.length < maximumPolygonNodesLength) {
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

  async function handleSaveEditingPolygonNodes() {
    if (editingPolygonNodes.length === maximumPolygonNodesLength) {
      if (!checkIfPolygonIsConvex(editingPolygonNodes))
        return Alert.alert(
          "Erro",
          "O polígono que você criou para delimitar a área é côncavo. Transforme-o em convexo."
        );

      setEditingPolygonNodes([]);
      setPolygonEditMode(false);

      try {
        await updatePolygonArea([...editingPolygonNodes, editingPolygonNodes[0]]);
        await setPointArea();
        Alert.alert("Sucesso", "A área do seu ponto foi atualizada com sucesso!");
      } catch (err) {
        Alert.alert("Erro", `Ocorreu um erro ao tentar atualizar a área do seu ponto:\n${err}`);
      }
    } else {
      Alert.alert("Erro", "O polígono para delimitar a área deve ser um pentágono.");
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
    if (editingPolygonNodes.length > 0) {
      const removedLastIndexEditingPolygonNodes = editingPolygonNodes.slice(
        0,
        editingPolygonNodes.length - 1
      );

      setEditingPolygonNodes([...removedLastIndexEditingPolygonNodes]);
    }
  }

  function handleFollowUserButton() {
    setFollowUser(!followUser);
  }

  function checkIfPolygonIsConvex(coordinates) {
    /* Below instruction is converting array of objects in 2D array with only object values
    [[x,y], [x,y]...]*/
    const coordinatesArr = coordinates.map((o) => Object.entries(o).map((c) => c[1]));
    return isConvex(coordinatesArr);
  }

  async function updatePolygonArea(coordinates) {
    return await api("PUT", "/admin/config/", { coordinates });
  }

  async function setPointArea() {
    const { data } = await api("GET", "/admin/config/");
    setPolygonNodes(data.local.splice(0, data.local.length - 1));
  }

  function centerInUserLocation() {
    mapRef.current.animateCamera({ center: { latitude: location.latitude, longitude: location.longitude } });
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
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        customMapStyle={mapStyle}
        onPress={handleMapPress}
        showsMyLocationButton={true}
        showsUserLocation={true}
        ref={mapRef}
      >
        <Marker
          coordinate={{
            latitude: currentLocation?.currentLatitude || 0,
            longitude: currentLocation?.currentLongitude || 0,
          }}
          title={"Você"}
        >
          <Image source={require("../../../../assets/img/taxi.png")} style={{ height: 55, width: 55 }} />
        </Marker>
        {editingPolygonNodes.length >= 1 && <Polygon coordinates={editingPolygonNodes} />}
        {polygonNodes.length === maximumPolygonNodesLength && (
          <Polygon
            coordinates={polygonNodes}
            fillColor={`rgba(255,0,0, ${polygonEditingMode ? "0.2" : "0.4"})`}
            strokeColor={`rgba(0,0,0, ${polygonEditingMode ? "0.2" : "1"})`}
          />
        )}
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
          <>
            <TouchableOpacity style={styles.button} onPress={handleFollowUserButton}>
              <Text style={styles.text}>{!followUser ? "Me seguir" : "Parar de me seguir"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleEditButtonPress}>
              <Text style={styles.text}>Editar</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}
