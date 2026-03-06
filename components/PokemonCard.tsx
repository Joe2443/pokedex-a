import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface PokemonCardProps {
  name: string;
  url: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, url }) => {
  // Ejemplo de url: https://pokeapi.co/api/v2/pokemon/25/
  const id = url.split("/").filter(Boolean).pop();

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    marginTop: 8,
    fontSize: 18,
    textTransform: "capitalize",
  },
});