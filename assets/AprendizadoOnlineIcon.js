import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

const AprendizadoOnlineIcon = (props) => (
  <Svg
    width={72}
    height={72}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M57.656 3H14.344a4.125 4.125 0 0 0-4.125 4.125v57.75A4.125 4.125 0 0 0 14.344 69h43.312a4.125 4.125 0 0 0 4.125-4.125V7.125A4.125 4.125 0 0 0 57.656 3Z"
      fill="url(#a)"
    />
    <Path
      d="M56.625 7.125h-41.25c-.57 0-1.031.462-1.031 1.031V59.72c0 .57.462 1.031 1.031 1.031h41.25c.57 0 1.031-.462 1.031-1.031V8.156c0-.57-.462-1.031-1.031-1.031Z"
      fill="#D3E0EF"
    />
    <Path
      d="M36 66.938a2.062 2.062 0 1 0 0-4.125 2.062 2.062 0 0 0 0 4.124Z"
      fill="url(#b)"
    />
    <Path
      d="M23.625 26.719v8.25L36 39.094l12.375-4.125v-8.25h-24.75Z"
      fill="#494A51"
    />
    <Path
      d="M54.563 25.688c-.104 0 .113 0-18.563-6.188-18.707 6.24-18.46 6.188-18.563 6.188.104 0-.113 0 18.563 6.187 18.707-6.188 18.46-6.188 18.563-6.188Z"
      fill="url(#c)"
    />
    <Path
      d="M44.25 43.219a1.031 1.031 0 0 1-1.031-1.032V29.493l-7.58-2.836a1.034 1.034 0 1 1 .722-1.939l8.25 3.094a1.032 1.032 0 0 1 .67.97v13.405a1.031 1.031 0 0 1-1.031 1.032Z"
      fill="url(#d)"
    />
    <Path
      d="M44.25 44.25a2.062 2.062 0 1 0 0-4.125 2.062 2.062 0 0 0 0 4.125Z"
      fill="url(#e)"
    />
    <Path
      d="M44.25 42.188c-3.094 5.156-3.094 5.001-3.094 5.6a1.62 1.62 0 0 0 1.62 1.618h2.949a1.618 1.618 0 0 0 1.392-2.444l-2.867-4.775Z"
      fill="url(#f)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={10.219}
        y1={36}
        x2={61.781}
        y2={36}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={1} stopColor="#3E7FD9" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={33.938}
        y1={64.875}
        x2={38.063}
        y2={64.875}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D4D8E1" />
        <Stop offset={1} stopColor="#F3F4F5" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={17.438}
        y1={25.688}
        x2={54.563}
        y2={25.688}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3D3D3D" />
        <Stop offset={1} stopColor="#878C9F" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={34.969}
        y1={33.938}
        x2={45.281}
        y2={33.938}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DA8A32" />
        <Stop offset={1} stopColor="#DA8A32" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={198.938}
        y1={196.875}
        x2={215.438}
        y2={196.875}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DA8A32" />
        <Stop offset={1} stopColor="#DA8A32" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={270.06}
        y1={341.766}
        x2={307.179}
        y2={341.766}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E9A254" />
        <Stop offset={0} stopColor="#DA8A32" />
        <Stop offset={1} stopColor="#F4BB79" />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default AprendizadoOnlineIcon
