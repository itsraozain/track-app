import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';
import { View } from 'react-native';

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  return (
    <>
        <View style={{marginTop:5}}/>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="Enter name"
        />
      
        {recording ? (
          <Button title="Stop" onPress={stopRecording}
          containerStyle={{borderRadius:20,marginHorizontal:30}}
          buttonStyle={{backgroundColor:'#000D47'}}
          />
        ) : (
          <Button title="Start Recording" onPress={startRecording}
          containerStyle={{borderRadius:20,marginHorizontal:30}}
          buttonStyle={{backgroundColor:'#000D47'}}
          />
        )}
        <View style={{marginTop:5}}/>
        {!recording && locations.length ? (
          <Button title="Save Recording" onPress={saveTrack}
          containerStyle={{borderRadius:20,marginHorizontal:30}}
          buttonStyle={{backgroundColor:'#000D47'}}
          />
        ) : null}
      
    </>
  );
};

export default TrackForm;
