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
    width={46}
    height={46}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path d="M39.531 8.625H6.47v24.438H39.53V8.625Z" fill="#D7F1FF" />
      <Path
        d="M40.25 33.781H5.75V9.344a1.438 1.438 0 0 1 1.438-1.438h31.625a1.438 1.438 0 0 1 1.437 1.438V33.78ZM7.187 32.344h31.625v-23H7.189v23Z"
        fill="#2779DC"
      />
      <Path d="M5.75 33.781 0 43.125h46l-5.75-9.344H5.75Z" fill="url(#b)" />
      <Path
        d="M43.125 46H2.875A2.875 2.875 0 0 1 0 43.125c0-.072-1.164 0 46 0A2.875 2.875 0 0 1 43.125 46Z"
        fill="#2779DC"
      />
      <Path
        d="M27.313 40.969h-8.625l-1.438 2.156h11.5l-1.438-2.156Z"
        fill="url(#c)"
      />
      <Path d="M38.813 30.906H7.186v1.438h31.625v-1.438Z" fill="#5B8DC9" />
      <Path
        d="M40.969 39.531H5.75l2.156-4.312h30.188l2.875 4.312Z"
        fill="url(#d)"
      />
      <Path
        d="M9.344 32.344h2.875a.719.719 0 0 1 .719.718v.72H8.625v-.72a.719.719 0 0 1 .719-.718Z"
        fill="url(#e)"
      />
      <Path
        d="M33.781 32.344h2.875a.719.719 0 0 1 .719.718v.72h-4.313v-.72a.719.719 0 0 1 .72-.718Z"
        fill="url(#f)"
      />
      <Path
        d="M13.656 5.031v7.188L23 15.094l9.344-2.875V5.03H13.656Z"
        fill="#42455E"
      />
      <Path
        d="M38.094 4.313 23 8.625 7.906 4.312 23 0l15.094 4.313Z"
        fill="url(#g)"
      />
      <Path
        d="M29.469 18.688a.719.719 0 0 1-.719-.72V6.937l-6.045-2.688a.719.719 0 0 1 .59-1.308l6.468 2.875a.718.718 0 0 1 .424.654v11.5a.719.719 0 0 1-.718.719Z"
        fill="url(#h)"
      />
      <Path
        d="M30.748 21.562H28.19a.718.718 0 0 1-.718-.862l.43-2.156a.719.719 0 0 1 .72-.575h1.696a.718.718 0 0 1 .719.575l.43 2.156a.72.72 0 0 1-.718.862Z"
        fill="url(#i)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={0}
        y1={38.453}
        x2={46}
        y2={38.453}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#44A0FF" />
        <Stop offset={1} stopColor="#326BBB" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={17.25}
        y1={42.047}
        x2={28.75}
        y2={42.047}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D4D8E1" />
        <Stop offset={1} stopColor="#F3F4F5" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={287.5}
        y1={259.469}
        x2={2013.22}
        y2={259.469}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D4D8E1" />
        <Stop offset={1} stopColor="#F3F4F5" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={60.375}
        y1={98.469}
        x2={86.25}
        y2={98.469}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D4D8E1" />
        <Stop offset={1} stopColor="#F3F4F5" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={231.437}
        y1={98.469}
        x2={257.312}
        y2={98.469}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D4D8E1" />
        <Stop offset={1} stopColor="#F3F4F5" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={7.906}
        y1={4.313}
        x2={38.094}
        y2={4.313}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#474F72" />
        <Stop offset={1} stopColor="#878C9F" />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={22.281}
        y1={10.781}
        x2={30.188}
        y2={10.781}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FBCC88" />
        <Stop offset={1} stopColor="#FFE5C3" />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={181.305}
        y1={116.805}
        x2={203.686}
        y2={116.805}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FBCC88" />
        <Stop offset={1} stopColor="#FFE5C3" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h46v46H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default SvgComponent
