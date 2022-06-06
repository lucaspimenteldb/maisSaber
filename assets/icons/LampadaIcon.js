import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={50}
    height={50}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M23.438 6.336C12.68 7.523 7.03 20.266 13.953 29a48.903 48.903 0 0 1 6.36 10.063h9.375a44.162 44.162 0 0 1 6.14-9.797c7.922-9.578.305-24.336-12.39-22.93Z"
      fill="#FFC707"
    />
    <Path
      d="M24.258 42.438 18.79 26.03A.78.78 0 0 1 19.72 25l2.788.695 2.063-1.367a.781.781 0 0 1 .86 0l2.062 1.367L30.282 25a.781.781 0 0 1 .968 1.031l-5.468 16.407a.78.78 0 0 1-1.524 0ZM20.72 26.883 25 39.719l4.282-12.836c-1.836.46-2 .578-2.344.328L25 25.938l-1.914 1.273c-.375.25-.546.133-2.367-.328Z"
      fill="#fff"
    />
    <Path
      d="M20.313 39.063h9.375a.781.781 0 0 1 .78.78v4.688a2.344 2.344 0 0 1-2.343 2.344h-6.25a2.344 2.344 0 0 1-2.344-2.344v-4.687a.781.781 0 0 1 .782-.782Z"
      fill="url(#a)"
    />
    <Path
      d="M25 50a3.125 3.125 0 0 1-3.125-3.125h6.25A3.125 3.125 0 0 1 25 50Z"
      fill="url(#b)"
    />
    <Path
      d="M30.469 40.625 19.53 42.188"
      stroke="url(#c)"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M30.469 43.75 19.53 45.313"
      stroke="url(#d)"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M25 4.688a.781.781 0 0 1-.781-.782V.781a.781.781 0 1 1 1.562 0v3.125a.781.781 0 0 1-.781.781ZM36.601 9.492a.781.781 0 0 1-.554-1.336l2.234-2.211a.781.781 0 1 1 1.102 1.11C36.96 9.452 37.03 9.491 36.6 9.491ZM44.531 21.094h-3.125a.781.781 0 0 1 0-1.563h3.125a.781.781 0 0 1 0 1.563ZM38.812 34.906c-.437 0-.36 0-2.765-2.445a.781.781 0 1 1 1.109-1.102l2.203 2.234a.78.78 0 0 1-.547 1.313ZM11.187 34.906a.781.781 0 0 1-.547-1.336l2.203-2.211a.782.782 0 1 1 1.11 1.102c-2.399 2.398-2.328 2.445-2.766 2.445ZM8.594 21.094H5.469a.781.781 0 0 1 0-1.563h3.125a.781.781 0 0 1 0 1.563ZM13.398 9.492c-.43 0-.36-.04-2.758-2.438a.779.779 0 0 1 0-1.109.781.781 0 0 1 1.102 0l2.21 2.21a.78.78 0 0 1-.554 1.337Z"
      fill="#FFC707"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={19.531}
        y1={42.969}
        x2={30.469}
        y2={42.969}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D4D8E1" />
        <Stop offset={1} stopColor="#F3F4F5" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={196.875}
        y1={240.625}
        x2={246.875}
        y2={240.625}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#9C9FA5" />
        <Stop offset={1} stopColor="#F3F4F5" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={18.75}
        y1={41.406}
        x2={31.25}
        y2={41.406}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#949AAF" />
        <Stop offset={1} stopColor="#C6CCDA" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={282.031}
        y1={132.812}
        x2={30.469}
        y2={132.812}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#949AAF" />
        <Stop offset={1} stopColor="#C6CCDA" />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default SvgComponent
