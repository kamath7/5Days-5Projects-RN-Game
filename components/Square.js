import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { addScore } from "./../redux";

const Square = (props) => {
  const [moleActive, setMoleActive] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const randomTime = Math.random() * 20000;
  let timerId;

  useEffect(() => {
    timerId = setInterval(() => {
      setMoleActive(true);
      setTimeout(() => {
        setMoleActive(false);
      }, 800);
    }, randomTime);
    setTimeout(endGame, 11 * 1000);
  }, []);
  function endGame() {
    clearInterval(timerId);
    setGameOver(true);
  }
  return (
    <TouchableOpacity onPress={moleActive ? props.addScore : null}>
      <View style={moleActive ? styles.mole : styles.square}>
        {gameOver && <Text>X</Text>}
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  square: {
    flex: 1,
    minWidth: 80,
    minHeight: 80,
    margin: 10,
    backgroundColor: "red",
  },
  mole: {
    flex: 1,
    minWidth: 80,
    minHeight: 80,
    margin: 10,
    backgroundColor: "blue",
  },
});
const mapStateToProps = (state) => {
  return {
    score: state.score,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addScore: () => dispatch(addScore()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Square);
