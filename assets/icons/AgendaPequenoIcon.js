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
        d="M.844 4.063H11.39c.56 0 1.096.214 1.491.594.396.381.618.898.618 1.437v15.031H0V4.875c0-.215.089-.422.247-.575a.86.86 0 0 1 .597-.237Z"
        fill="url(#b)"
      />
      <Path
        d="M1.688 18.688H13.5v1.625H2.531a.86.86 0 0 1-.596-.238.797.797 0 0 1-.248-.575v-.813Z"
        fill="#AAA"
      />
      <Path
        d="M13.5 4.469a4.33 4.33 0 0 0-1.401-.902 4.46 4.46 0 0 0-1.653-.317H1.688a.86.86 0 0 0-.597.238.798.798 0 0 0-.247.575V18.28c0 .216.089.422.247.575a.86.86 0 0 0 .597.238h8.758a4.41 4.41 0 0 1 3.054 1.218c.042.041 0-.052 0-15.843Z"
        fill="#fff"
      />
      <Path
        d="M26.156 21.125H13.5V6.094c0-.539.222-1.056.618-1.437.395-.38.932-.595 1.491-.595h10.547a.86.86 0 0 1 .597.238.798.798 0 0 1 .247.575v15.438a.797.797 0 0 1-.247.574.86.86 0 0 1-.597.238Z"
        fill="url(#c)"
      />
      <Path
        d="M24.469 20.313H13.5v-1.625h11.813v.812a.797.797 0 0 1-.248.575.86.86 0 0 1-.596.238Z"
        fill="#AAA"
      />
      <Path
        d="M13.5 4.469a4.33 4.33 0 0 1 1.401-.902 4.46 4.46 0 0 1 1.654-.317h8.758a.86.86 0 0 1 .596.238.797.797 0 0 1 .247.575V18.28a.797.797 0 0 1-.247.575.86.86 0 0 1-.596.238h-8.758a4.41 4.41 0 0 0-3.055 1.218c-.042.041 0-.052 0-15.843Z"
        fill="#fff"
      />
      <Path
        d="M13.5 21.938a.86.86 0 0 1-.597-.238.797.797 0 0 1-.247-.575h1.688a.797.797 0 0 1-.247.575.86.86 0 0 1-.597.238Z"
        fill="url(#d)"
      />
      <Path
        d="M23.625 5.688h-7.594a.43.43 0 0 1-.298-.12.399.399 0 0 1 0-.574.43.43 0 0 1 .298-.119h7.594a.43.43 0 0 1 .298.119c.08.076.124.18.124.287a.399.399 0 0 1-.124.288.43.43 0 0 1-.298.119Z"
        fill="url(#e)"
      />
      <Path
        d="M23.625 7.719h-7.594a.43.43 0 0 1-.298-.12.399.399 0 0 1 0-.574.43.43 0 0 1 .298-.119h7.594a.43.43 0 0 1 .298.12c.08.075.124.179.124.287a.399.399 0 0 1-.124.287.43.43 0 0 1-.298.119Z"
        fill="url(#f)"
      />
      <Path
        d="M23.625 9.75h-7.594a.43.43 0 0 1-.298-.119.399.399 0 0 1 0-.575.43.43 0 0 1 .298-.118h7.594a.43.43 0 0 1 .298.118.399.399 0 0 1 0 .575.43.43 0 0 1-.298.119Z"
        fill="url(#g)"
      />
      <Path
        d="M23.625 11.781h-7.594a.43.43 0 0 1-.298-.119.399.399 0 0 1 0-.574.43.43 0 0 1 .298-.12h7.594a.43.43 0 0 1 .298.12.4.4 0 0 1 .124.287.4.4 0 0 1-.124.287.43.43 0 0 1-.298.12Z"
        fill="url(#h)"
      />
      <Path
        d="M23.625 13.813h-7.594a.43.43 0 0 1-.298-.12.399.399 0 0 1 0-.574.43.43 0 0 1 .298-.119h7.594a.43.43 0 0 1 .298.119c.08.076.124.18.124.287a.399.399 0 0 1-.124.287.43.43 0 0 1-.298.12Z"
        fill="url(#i)"
      />
      <Path
        d="M23.625 15.844h-7.594a.43.43 0 0 1-.298-.12.399.399 0 0 1 0-.574.43.43 0 0 1 .298-.119h7.594a.43.43 0 0 1 .298.12.4.4 0 0 1 .124.287.4.4 0 0 1-.124.287.43.43 0 0 1-.298.119Z"
        fill="url(#j)"
      />
      <Path
        d="M23.625 17.875h-7.594a.43.43 0 0 1-.298-.119.399.399 0 0 1 0-.575.43.43 0 0 1 .298-.119h7.594a.43.43 0 0 1 .298.12c.08.076.124.179.124.287a.399.399 0 0 1-.124.287.43.43 0 0 1-.298.119Z"
        fill="url(#k)"
      />
      <Path
        d="M10.969 5.688H3.375a.43.43 0 0 1-.298-.12.399.399 0 0 1 0-.574.43.43 0 0 1 .298-.119h7.594a.43.43 0 0 1 .298.119.399.399 0 0 1 0 .575.43.43 0 0 1-.298.119Z"
        fill="url(#l)"
      />
      <Path
        d="M10.969 7.719H3.375a.43.43 0 0 1-.298-.12.399.399 0 0 1 0-.574.43.43 0 0 1 .298-.119h7.594a.43.43 0 0 1 .298.12.399.399 0 0 1 0 .574.43.43 0 0 1-.298.119Z"
        fill="url(#m)"
      />
      <Path
        d="M10.969 9.75H3.375a.43.43 0 0 1-.298-.119.399.399 0 0 1 0-.575.43.43 0 0 1 .298-.118h7.594a.43.43 0 0 1 .298.118.399.399 0 0 1 0 .575.43.43 0 0 1-.298.119Z"
        fill="url(#n)"
      />
      <Path
        d="M10.969 11.781H3.375a.43.43 0 0 1-.298-.119.399.399 0 0 1 0-.574.43.43 0 0 1 .298-.12h7.594a.43.43 0 0 1 .298.12.399.399 0 0 1 0 .574.43.43 0 0 1-.298.12Z"
        fill="url(#o)"
      />
      <Path
        d="M10.969 13.813H3.375a.43.43 0 0 1-.298-.12.399.399 0 0 1 0-.574.43.43 0 0 1 .298-.119h7.594a.43.43 0 0 1 .298.119.399.399 0 0 1 0 .575.43.43 0 0 1-.298.118Z"
        fill="url(#p)"
      />
      <Path
        d="M10.969 15.844H3.375a.43.43 0 0 1-.298-.12.399.399 0 0 1 0-.574.43.43 0 0 1 .298-.119h7.594a.43.43 0 0 1 .298.12.399.399 0 0 1 0 .574.43.43 0 0 1-.298.119Z"
        fill="url(#q)"
      />
      <Path
        d="M10.969 17.875H3.375a.43.43 0 0 1-.298-.119.399.399 0 0 1 0-.575.43.43 0 0 1 .298-.119h7.594a.43.43 0 0 1 .298.12.399.399 0 0 1 0 .574.43.43 0 0 1-.298.119Z"
        fill="url(#r)"
      />
      <Path
        d="m12.656 23.156-.844-.406-.843.406v-19.5c0-.215.089-.422.247-.574a.86.86 0 0 1 .597-.238.86.86 0 0 1 .596.238.797.797 0 0 1 .247.574v19.5Z"
        fill="url(#s)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={0}
        y1={12.594}
        x2={13.5}
        y2={12.594}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DA5466" />
        <Stop offset={1} stopColor="#F4929C" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={13.5}
        y1={4.063}
        x2={0}
        y2={4.063}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DA5466" />
        <Stop offset={1} stopColor="#F4929C" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={63.281}
        y1={64.188}
        x2={70.031}
        y2={64.188}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DA5466" />
        <Stop offset={1} stopColor="#F4929C" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={15.614}
        y1={5.281}
        x2={24.043}
        y2={5.281}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#474F72" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={327.881}
        y1={21.531}
        x2={496.463}
        y2={21.531}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#474F72" />
        <Stop offset={1} stopColor="#878C9F" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={327.881}
        y1={27.625}
        x2={496.463}
        y2={27.625}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#474F72" />
        <Stop offset={1} stopColor="#878C9F" />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={327.881}
        y1={33.719}
        x2={496.463}
        y2={33.719}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#474F72" />
        <Stop offset={1} stopColor="#878C9F" />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={327.881}
        y1={39.813}
        x2={496.463}
        y2={39.813}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#474F72" />
        <Stop offset={1} stopColor="#878C9F" />
      </LinearGradient>
      <LinearGradient
        id="j"
        x1={327.881}
        y1={45.906}
        x2={496.463}
        y2={45.906}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#474F72" />
        <Stop offset={1} stopColor="#878C9F" />
      </LinearGradient>
      <LinearGradient
        id="k"
        x1={327.881}
        y1={52}
        x2={496.463}
        y2={52}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#474F72" />
        <Stop offset={1} stopColor="#878C9F" />
      </LinearGradient>
      <LinearGradient
        id="l"
        x1={62.1}
        y1={4.875}
        x2={230.681}
        y2={4.875}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#474F72" />
        <Stop offset={1} stopColor="#878C9F" />
      </LinearGradient>
      <LinearGradient
        id="m"
        x1={62.1}
        y1={21.531}
        x2={230.681}
        y2={21.531}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#474F72" />
        <Stop offset={1} stopColor="#878C9F" />
      </LinearGradient>
      <LinearGradient
        id="n"
        x1={62.1}
        y1={27.625}
        x2={230.681}
        y2={27.625}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#474F72" />
        <Stop offset={1} stopColor="#878C9F" />
      </LinearGradient>
      <LinearGradient
        id="o"
        x1={62.1}
        y1={33.719}
        x2={230.681}
        y2={33.719}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#474F72" />
        <Stop offset={1} stopColor="#878C9F" />
      </LinearGradient>
      <LinearGradient
        id="p"
        x1={62.1}
        y1={39.813}
        x2={230.681}
        y2={39.813}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#474F72" />
        <Stop offset={1} stopColor="#878C9F" />
      </LinearGradient>
      <LinearGradient
        id="q"
        x1={62.1}
        y1={45.906}
        x2={230.681}
        y2={45.906}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#474F72" />
        <Stop offset={1} stopColor="#878C9F" />
      </LinearGradient>
      <LinearGradient
        id="r"
        x1={62.1}
        y1={52}
        x2={230.681}
        y2={52}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#474F72" />
        <Stop offset={1} stopColor="#878C9F" />
      </LinearGradient>
      <LinearGradient
        id="s"
        x1={10.969}
        y1={13}
        x2={12.656}
        y2={13}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#8CDD79" />
        <Stop offset={1} stopColor="#D4E6B6" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h27v26H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default SvgComponent
