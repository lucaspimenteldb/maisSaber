import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={10}
    height={11}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3.355 3.603 4.5 2.453v4.796a.5.5 0 1 0 1 0V2.453l1.145 1.15a.5.5 0 0 0 .82-.163.5.5 0 0 0-.11-.547l-2-2A.5.5 0 0 0 5.19.788a.5.5 0 0 0-.38 0 .5.5 0 0 0-.165.105l-2 2a.502.502 0 0 0 .71.71ZM9.5 5.75a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-3a.5.5 0 1 0-1 0v3a1.5 1.5 0 0 0 1.5 1.501h7a1.5 1.5 0 0 0 1.5-1.5V6.249a.5.5 0 0 0-.5-.5Z"
      fill="#000"
      fillOpacity={0.7}
    />
  </Svg>
)

export default SvgComponent
