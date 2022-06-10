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
    width={27}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M9.733 22.372a3.984 3.984 0 0 0 1.184-2.857 3.99 3.99 0 0 0-1.236-2.838 4.301 4.301 0 0 0-2.946-1.19 4.307 4.307 0 0 0-2.968 1.14C2.11 18.213 0 26 0 26s8.087-2.031 9.733-3.628Z"
        fill="url(#b)"
      />
      <Path
        d="m15.63 18.281-.691.667a.86.86 0 0 1-.595.236.86.86 0 0 1-.595-.236L7.345 12.76a.797.797 0 0 1-.245-.572c0-.215.088-.421.245-.573l.692-.646 7.594 7.312Z"
        fill="url(#c)"
      />
      <Path
        d="M27 0c0 2.319-.474 4.614-1.395 6.756a17.622 17.622 0 0 1-3.975 5.728l-6 5.797-7.593-7.312 6-5.797C17.473 1.86 22.136 0 27 0Z"
        fill="url(#d)"
      />
      <Path
        d="M9.703 19.5c.305-.391.453-.875.417-1.363a2 2 0 0 0-.613-1.292 2.167 2.167 0 0 0-2.757-.189c-.844.813-2.11 4.875-2.11 4.875s4.253-1.218 5.063-2.031Z"
        fill="url(#e)"
      />
      <Path
        d="M13.5 5.688h-.662c-3.627 0-7.104 1.386-9.67 3.855a.682.682 0 0 0-.108.848.722.722 0 0 0 .354.294.756.756 0 0 0 .467.028 6.428 6.428 0 0 1 4.135.256L13.5 5.688Z"
        fill="url(#f)"
      />
      <Path
        d="M21.094 13v.638c0 3.492-1.44 6.84-4.004 9.311a.753.753 0 0 1-.88.104.711.711 0 0 1-.306-.34.678.678 0 0 1-.029-.45 5.77 5.77 0 0 0-.266-3.982L21.094 13Z"
        fill="url(#g)"
      />
      <Path
        d="M27 0a16.867 16.867 0 0 1-.7 4.826 5.138 5.138 0 0 1-2.878-1.38A4.81 4.81 0 0 1 21.988.674C23.618.225 25.305-.002 27 0Z"
        fill="url(#h)"
      />
      <Path
        d="M19.828 9.344c1.398 0 2.531-1.092 2.531-2.438S21.226 4.47 19.83 4.47c-1.399 0-2.532 1.091-2.532 2.437 0 1.346 1.133 2.438 2.531 2.438Z"
        fill="url(#i)"
      />
      <Path
        d="M19.828 9.75a3.034 3.034 0 0 1-1.64-.48A2.87 2.87 0 0 1 17.1 7.996a2.747 2.747 0 0 1-.168-1.644 2.813 2.813 0 0 1 .808-1.456 2.99 2.99 0 0 1 1.512-.778 3.059 3.059 0 0 1 1.706.162c.54.215 1.001.58 1.326 1.047a2.77 2.77 0 0 1 .497 1.58c0 .754-.31 1.478-.865 2.011a3.012 3.012 0 0 1-2.088.833Zm0-4.875c-.417 0-.825.12-1.172.342a2.05 2.05 0 0 0-.777.912c-.16.371-.201.78-.12 1.174.082.394.283.755.578 1.04.295.284.67.477 1.08.555.409.079.833.039 1.218-.115.386-.154.715-.414.947-.748.232-.334.355-.727.355-1.129 0-.538-.222-1.055-.617-1.436a2.151 2.151 0 0 0-1.492-.595Z"
        fill="url(#j)"
      />
      <Path
        d="m15.61 10.969-5.907 5.687"
        stroke="url(#k)"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={0}
        y1={20.719}
        x2={10.969}
        y2={20.719}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF8500" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={7.1}
        y1={15.056}
        x2={15.631}
        y2={15.056}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#2B44B4" />
        <Stop offset={1} stopColor="#878C9F" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={17.517}
        y1={18.261}
        x2={17.517}
        y2={0}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={4.641}
        y1={18.789}
        x2={10.336}
        y2={18.789}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFCD85" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={2.953}
        y1={8.328}
        x2={13.5}
        y2={8.328}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E8233D" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={13.5}
        y1={-26}
        x2={13.5}
        y2={5.688}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E8233D" />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={312.978}
        y1={57.336}
        x2={312.978}
        y2={0}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E8233D" />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={17.297}
        y1={6.906}
        x2={22.359}
        y2={6.906}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#00D8FF" />
      </LinearGradient>
      <LinearGradient
        id="j"
        x1={19.828}
        y1={9.75}
        x2={19.828}
        y2={4.063}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#949AAF" />
      </LinearGradient>
      <LinearGradient
        id="k"
        x1={186.891}
        y1={255.531}
        x2={186.891}
        y2={153.156}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E8233D" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v26H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default SvgComponent
