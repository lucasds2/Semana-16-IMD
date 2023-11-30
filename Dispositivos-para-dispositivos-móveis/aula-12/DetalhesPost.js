import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const DetalhesPost = ({ route }) => {
  const { postId } = route.params;
  const [post, setPost] = useState(null);

  const getDetalhesPostNaAPI = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      const post = await response.json();
      setPost(post);
    } catch (error) {
      console.error('Falha ao acessar detalhes do post. Tente novamente mais tarde!', error);
    }
  };

  useEffect(() => {
    getDetalhesPostNaAPI();
  }, [postId]);

  if (!post) {
    return <Text>Carregando...</Text>;
  }

  return (
    <View>
      <Text>ID: {post.id}</Text>
      <Text>Title: {post.title}</Text>
      <Text>Body: {post.body}</Text>
    </View>
  );
};

export default DetalhesPost;