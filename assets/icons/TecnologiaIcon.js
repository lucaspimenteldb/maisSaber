import * as React from "react"
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg"

const TecnologiaIcon = (props) => (
  <Svg
    width={72}
    height={72}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M59 16H13v34h46V16Z" fill="#D7F1FF" />
      <Path
        d="M60 51H12V17a2 2 0 0 1 2-2h44a2 2 0 0 1 2 2v34Zm-46-2h44V17H14v32Z"
        fill="#2779DC"
      />
      <Path d="M12 51 4 64h64l-8-13H12Z" fill="url(#b)" />
      <Path
        d="M64 68H8a4 4 0 0 1-4-4c0-.1-1.62 0 64 0a4 4 0 0 1-4 4Z"
        fill="#2779DC"
      />
      <Path d="M42 61H30l-2 3h16l-2-3Z" fill="url(#c)" />
      <Path d="M58 47H14v2h44v-2Z" fill="#5B8DC9" />
      <Path d="M61 59H12l3-6h42l4 6Z" fill="url(#d)" />
      <Path d="M17 49h4a1 1 0 0 1 1 1v1h-6v-1a1 1 0 0 1 1-1Z" fill="url(#e)" />
      <Path d="M51 49h4a1 1 0 0 1 1 1v1h-6v-1a1 1 0 0 1 1-1Z" fill="url(#f)" />
      <Path d="M23 11v10l13 4 13-4V11H23Z" fill="#42455E" />
      <Path d="m57 10-21 6-21-6 21-6 21 6Z" fill="url(#g)" />
      <Path
        d="M45 30a1 1 0 0 1-1-1V13.65l-8.41-3.74a1 1 0 0 1 .82-1.82l9 4A1 1 0 0 1 46 13v16a1 1 0 0 1-1 1Z"
        fill="url(#h)"
      />
      <Path
        d="M46.78 34h-3.56a1 1 0 0 1-1-1.2l.6-3a1 1 0 0 1 1-.8h2.36a1 1 0 0 1 1 .8l.6 3a1 1 0 0 1-1 1.2Z"
        fill="url(#i)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={4}
        y1={57.5}
        x2={68}
        y2={57.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#44A0FF" />
        <Stop offset={1} stopColor="#326BBB" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={28}
        y1={62.5}
        x2={44}
        y2={62.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D4D8E1" />
        <Stop offset={1} stopColor="#F3F4F5" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={404}
        y1={365}
        x2={2805}
        y2={365}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D4D8E1" />
        <Stop offset={1} stopColor="#F3F4F5" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={88}
        y1={141}
        x2={124}
        y2={141}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D4D8E1" />
        <Stop offset={1} stopColor="#F3F4F5" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={326}
        y1={141}
        x2={362}
        y2={141}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D4D8E1" />
        <Stop offset={1} stopColor="#F3F4F5" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={15}
        y1={10}
        x2={57}
        y2={10}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#474F72" />
        <Stop offset={1} stopColor="#878C9F" />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={35}
        y1={19}
        x2={46}
        y2={19}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FBCC88" />
        <Stop offset={1} stopColor="#FFE5C3" />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={256.25}
        y1={166.511}
        x2={287.389}
        y2={166.511}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FBCC88" />
        <Stop offset={1} stopColor="#FFE5C3" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(4 4)" d="M0 0h64v64H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default TecnologiaIcon
