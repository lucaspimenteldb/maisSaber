import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

const NotebookMensagemIcon = (props) => (
  <Svg
    width={72}
    height={72}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M39.205 18.88c0-.698-.567-1.265-1.266-1.265H18.067c-1.232 0-2.412.49-3.282 1.358a4.642 4.642 0 0 0-1.359 3.282V47.36c0 .699.566 1.266 1.266 1.266h42.616c.7 0 1.266-.567 1.266-1.266V25.41a1.263 1.263 0 0 0-1.878-1.108 1.892 1.892 0 0 1-.922.238H45.701c-.256 0-.508.078-.718.225l-4.101 2.831-.162-2.342a1.261 1.261 0 0 0-.604-.992 1.903 1.903 0 0 1-.911-1.625V18.88Z"
      fill="url(#a)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M58.574 40.737H13.426v6.623c0 .699.566 1.266 1.266 1.266h42.616c.7 0 1.266-.567 1.266-1.266v-6.623Z"
      fill="url(#b)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M46.095 27.071h9.678a4.434 4.434 0 0 0 4.435-4.435v-7.092a4.434 4.434 0 0 0-4.435-4.435H41.107a4.434 4.434 0 0 0-4.435 4.435v7.093a4.434 4.434 0 0 0 1.563 3.378c-.002 0 .275 3.972.275 3.972a1.267 1.267 0 0 0 1.983.953l5.602-3.869Z"
      fill="url(#c)"
    />
    <Path
      d="M43.156 20.428a1.266 1.266 0 1 0 0-2.531 1.266 1.266 0 0 0 0 2.53Z"
      fill="url(#d)"
    />
    <Path
      d="M48.65 20.428a1.266 1.266 0 1 0 0-2.532 1.266 1.266 0 0 0 0 2.532Z"
      fill="url(#e)"
    />
    <Path
      d="M54.14 20.428a1.266 1.266 0 1 0 0-2.531 1.266 1.266 0 0 0 0 2.53Z"
      fill="url(#f)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M43.727 46.095c-.508 0-.965.303-1.164.77a.592.592 0 0 1-.54.358H29.977a.592.592 0 0 1-.54-.359c-.199-.465-.656-.77-1.164-.77H12.375c-.699 0-1.266.568-1.266 1.266v2.054c0 1.318.524 2.584 1.457 3.515a4.967 4.967 0 0 0 3.515 1.456h39.838a4.967 4.967 0 0 0 3.515-1.456 4.967 4.967 0 0 0 1.457-3.515V47.36c0-.698-.567-1.265-1.266-1.265H43.727Z"
      fill="url(#g)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={38.508}
        y1={36}
        x2={38.508}
        y2={84.992}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D9DEFB" />
        <Stop offset={1} stopColor="#4460FF" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={37.266}
        y1={45.099}
        x2={37.266}
        y2={53.966}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#2196F3" />
        <Stop offset={1} stopColor="#005FAA" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={43.156}
        y1={25.333}
        x2={32.489}
        y2={36}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#2196F3" />
        <Stop offset={1} stopColor="#005FAA" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={48.648}
        y1={18.281}
        x2={47.382}
        y2={31.781}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D9DEFB" />
        <Stop offset={1} stopColor="#4460FF" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={48.649}
        y1={18.281}
        x2={47.383}
        y2={31.781}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D9DEFB" />
        <Stop offset={1} stopColor="#4460FF" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={48.649}
        y1={18.281}
        x2={47.383}
        y2={31.781}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D9DEFB" />
        <Stop offset={1} stopColor="#4460FF" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={36.673}
        y1={51.363}
        x2={36.673}
        y2={63}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#455A64" />
        <Stop offset={1} stopColor="#18313C" />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default NotebookMensagemIcon
