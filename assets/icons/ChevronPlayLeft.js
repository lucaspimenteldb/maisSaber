import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

const ChevronPlayLeft = (props) => (
  <Svg
    width={34}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M21.505 22.28c.13.124.283.223.451.29a1.439 1.439 0 0 0 1.517-.29c.13-.124.232-.272.302-.434a1.294 1.294 0 0 0 0-1.025 1.336 1.336 0 0 0-.302-.434L18.9 16l4.573-4.387a1.33 1.33 0 0 0 .303-.434 1.288 1.288 0 0 0 0-1.025 1.39 1.39 0 0 0-.754-.726 1.433 1.433 0 0 0-1.517.292l-5.543 5.333a1.33 1.33 0 0 0-.304.434 1.29 1.29 0 0 0 .303 1.46l5.544 5.333Zm-10.103.387c.368 0 .72-.14.98-.39s.406-.59.406-.944V10.667c0-.354-.146-.693-.406-.943s-.612-.39-.98-.39c-.367 0-.72.14-.98.39s-.406.589-.406.943v10.666c0 .354.146.693.406.943s.612.39.98.39Z"
      fill="url(#a)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={23.883}
        y1={21.7}
        x2={10.018}
        y2={21.541}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3B368C" />
        <Stop offset={1} stopColor="#D02F60" />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default ChevronPlayLeft
