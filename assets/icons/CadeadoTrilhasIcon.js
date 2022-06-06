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
    width={36}
    height={45}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M20.194 44.69 6.107 38.007a5.722 5.722 0 0 1-3.15-3.006 5.772 5.772 0 0 1-.137-4.366l3.95-14.56c1.14-2.939 5.776-3.858 8.698-2.732L31.45 19.45a5.722 5.722 0 0 1 3.146 3.002 5.772 5.772 0 0 1 .141 4.359L29.361 40.82c-1.12 2.94-6.233 4.995-9.167 3.87Z"
        fill="url(#b)"
      />
      <Path
        d="M29.017 19.79 13.082 13.68c-2.928-1.123-6.207.354-7.323 3.3L.432 31.033c-1.117 2.945.352 6.242 3.28 7.365l15.936 6.111c2.927 1.123 6.206-.354 7.322-3.299l5.328-14.055c1.116-2.945-.353-6.243-3.28-7.366Z"
        fill="url(#c)"
      />
      <Path
        d="M8.208 19.348a4.597 4.597 0 0 1 2.401-2.564 4.544 4.544 0 0 1 3.5-.1s11.302 3.445 11.942 3.571c-2.991-1.963-13.117-5.879-13.117-5.879a4.543 4.543 0 0 0-4.953 1.133 4.597 4.597 0 0 0-.949 1.52s-5.16 13.02-3.984 14.26c-.16-.803 5.16-11.941 5.16-11.941Z"
        fill="url(#d)"
      />
      <Path
        d="M21.746 27.018a4.34 4.34 0 0 0-.29-3.117 4.301 4.301 0 0 0-2.308-2.101 4.27 4.27 0 0 0-3.112.02 4.303 4.303 0 0 0-2.28 2.133 4.295 4.295 0 0 0 .639 4.19l-2.637 6.89a1.546 1.546 0 0 0 .348 1.692c.146.143.319.255.508.33l1.278.493a1.508 1.508 0 0 0 1.649-.378c.137-.146.244-.318.315-.506l2.637-6.89a4.27 4.27 0 0 0 1.99-.943 4.306 4.306 0 0 0 1.263-1.813Z"
        fill="url(#e)"
      />
      <Path
        d="m12.317 35.86 2.626-6.89a4.324 4.324 0 0 1 .456-6.074 4.266 4.266 0 0 1 6.039.46 4.242 4.242 0 0 0-4.912-1.97 4.293 4.293 0 0 0-2.237 1.58 4.334 4.334 0 0 0 .071 5.212l-2.637 6.89a1.524 1.524 0 0 0 .582 1.802 1.501 1.501 0 0 1 .012-1.01Z"
        fill="url(#f)"
      />
      <Path
        d="m31.233 20.175-3.002-1.149 2.477-6.567a6.838 6.838 0 0 0-.147-5.204 6.779 6.779 0 0 0-3.763-3.575 6.726 6.726 0 0 0-5.173.148 6.785 6.785 0 0 0-3.554 3.785l-2.489 6.556-3.002-1.148 2.489-6.556A10.015 10.015 0 0 1 20.315.879a9.933 9.933 0 0 1 10.934 1.864 10.04 10.04 0 0 1 2.255 3.194 10.09 10.09 0 0 1 .218 7.681l-2.489 6.557Z"
        fill="url(#g)"
      />
      <G opacity={0.43}>
        <Path
          opacity={0.43}
          d="M15.548 8.153a10.016 10.016 0 0 1 3.658-4.69 9.925 9.925 0 0 1 5.657-1.772c2.021 0 3.994.618 5.658 1.772a10.016 10.016 0 0 1 3.657 4.69 10.04 10.04 0 0 0-3.104-5.566A9.92 9.92 0 0 0 19.09 1.529a10.012 10.012 0 0 0-4.021 4.936l-2.455 6.556.982.38 1.952-5.248Z"
          fill="url(#h)"
        />
        <Path
          opacity={0.43}
          d="m29.2 19.394 1.987-5.247a6.788 6.788 0 0 0-.114-5.122 6.719 6.719 0 0 1-.365 3.445l-2.477 6.568.97.356Z"
          fill="url(#i)"
        />
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={9.315}
        y1={13.79}
        x2={28.469}
        y2={43.681}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#CCD8E5" />
        <Stop offset={1} stopColor="#9BACC4" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={8.66}
        y1={13.946}
        x2={24.076}
        y2={43.922}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D5E0EC" />
        <Stop offset={0.95} stopColor="#CCD8E5" />
        <Stop offset={0.97} stopColor="#CCD8E5" />
        <Stop offset={1} stopColor="#DCE7F4" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={9.757}
        y1={13.866}
        x2={17.083}
        y2={31.93}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#C9D4D6" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={14.19}
        y1={21.993}
        x2={18.797}
        y2={36.445}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#5E789E" />
        <Stop offset={0.28} stopColor="#6F84A6" />
        <Stop offset={1} stopColor="#95A1B7" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={14.141}
        y1={22.024}
        x2={18.312}
        y2={35.07}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#546489" />
        <Stop offset={1} stopColor="#7085A6" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={20.325}
        y1={0.813}
        x2={26.946}
        y2={21.539}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#5E789E" />
        <Stop offset={0.28} stopColor="#6F84A6" />
        <Stop offset={1} stopColor="#95A1B7" />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={20.325}
        y1={0.813}
        x2={23.728}
        y2={11.481}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#CCD8E5" />
        <Stop offset={1} stopColor="#9BACC4" />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={28.366}
        y1={9.894}
        x2={31.19}
        y2={18.759}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#546489" />
        <Stop offset={1} stopColor="#7085A6" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(.057)" d="M0 0h35v45H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default SvgComponent
