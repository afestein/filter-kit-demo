/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Image } from "react-native";
import { OverlayBlend } from "react-native-image-filter-kit";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <OverlayBlend
        style={{ height: 100, width: 100 }}
        dstImage={
          <Image
            style={{ height: 200, width: 200 }}
            source={{ uri: "https://i.imgur.com/iPKTONG.jpg" }}
          />
        }
        srcImage={
          <Image
            style={{ height: 200, width: 200 }}
            source={{ uri: "https://i.imgur.com/p4NM6fY.png" }}
          />
        }
      />
    );
  }
}
