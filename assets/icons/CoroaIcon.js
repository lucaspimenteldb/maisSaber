import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

const CoroaIcon = (props) => (
  <Svg
    width={props.width ? props.width : 32}
    height={props.height ? props.height : 32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M29.62 4.246c-.679 5.603-2.11 15.142-2.797 20.82-.059.483-13.523-.946-20.587.502 0-.293-.065-.587-.102-.88l-.329-2.707-.175-1.41C4.943 14.978 3.68 9.85 3 4.246c3.368 2.758 6.379 6.188 8.92 10.164A112.316 112.316 0 0 1 16.303 4c2.042 2.8 3.764 5.965 5.114 9.398 2.527-3.72 3.609-5.48 8.204-9.152Z"
      fill="url(#a)"
    />
    <Path
      d="M29.62 4.246a2951.242 2951.242 0 0 0-2.052 16.789l-.175 1.429c-.11.88-.212 1.76-.322 2.65l-.11.87a52.775 52.775 0 0 0-21.302 0l-.11-.87c-.102-.89-.219-1.78-.32-2.66l-.176-1.42C4.366 15.445 3.682 9.85 3 4.247a94.503 94.503 0 0 1 8.343 10.666A123.774 123.774 0 0 1 16.31 4a123.953 123.953 0 0 1 4.953 10.912 95.182 95.182 0 0 1 8.358-10.666Z"
      fill="url(#b)"
    />
    <Path
      d="m5.053 21.035.175 1.438c7.736-1.646 13.749-1.646 22.165 0l.175-1.438c-8.54-1.656-14.655-1.656-22.515 0Z"
      fill="url(#c)"
    />
    <Path
      d="M26.962 26.003c0 1.495-4.764 2.716-10.652 2.716-5.888 0-10.65-1.22-10.65-2.716 0-1.495 4.77-2.707 10.65-2.707 5.881 0 10.652 1.212 10.652 2.707Z"
      fill="url(#d)"
    />
    <Path
      d="M25.924 26.003c0 .852-4.303 1.543-9.614 1.543-5.31 0-9.613-.691-9.613-1.543s4.339-1.543 9.613-1.543c5.275 0 9.614.691 9.614 1.543Z"
      fill="url(#e)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={16.625}
        y1={1.483}
        x2={9.854}
        y2={37.394}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F28A07" />
        <Stop offset={0.29} stopColor="#F4940D" />
        <Stop offset={0.78} stopColor="#F9AF1E" />
        <Stop offset={1} stopColor="#FCBE27" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={16.625}
        y1={1.483}
        x2={9.697}
        y2={38.196}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F9E94E" />
        <Stop offset={0.2} stopColor="#FADF45" />
        <Stop offset={0.55} stopColor="#FCC42C" />
        <Stop offset={1} stopColor="#FF9804" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={5.053}
        y1={21.073}
        x2={27.568}
        y2={21.208}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F28A07" />
        <Stop offset={0.13} stopColor="#F38B07" stopOpacity={0.96} />
        <Stop offset={0.37} stopColor="#F58E06" stopOpacity={0.84} />
        <Stop offset={0.66} stopColor="#FA9205" stopOpacity={0.65} />
        <Stop offset={1} stopColor="#FF9804" stopOpacity={0.4} />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={16.69}
        y1={22.625}
        x2={14.913}
        y2={32.05}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F9E94E" />
        <Stop offset={0.2} stopColor="#FADF45" />
        <Stop offset={0.55} stopColor="#FCC42C" />
        <Stop offset={1} stopColor="#FF9804" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={6.697}
        y1={26.003}
        x2={25.924}
        y2={26.003}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F28A07" />
        <Stop offset={0.78} stopColor="#FB9405" />
        <Stop offset={1} stopColor="#FF9804" />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default CoroaIcon
