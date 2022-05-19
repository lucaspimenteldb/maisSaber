import * as React from "react"
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg"

const FogueteIcon = (props) => (
  <Svg
    width={72}
    height={72}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M27.07 59.07a10 10 0 0 0-14.14-14.14C9 48.83 4 68 4 68s19.17-5 23.07-8.93Z"
        fill="url(#b)"
      />
      <Path
        d="m41.05 49-1.64 1.64a2 2 0 0 1-2.82 0L21.41 35.41a2 2 0 0 1 0-2.82L23.05 31l18 18Z"
        fill="url(#c)"
      />
      <Path
        d="M68 4a43.45 43.45 0 0 1-12.73 30.73L41.05 49l-18-18 14.22-14.27A43.46 43.46 0 0 1 68 4Z"
        fill="url(#d)"
      />
      <Path
        d="M27 52a5 5 0 0 0-7-7c-2 2-5 12-5 12s10.08-3 12-5Z"
        fill="url(#e)"
      />
      <Path
        d="M36 18h-1.57a32.43 32.43 0 0 0-22.92 9.49 1.73 1.73 0 0 0 1.69 2.88A14.71 14.71 0 0 1 23 31l13-13Z"
        fill="url(#f)"
      />
      <Path
        d="M54 36v1.57a32.43 32.43 0 0 1-9.49 22.92 1.73 1.73 0 0 1-2.88-1.69A14.71 14.71 0 0 0 41 49l13-13Z"
        fill="url(#g)"
      />
      <Path
        d="M68 4a42.997 42.997 0 0 1-1.66 11.88A12 12 0 0 1 56.12 5.66 43 43 0 0 1 68 4Z"
        fill="url(#h)"
      />
      <Path d="M51 27a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" fill="url(#i)" />
      <Path
        d="M51 28a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm0-12a4.999 4.999 0 1 0 0 9.998A4.999 4.999 0 0 0 51 16Z"
        fill="url(#j)"
      />
      <Path
        d="M41 31 27 45"
        stroke="url(#k)"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={4}
        y1={55}
        x2={30}
        y2={55}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF8500" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={20.83}
        y1={41.06}
        x2={41.05}
        y2={41.06}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#2B44B4" />
        <Stop offset={1} stopColor="#878C9F" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={45.52}
        y1={48.95}
        x2={45.52}
        y2={4}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={15}
        y1={50.25}
        x2={28.5}
        y2={50.25}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFCD85" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={11}
        y1={24.5}
        x2={36}
        y2={24.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E8233D" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={36}
        y1={-60}
        x2={36}
        y2={18}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E8233D" />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={745.875}
        y1={145.135}
        x2={745.875}
        y2={4}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E8233D" />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={45}
        y1={21}
        x2={57}
        y2={21}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#00D8FF" />
      </LinearGradient>
      <LinearGradient
        id="j"
        x1={51}
        y1={28}
        x2={51}
        y2={14}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#949AAF" />
      </LinearGradient>
      <LinearGradient
        id="k"
        x1={447}
        y1={633}
        x2={447}
        y2={381}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E8233D" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(4 4)" d="M0 0h64v64H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default FogueteIcon
