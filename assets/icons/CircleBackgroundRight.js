import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

const CircleBackgroundRight = (props) => (
  <Svg
    width={110}
    height={202}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      opacity={0.1}
      d="M172.624 43.821c32.701 41.323 27.106 100.227-12.497 131.567-39.603 31.34-98.216 23.247-130.917-18.076C-3.49 115.989 2.104 57.085 41.707 25.745 81.31-5.595 139.923 2.5 172.624 43.821Z"
      stroke="url(#a)"
      strokeWidth={15}
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={41.707}
        y1={25.745}
        x2={160.127}
        y2={175.388}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default CircleBackgroundRight
