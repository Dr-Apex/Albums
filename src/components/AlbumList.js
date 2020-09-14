import React, {useState, useEffect} from 'react';
import {FlatList, ScrollView} from 'react-native';
import AlbumDetail from './AlbumDetail';

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const url = 'https://rallycoding.herokuapp.com/api/music_albums'
    fetch(url).then(response => response.json()).then(data => setAlbums(data));
  }, []);

  console.log(albums);

  return (
    <ScrollView>
      <FlatList
        data={albums}
        keyExtractor={album => album.title}
        renderItem={({ item }) => {
          return <AlbumDetail item={item} />;
        }}
      />
    </ScrollView>
  );
};

export default AlbumList;
