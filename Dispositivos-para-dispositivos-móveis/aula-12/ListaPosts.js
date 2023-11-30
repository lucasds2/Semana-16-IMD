import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';

const ListaPosts = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  const getPostsNaAPI = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();
      setPosts(posts);
    } catch (error) {
      console.error('Falha ao acessar servidor. Tente novamente mais tarde!', error);
    }
  };

  useEffect(() => {
    getPostsNaAPI();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('DetalhesPost', { postId: item.id })}>
      <View>
        <Text>ID: {item.id}</Text>
        <Text>Title: {item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ListaPosts;