import * as React from "react"
import Svg, { Path } from "react-native-svg"

const FecharIcon = (props) => (
  <Svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="m5 5 6 6m6 6-6-6m0 0 6-6L5 17" stroke={props.color ? props.color : "#fff"} strokeWidth={2} />
  </Svg>
)

export default FecharIcon
