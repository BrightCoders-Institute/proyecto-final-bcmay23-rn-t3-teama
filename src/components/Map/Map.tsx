import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { styles } from './styles';


const Map = () => {
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 19.243798803708895,
                longitude: -103.72873328431236,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0221,
            }}
        >

            <Marker
                coordinate={{
                    latitude: 19.243798803708895,
                    longitude: -103.72873328431236,
                }}
                title="Your nutritionist location"
            />
        </MapView>
    );
};

export default Map;
