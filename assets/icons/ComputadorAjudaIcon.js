import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={55}
    height={55}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30.95 9.743c0-.876-.625-1.587-1.395-1.587H7.665c-1.357 0-2.657.614-3.616 1.704-.959 1.091-1.496 2.573-1.496 4.115v31.48c0 .876.622 1.587 1.394 1.587h46.945c.771 0 1.394-.711 1.394-1.587V17.93c0-.563-.26-1.081-.686-1.367a1.246 1.246 0 0 0-1.383-.021 1.89 1.89 0 0 1-1.015.298H38.106c-.282 0-.56.098-.791.282l-4.518 3.55-.178-2.937c-.032-.514-.279-.977-.666-1.244-.139-.1-.271-.216-.39-.351a2.564 2.564 0 0 1-.613-1.687v-4.71Z"
      fill="url(#a)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M52.286 37.151H2.553v8.306c0 .876.622 1.587 1.394 1.587h46.945c.771 0 1.394-.711 1.394-1.587V37.15Z"
      fill="url(#b)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M38.54 20.015h10.661c1.296 0 2.54-.586 3.454-1.63.917-1.042 1.431-2.456 1.431-3.93V5.56c0-1.475-.514-2.889-1.43-3.932C51.74.586 50.495 0 49.2 0H33.045c-1.295 0-2.537.586-3.454 1.63-.916 1.042-1.43 2.456-1.43 3.93v8.894c0 1.475.514 2.889 1.43 3.932.093.106.19.207.29.305l.303 4.98c.036.57.337 1.073.787 1.32.452.248.985.2 1.398-.124l6.171-4.852Z"
      fill="url(#c)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M35.931 43.87c-.56 0-1.063.38-1.283.964a.729.729 0 0 1-.137.233.615.615 0 0 1-.458.216H20.785a.615.615 0 0 1-.458-.216.729.729 0 0 1-.137-.233c-.22-.584-.723-.965-1.283-.965H1.394C.624 43.87 0 44.58 0 45.456v2.575c0 1.653.576 3.24 1.604 4.408 1.026 1.17 2.42 1.826 3.872 1.826h43.886c1.451 0 2.846-.656 3.872-1.826 1.028-1.168 1.604-2.755 1.604-4.408v-2.575c0-.876-.624-1.587-1.394-1.587H35.93Z"
      fill="url(#d)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={30.183}
        y1={31.21}
        x2={30.183}
        y2={92.642}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D9DEFB" />
        <Stop offset={1} stopColor="#4460FF" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={28.814}
        y1={42.621}
        x2={28.814}
        y2={53.74}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#2196F3" />
        <Stop offset={1} stopColor="#005FAA" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={35.302}
        y1={17.835}
        x2={22.038}
        y2={29.488}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#2196F3" />
        <Stop offset={1} stopColor="#005FAA" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={28.161}
        y1={50.475}
        x2={28.161}
        y2={65.067}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#455A64" />
        <Stop offset={1} stopColor="#18313C" />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default SvgComponent
