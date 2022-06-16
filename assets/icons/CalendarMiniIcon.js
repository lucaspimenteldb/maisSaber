import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={9}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M7.65 1.12h-.9V.67a.45.45 0 0 0-.9 0v.45h-2.7V.67a.45.45 0 0 0-.9 0v.45h-.9A1.35 1.35 0 0 0 0 2.47v5.4a1.35 1.35 0 0 0 1.35 1.35h6.3A1.35 1.35 0 0 0 9 7.87v-5.4a1.35 1.35 0 0 0-1.35-1.35Zm.45 6.75a.45.45 0 0 1-.45.45h-6.3a.45.45 0 0 1-.45-.45V4.72h7.2v3.15Zm0-4.05H.9V2.47a.45.45 0 0 1 .45-.45h.9v.45a.45.45 0 1 0 .9 0v-.45h2.7v.45a.45.45 0 1 0 .9 0v-.45h.9a.45.45 0 0 1 .45.45v1.35Z"
      fill="#000"
      fillOpacity={0.5}
    />
  </Svg>
)

export default SvgComponent
