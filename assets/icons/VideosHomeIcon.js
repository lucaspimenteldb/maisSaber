import * as React from "react"
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={38}
    height={38}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path fill={props.color ? props.color : "transparent"} d="M0 0h38v38H0z" />
      <Path d="M32.656 7.125H5.344v20.188h27.312V7.125Z" fill="#D7F1FF" />
      <Path
        d="M33.25 27.906H4.75V7.72A1.188 1.188 0 0 1 5.938 6.53h26.125A1.188 1.188 0 0 1 33.25 7.72v20.187ZM5.937 26.72h26.125v-19H5.939v19Z"
        fill="#2779DC"
      />
      <Path d="M4.75 27.906 0 35.625h38l-4.75-7.719H4.75Z" fill="url(#b)" />
      <Path
        d="M35.625 38H2.375A2.375 2.375 0 0 1 0 35.625c0-.06-.962 0 38 0A2.375 2.375 0 0 1 35.625 38Z"
        fill="#2779DC"
      />
      <Path
        d="M22.563 33.844h-7.125l-1.188 1.781h9.5l-1.188-1.781Z"
        fill="url(#c)"
      />
      <Path d="M32.063 25.531H5.936v1.188h26.125V25.53Z" fill="#5B8DC9" />
      <Path
        d="M33.844 32.656H4.75l1.781-3.562H31.47l2.375 3.562Z"
        fill="url(#d)"
      />
      <Path
        d="M7.719 26.719h2.375a.594.594 0 0 1 .594.593v.594H7.124v-.593a.594.594 0 0 1 .594-.594Z"
        fill="url(#e)"
      />
      <Path
        d="M27.906 26.719h2.375a.594.594 0 0 1 .594.593v.594h-3.563v-.593a.594.594 0 0 1 .594-.594Z"
        fill="url(#f)"
      />
      <Path
        d="M11.281 4.156v5.938L19 12.469l7.719-2.375V4.156H11.28Z"
        fill="#42455E"
      />
      <Path
        d="M31.469 3.563 19 7.124 6.531 3.562 19 0l12.469 3.563Z"
        fill="url(#g)"
      />
      <Path
        d="M24.344 15.438a.594.594 0 0 1-.594-.594V5.73l-4.993-2.22a.593.593 0 0 1 .486-1.081l5.344 2.375a.594.594 0 0 1 .35.54v9.5a.594.594 0 0 1-.593.594Z"
        fill="url(#h)"
      />
      <Path
        d="M25.4 17.813h-2.113a.594.594 0 0 1-.594-.713l.356-1.781a.594.594 0 0 1 .594-.475h1.401a.594.594 0 0 1 .594.475l.356 1.781a.593.593 0 0 1-.593.713Z"
        fill="url(#i)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={0}
        y1={31.766}
        x2={38}
        y2={31.766}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#44A0FF" />
        <Stop offset={1} stopColor="#326BBB" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={14.25}
        y1={34.734}
        x2={23.75}
        y2={34.734}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D4D8E1" />
        <Stop offset={1} stopColor="#F3F4F5" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={237.5}
        y1={214.344}
        x2={1663.09}
        y2={214.344}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D4D8E1" />
        <Stop offset={1} stopColor="#F3F4F5" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={49.875}
        y1={81.344}
        x2={71.25}
        y2={81.344}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D4D8E1" />
        <Stop offset={1} stopColor="#F3F4F5" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={191.187}
        y1={81.344}
        x2={212.562}
        y2={81.344}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D4D8E1" />
        <Stop offset={1} stopColor="#F3F4F5" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={6.531}
        y1={3.563}
        x2={31.469}
        y2={3.563}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#474F72" />
        <Stop offset={1} stopColor="#878C9F" />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={18.406}
        y1={8.906}
        x2={24.938}
        y2={8.906}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FBCC88" />
        <Stop offset={1} stopColor="#FFE5C3" />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={149.774}
        y1={96.491}
        x2={168.262}
        y2={96.491}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FBCC88" />
        <Stop offset={1} stopColor="#FFE5C3" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h38v38H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default SvgComponent
