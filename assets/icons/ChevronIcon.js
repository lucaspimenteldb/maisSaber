import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ChevronIcon = (props) => (
  <Svg
    width={10}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8 2 2 7l6 5"
      stroke={props.color ? props.color : "#fff"}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default ChevronIcon
