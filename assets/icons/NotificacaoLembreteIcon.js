import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={43}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M23.14 35.266h-4.107a2.771 2.771 0 0 1-2.509-1.595c-.264-.55-.75-.88-1.298-.88H3.236c-.371 0-.671-.348-.671-.778V4.857C2.564 2.179 4.445 0 6.758 0h29.476c2.318 0 4.203 2.183 4.203 4.867v27.146c0 .43-.3.778-.671.778h-12.84c-.567 0-1.078.306-1.305.78-.501 1.045-1.452 1.695-2.482 1.695Zm-19.232-4.03h11.318c1.028 0 1.975.643 2.473 1.678.233.483.756.796 1.334.796h4.108c.541 0 1.042-.343 1.307-.894a2.737 2.737 0 0 1 2.478-1.58h12.169V4.867c0-1.826-1.283-3.311-2.86-3.311H6.76c-1.572 0-2.851 1.48-2.851 3.3v26.38Z"
      fill="url(#a)"
    />
    <Path
      d="M36.145 28.598H6.858c-.371 0-.672-.348-.672-.778V4.972c0-.43.3-.777.672-.777h29.287c.37 0 .671.348.671.777V27.82c0 .43-.3.779-.671.779ZM7.53 27.042h27.943V5.751H7.53v21.291Z"
      fill="url(#b)"
    />
    <Path
      d="M37.964 40H5.037C2.26 40 0 37.384 0 34.168v-1.111c0-1.008.707-1.826 1.577-1.826h13.65c1.001 0 1.937.621 2.442 1.622.266.526.757.852 1.283.852h4.19c.526 0 1.017-.326 1.283-.852.505-1 1.44-1.622 2.442-1.622h14.555c.87 0 1.578.819 1.578 1.826v1.111C43 37.384 40.74 40 37.964 40ZM1.578 32.786c-.129 0-.234.122-.234.27v1.112c0 2.358 1.657 4.276 3.694 4.276h32.926c2.037 0 3.693-1.918 3.693-4.276v-1.111c0-.15-.105-.27-.233-.27H26.867c-.525 0-1.017.325-1.282.851-.505 1-1.441 1.623-2.442 1.623h-4.191c-1.001 0-1.938-.622-2.443-1.623-.265-.526-.756-.852-1.282-.852H1.578Z"
      fill="url(#c)"
    />
    <Path
      d="M32.345 14.473h-11.06c-.371 0-.672-.348-.672-.778 0-.43.3-.778.672-.778h11.06c.372 0 .672.348.672.778 0 .43-.3.778-.672.778Z"
      fill="url(#d)"
    />
    <Path
      d="M17.421 21.88a.634.634 0 0 1-.49-.247l-2.892-3.586-2.892 3.586c-.187.233-.48.31-.737.193-.257-.118-.425-.404-.425-.724V4.972c0-.43.3-.777.671-.777h6.765c.371 0 .672.348.672.777v16.13c0 .32-.169.606-.425.724a.599.599 0 0 1-.247.054Zm-3.382-5.75c.186 0 .364.09.49.246l2.22 2.753V5.749h-5.42v13.38l2.219-2.753a.632.632 0 0 1 .49-.247Z"
      fill="url(#e)"
    />
    <Path
      d="M32.345 19.194h-11.06c-.371 0-.672-.348-.672-.777 0-.43.3-.778.672-.778h11.06c.372 0 .672.348.672.777 0 .43-.3.778-.672.778Z"
      fill="url(#f)"
    />
    <Path
      d="M32.345 23.916h-11.06c-.371 0-.672-.348-.672-.778 0-.43.3-.778.672-.778h11.06c.372 0 .672.348.672.778 0 .43-.3.778-.672.778Z"
      fill="url(#g)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={21.501}
        y1={0}
        x2={21.501}
        y2={35.266}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4B089F" />
        <Stop offset={1} stopColor="#7434C5" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={21.501}
        y1={4.195}
        x2={21.501}
        y2={28.598}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4B089F" />
        <Stop offset={1} stopColor="#7434C5" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={21.5}
        y1={31.231}
        x2={21.5}
        y2={40}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4B089F" />
        <Stop offset={1} stopColor="#7434C5" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={26.815}
        y1={12.917}
        x2={26.815}
        y2={14.473}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4B089F" />
        <Stop offset={1} stopColor="#7434C5" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={14.039}
        y1={4.195}
        x2={14.039}
        y2={21.88}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4B089F" />
        <Stop offset={1} stopColor="#7434C5" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={26.815}
        y1={17.639}
        x2={26.815}
        y2={19.194}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4B089F" />
        <Stop offset={1} stopColor="#7434C5" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={26.815}
        y1={22.36}
        x2={26.815}
        y2={23.916}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4B089F" />
        <Stop offset={1} stopColor="#7434C5" />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default SvgComponent
