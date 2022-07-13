import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ChevronIconRight = (props) => (
  <Svg
    width={9}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.742 1 7 6l-5.258 5"
      stroke={props.color ? props.color : "#000"}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
)

export default ChevronIconRight
