import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={44}
    height={45}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M21.08 31.131a5.513 5.513 0 0 0-7.794-7.795c-2.166 2.15-4.923 12.718-4.923 12.718s10.568-2.756 12.718-4.923Z"
      fill="url(#a)"
    />
    <Path
      d="m28.787 25.58-.904.904a1.103 1.103 0 0 1-1.555 0l-8.368-8.396a1.102 1.102 0 0 1 0-1.554l.904-.877 9.923 9.923Z"
      fill="url(#b)"
    />
    <Path
      d="M43.644.773a23.953 23.953 0 0 1-7.017 16.94l-7.84 7.867-9.922-9.923 7.84-7.866A23.958 23.958 0 0 1 43.644.773Z"
      fill="url(#c)"
    />
    <Path
      d="M21.042 27.234a2.757 2.757 0 0 0-3.859-3.859c-1.102 1.103-2.756 6.615-2.756 6.615s5.556-1.654 6.615-2.756Z"
      fill="url(#d)"
    />
    <Path
      d="M26.003 8.491h-.865a17.877 17.877 0 0 0-12.635 5.231.954.954 0 0 0 .932 1.588 8.109 8.109 0 0 1 5.402.347l7.166-7.166Z"
      fill="url(#e)"
    />
    <Path
      d="M35.926 18.414v.865c0 4.739-1.882 9.283-5.231 12.635a.954.954 0 0 1-1.588-.932 8.109 8.109 0 0 0-.347-5.402l7.166-7.166Z"
      fill="url(#f)"
    />
    <Path
      d="M43.644.773a23.703 23.703 0 0 1-.915 6.55 6.615 6.615 0 0 1-5.634-5.635c2.13-.61 4.334-.917 6.549-.915Z"
      fill="url(#g)"
    />
    <Path
      d="M34.272 13.452a3.308 3.308 0 1 0 0-6.615 3.308 3.308 0 0 0 0 6.615Z"
      fill="url(#h)"
    />
    <Path
      d="M34.273 14.004a3.86 3.86 0 1 1 0-7.719 3.86 3.86 0 0 1 0 7.719Zm0-6.616a2.756 2.756 0 1 0 0 5.512 2.756 2.756 0 0 0 0-5.512Z"
      fill="url(#i)"
    />
    <Path
      d="m28.76 15.657-7.718 7.718"
      stroke="url(#j)"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={8.363}
        y1={28.888}
        x2={22.696}
        y2={28.888}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF8500" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={17.64}
        y1={21.203}
        x2={28.787}
        y2={21.203}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#2B44B4" />
        <Stop offset={1} stopColor="#878C9F" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={31.252}
        y1={25.552}
        x2={31.252}
        y2={0.773}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={14.427}
        y1={26.269}
        x2={21.869}
        y2={26.269}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFCD85" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={12.222}
        y1={12.074}
        x2={26.003}
        y2={12.074}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E8233D" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={26.003}
        y1={-34.507}
        x2={26.003}
        y2={8.491}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E8233D" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={417.329}
        y1={78.575}
        x2={417.329}
        y2={0.773}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E8233D" />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={30.965}
        y1={10.145}
        x2={37.58}
        y2={10.145}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#00D8FF" />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={34.273}
        y1={14.004}
        x2={34.273}
        y2={6.286}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#949AAF" />
      </LinearGradient>
      <LinearGradient
        id="j"
        x1={252.572}
        y1={347.516}
        x2={252.572}
        y2={208.599}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E8233D" />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default SvgComponent
