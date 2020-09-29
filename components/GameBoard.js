import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

import Square from "./Square";

const GameBoard = (props) => {
  const [timeLeft, setTimeLeft] = useState(11);

  useEffect(() => {
    if (!timeLeft) return;
    const timerId = setInterval(() => {
      setTimeLeft(timeLeft - 1); //changing every second
    }, 1000);
    return () => clearInterval(timerId); //cleaner function
  }, [timeLeft]);
  return (
    <View style={styles.container}>
      <Text>Whack A Mole!</Text>
      <Text>{timeLeft}</Text>
      <Text>{props.score}</Text>
      <View style={styles.game}>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
    marginTop: 100
    },
    game: {
      flexDirection: "row",
      flexWrap: "wrap",
      width: 300,
      paddingTop: 20,
    },
  });
  const mapStateToProps = state=>{
      return {
          score: state.score
      }
  }
export default connect(mapStateToProps)(GameBoard);


