import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

const ChevronPlayRight = (props) => (
  <Svg
    width={15}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2.907.72a1.396 1.396 0 0 0-.451-.29A1.44 1.44 0 0 0 .939.72C.81.844.708.992.638 1.154a1.295 1.295 0 0 0 .301 1.46L5.513 7 .939 11.387a1.33 1.33 0 0 0-.303.434 1.29 1.29 0 0 0 .303 1.459c.13.125.282.224.451.292a1.435 1.435 0 0 0 1.066 0 1.39 1.39 0 0 0 .451-.292l5.544-5.333c.13-.124.233-.272.303-.434a1.29 1.29 0 0 0-.303-1.46L2.907.72ZM13.01.333c-.367 0-.72.14-.98.39s-.406.59-.406.944v10.666c0 .354.146.693.406.943s.613.39.98.39c.368 0 .72-.14.98-.39s.406-.589.406-.943V1.667c0-.354-.146-.693-.406-.943s-.612-.39-.98-.39Z"
      fill="url(#a)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={0.529}
        y1={1.3}
        x2={14.394}
        y2={1.459}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3B368C" />
        <Stop offset={1} stopColor="#D02F60" />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default ChevronPlayRight
