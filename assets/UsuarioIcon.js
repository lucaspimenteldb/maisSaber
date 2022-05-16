import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

const UsuarioIcon = (props) => (
  <Svg
    width={props.width ? props.width : 32}
    height={props.height ? props.height : 32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16.08 16.03c3.863 0 6.994-2.917 6.994-6.515S19.944 3 16.081 3c-3.863 0-6.994 2.917-6.994 6.515s3.131 6.515 6.994 6.515Z"
      fill="url(#a)"
    />
    <Path
      d="M4 28.467h24.16c-.849-5.69-5.926-10.068-12.08-10.068S4.85 22.777 4 28.467Z"
      fill="url(#b)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={11.336}
        y1={5.095}
        x2={20.403}
        y2={14.829}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#75DAFF" />
        <Stop offset={1} stopColor="#1EA2E4" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={9.459}
        y1={20.447}
        x2={22.54}
        y2={34.053}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#00ADED" />
        <Stop offset={1} stopColor="#1EA2E4" />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default UsuarioIcon
