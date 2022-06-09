import * as React from "react"
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  RadialGradient,
  ClipPath,
} from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={51}
    height={49}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M28.395 21.103 10.371 19.6 0 11.023 6.63 4.51l21.58 7.663.185 8.93Z"
        fill="url(#b)"
      />
      <Path
        d="m51 29.135-13.43.103-9.53-17.139 21.58 7.663L51 29.135Z"
        fill="url(#c)"
      />
      <Path
        d="m40.274 11.554-21.58-7.649-12.235.546 9.346 8.193 21.581 7.663 12.234-.545-9.346-8.208Z"
        fill="url(#d)"
      />
      <Path
        d="m37.571 29.238-27.2-9.638 5.434-6.956 21.581 7.663.185 8.931Z"
        fill="url(#e)"
      />
      <Path d="M15.834 49 10.37 19.6l27.2 9.638L15.834 49Z" fill="url(#f)" />
      <Path d="M15.834 49 0 11.023 10.37 19.6 15.835 49Z" fill="url(#g)" />
      <Path
        d="M37.57 29.238 51 29.135 15.832 49 37.57 29.238Z"
        fill="url(#h)"
      />
      <Path
        d="m51 29.12-13.443-.103a.21.21 0 0 0-.142.07.225.225 0 0 0-.057.15.212.212 0 0 0 .037.13.2.2 0 0 0 .105.077h.071s13.444-.265 13.43-.324Z"
        fill="url(#i)"
      />
      <Path
        d="m37.77 29.032-.17-8.518c1.593-.089 11.992-.693 12.02-.752l-12.206.324-21.51-7.633s-8.933-7.81-9.246-7.958c0 0 7.682 7.103 8.848 8.179l-5.164 6.617L0 11.023l10.186 8.695 5.05 27.16c.132.718.337 1.42.612 2.093.085 0-4.581-25.687-5.193-29.076l26.503 9.431C34.654 31.61 15.82 48.912 15.82 49c0 .088 1.65-1.238 1.665-1.238l20.158-18.288S51 29.164 51 29.134c-1.906-.073-11.694-.102-13.23-.102ZM15.876 12.909l21.34 7.56.17 8.46-26.66-9.447 5.15-6.572Z"
        fill="url(#j)"
      />
      <Path
        opacity={0.54}
        d="m8.706 6.204-6.245 6.78 2.532 2.21L11.14 8.65 8.706 6.204Z"
        fill="url(#k)"
      />
      <Path
        opacity={0.54}
        d="m13.201 10.36-5.448 7.059 1.223 1.017 5.449-7.074L13.2 10.36Z"
        fill="url(#l)"
      />
      <Path
        opacity={0.54}
        d="m14.212 21.044 1.636 27.941 1.593-26.88-3.23-1.06Z"
        fill="url(#m)"
      />
      <Path
        opacity={0.54}
        d="m14.212 21.044 4.58-7.324 2.917 1.031-4.268 7.354-3.23-1.06Z"
        fill="url(#n)"
      />
      <Path
        d="m16.986 12.114.754-4.17-1.864 3.772-2.433.324 1.736 1.798-.768 4.17 1.877-3.772 2.433-.324-1.735-1.798Z"
        fill="url(#o)"
      />
      <Path
        d="m17.299 12.762 2.83-3.065-3.556 2.107-2.205-1.105.498 2.49-2.83 3.066 3.556-2.108 2.205 1.106-.498-2.49Z"
        fill="url(#p)"
      />
      <Path
        d="M10.641 5.895A4.565 4.565 0 0 0 10.47 2.5a4.413 4.413 0 0 0-1.005-1.386 4.238 4.238 0 0 0-1.441-.88 4.13 4.13 0 0 0-3.29.237 4.293 4.293 0 0 0-1.323 1.073 4.467 4.467 0 0 0-.821 1.52 4.564 4.564 0 0 0 .12 3.467c.244.54.591 1.022 1.02 1.42.43.396.932.7 1.477.89a4.13 4.13 0 0 0 3.32-.28A4.302 4.302 0 0 0 9.846 7.45c.363-.458.634-.988.795-1.556Z"
        fill="url(#q)"
      />
      <Path
        d="m6.003 6.322.114-1.562-1.223-.87 1.479.104.84-1.312-.114 1.562 1.237.87-1.493-.103-.84 1.311Z"
        fill="url(#r)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={5.027}
        y1={3.705}
        x2={24.049}
        y2={17.394}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3CD6F4" />
        <Stop offset={0.16} stopColor="#38CCF0" />
        <Stop offset={0.44} stopColor="#2CB1E4" />
        <Stop offset={0.8} stopColor="#1884D0" />
        <Stop offset={1} stopColor="#0C69C4" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={37.474}
        y1={19.937}
        x2={52.393}
        y2={20.705}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3CD6F4" />
        <Stop offset={0.16} stopColor="#38CCF0" />
        <Stop offset={0.44} stopColor="#2CB1E4" />
        <Stop offset={0.8} stopColor="#1884D0" />
        <Stop offset={1} stopColor="#0C69C4" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={25.249}
        y1={-0.822}
        x2={32.841}
        y2={26.373}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3CD6F4" />
        <Stop offset={0.16} stopColor="#38CCF0" />
        <Stop offset={0.44} stopColor="#2CB1E4" />
        <Stop offset={0.8} stopColor="#1884D0" />
        <Stop offset={1} stopColor="#0C69C4" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={16.744}
        y1={12.939}
        x2={50.144}
        y2={43.535}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3CD6F4" />
        <Stop offset={0.16} stopColor="#38CCF0" />
        <Stop offset={0.44} stopColor="#2CB1E4" />
        <Stop offset={0.8} stopColor="#1884D0" />
        <Stop offset={1} stopColor="#0C69C4" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={23.687}
        y1={25.259}
        x2={10.589}
        y2={60.733}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3CD6F4" />
        <Stop offset={0.16} stopColor="#38CCF0" />
        <Stop offset={0.44} stopColor="#2CB1E4" />
        <Stop offset={0.8} stopColor="#1884D0" />
        <Stop offset={1} stopColor="#0C69C4" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={3.698}
        y1={10.614}
        x2={19.623}
        y2={45.227}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3CD6F4" />
        <Stop offset={0.16} stopColor="#38CCF0" />
        <Stop offset={0.44} stopColor="#2CB1E4" />
        <Stop offset={0.8} stopColor="#1884D0" />
        <Stop offset={1} stopColor="#0C69C4" />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={43.498}
        y1={29.085}
        x2={17.736}
        y2={46.816}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3CD6F4" />
        <Stop offset={0.16} stopColor="#38CCF0" />
        <Stop offset={0.44} stopColor="#2CB1E4" />
        <Stop offset={0.8} stopColor="#1884D0" />
        <Stop offset={1} stopColor="#0C69C4" />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={46.797}
        y1={21.117}
        x2={36.526}
        y2={52.025}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFFAFF" />
        <Stop offset={0.09} stopColor="#FFF6FF" stopOpacity={0.97} />
        <Stop offset={0.22} stopColor="#FEEAFE" stopOpacity={0.88} />
        <Stop offset={0.38} stopColor="#FDD8FD" stopOpacity={0.74} />
        <Stop offset={0.57} stopColor="#FBBEFB" stopOpacity={0.55} />
        <Stop offset={0.78} stopColor="#F99CF9" stopOpacity={0.3} />
        <Stop offset={1} stopColor="#F774F6" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="j"
        x1={27.254}
        y1={14.625}
        x2={16.982}
        y2={45.533}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFFAFF" />
        <Stop offset={0.09} stopColor="#FFF6FF" stopOpacity={0.97} />
        <Stop offset={0.22} stopColor="#FEEAFE" stopOpacity={0.88} />
        <Stop offset={0.38} stopColor="#FDD8FD" stopOpacity={0.74} />
        <Stop offset={0.57} stopColor="#FBBEFB" stopOpacity={0.55} />
        <Stop offset={0.78} stopColor="#F99CF9" stopOpacity={0.3} />
        <Stop offset={1} stopColor="#F774F6" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="k"
        x1={5.828}
        y1={8.739}
        x2={8.754}
        y2={11.14}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFFAFF" />
        <Stop offset={0.09} stopColor="#F9F9FF" stopOpacity={0.97} />
        <Stop offset={0.22} stopColor="#E8F6FE" stopOpacity={0.88} />
        <Stop offset={0.38} stopColor="#CDF0FC" stopOpacity={0.74} />
        <Stop offset={0.57} stopColor="#A6E9FA" stopOpacity={0.55} />
        <Stop offset={0.78} stopColor="#75DFF7" stopOpacity={0.3} />
        <Stop offset={1} stopColor="#3AD4F3" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="l"
        x1={9.279}
        y1={12.795}
        x2={13.498}
        y2={14.167}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFFAFF" />
        <Stop offset={0.09} stopColor="#F9F9FF" stopOpacity={0.97} />
        <Stop offset={0.22} stopColor="#E8F6FE" stopOpacity={0.88} />
        <Stop offset={0.38} stopColor="#CDF0FC" stopOpacity={0.74} />
        <Stop offset={0.57} stopColor="#A6E9FA" stopOpacity={0.55} />
        <Stop offset={0.78} stopColor="#75DFF7" stopOpacity={0.3} />
        <Stop offset={1} stopColor="#3AD4F3" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="m"
        x1={10.555}
        y1={32.43}
        x2={20.394}
        y2={35.629}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFFAFF" />
        <Stop offset={0.09} stopColor="#F9F9FF" stopOpacity={0.97} />
        <Stop offset={0.22} stopColor="#E8F6FE" stopOpacity={0.88} />
        <Stop offset={0.38} stopColor="#CDF0FC" stopOpacity={0.74} />
        <Stop offset={0.57} stopColor="#A6E9FA" stopOpacity={0.55} />
        <Stop offset={0.78} stopColor="#75DFF7" stopOpacity={0.3} />
        <Stop offset={1} stopColor="#3AD4F3" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="n"
        x1={15.849}
        y1={16.148}
        x2={20.748}
        y2={17.741}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFFAFF" />
        <Stop offset={0.09} stopColor="#F9F9FF" stopOpacity={0.97} />
        <Stop offset={0.22} stopColor="#E8F6FE" stopOpacity={0.88} />
        <Stop offset={0.38} stopColor="#CDF0FC" stopOpacity={0.74} />
        <Stop offset={0.57} stopColor="#A6E9FA" stopOpacity={0.55} />
        <Stop offset={0.78} stopColor="#75DFF7" stopOpacity={0.3} />
        <Stop offset={1} stopColor="#3AD4F3" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="o"
        x1={17.852}
        y1={8.46}
        x2={14.288}
        y2={16.567}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#FFFDFF" />
      </LinearGradient>
      <LinearGradient
        id="p"
        x1={19.494}
        y1={2.636}
        x2={12.2}
        y2={7.356}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#FFFDFF" />
      </LinearGradient>
      <LinearGradient
        id="r"
        x1={7.372}
        y1={2.325}
        x2={6.08}
        y2={5.25}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#FFFDFF" />
      </LinearGradient>
      <RadialGradient
        id="q"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(4.04458 1.44834 -1.52157 4.24908 8.088 6.57)"
      >
        <Stop stopColor="#fff" />
        <Stop offset={0.28} stopColor="#fff" stopOpacity={0.69} />
        <Stop offset={0.63} stopColor="#fff" stopOpacity={0.32} />
        <Stop offset={0.88} stopColor="#fff" stopOpacity={0.09} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </RadialGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h51v49H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default SvgComponent
