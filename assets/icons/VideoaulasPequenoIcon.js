import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={32}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M28 4H4v15h24V4Z" fill="#D7F1FF" />
    <Path
      d="M28 22H4V5a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v17ZM5 21h22V5H5v16Z"
      fill="#2779DC"
    />
    <Path d="m4 22-4 4h32l-4-4H4Z" fill="url(#a)" />
    <Path
      d="M30 28H2.002c-.53 0-1.04-.208-1.414-.58a1.967 1.967 0 0 1-.586-1.398c0-.05-.81 0 31.998 0 0 .525-.21 1.028-.586 1.399-.375.37-.884.579-1.414.579Z"
      fill="#2779DC"
    />
    <Path d="M19 25h-6l-1 1h8l-1-1Z" fill="url(#b)" />
    <Path d="M28 18H4v1h24v-1Z" fill="#5B8DC9" />
    <Path d="M28 25H4l1.47-2h20.57L28 25Z" fill="url(#c)" />
    <Path
      d="M5.833 19h3.334c.22 0 .433.158.589.44.156.28.244.662.244 1.06V22H5v-1.5c0-.398.088-.78.244-1.06.156-.282.368-.44.59-.44Z"
      fill="url(#d)"
    />
    <Path
      d="M22.833 19h3.334c.22 0 .433.158.589.44.156.28.244.662.244 1.06V22h-5v-1.5c0-.398.088-.78.244-1.06.156-.282.368-.44.59-.44Z"
      fill="url(#e)"
    />
    <Path d="M10 3v5l6 2 6-2V3H10Z" fill="#42455E" />
    <Path d="M27 2 16 4 5 2l11-2 11 2Z" fill="url(#f)" />
    <Path
      d="M19.543 11a.484.484 0 0 1-.323-.12.39.39 0 0 1-.134-.29V4.304l-3.842-1.532a.426.426 0 0 1-.22-.23.37.37 0 0 1 .016-.3.438.438 0 0 1 .242-.21.506.506 0 0 1 .336-.006l4.112 1.639c.08.032.149.084.197.15a.38.38 0 0 1 .073.222v6.553a.39.39 0 0 1-.134.29.485.485 0 0 1-.323.12Z"
      fill="url(#g)"
    />
    <Path
      d="M20.818 14h-.636c-.027.002-.053-.017-.077-.054a.543.543 0 0 1-.064-.162c-.017-.069-.03-.15-.036-.238a2.01 2.01 0 0 1-.001-.266l.107-1.8c.008-.138.03-.26.063-.348.033-.088.073-.135.115-.132h.422c.042-.003.082.044.115.132.032.087.055.21.063.348l.107 1.8c.006.088.005.18-.001.267a1.445 1.445 0 0 1-.036.237.543.543 0 0 1-.064.162c-.024.037-.05.056-.077.054Z"
      fill="url(#h)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={0}
        y1={24}
        x2={32}
        y2={24}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#44A0FF" />
        <Stop offset={1} stopColor="#326BBB" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={12}
        y1={25.5}
        x2={20}
        y2={25.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D4D8E1" />
        <Stop offset={1} stopColor="#F3F4F5" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={196}
        y1={127}
        x2={1372}
        y2={127}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D4D8E1" />
        <Stop offset={1} stopColor="#F3F4F5" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={65}
        y1={157}
        x2={95}
        y2={157}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D4D8E1" />
        <Stop offset={1} stopColor="#F3F4F5" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={252}
        y1={157}
        x2={282}
        y2={157}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D4D8E1" />
        <Stop offset={1} stopColor="#F3F4F5" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={5}
        y1={2}
        x2={27}
        y2={2}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#474F72" />
        <Stop offset={1} stopColor="#878C9F" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={14.974}
        y1={6.495}
        x2={20}
        y2={6.495}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FBCC88" />
        <Stop offset={1} stopColor="#FFE5C3" />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={58.22}
        y1={93.5}
        x2={63.78}
        y2={93.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FBCC88" />
        <Stop offset={1} stopColor="#FFE5C3" />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default SvgComponent
