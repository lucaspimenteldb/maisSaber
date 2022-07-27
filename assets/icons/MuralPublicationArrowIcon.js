import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M7.089 7.89 5.556 9.415a.667.667 0 0 0 .217 1.093.667.667 0 0 0 .73-.146l2.666-2.667a.667.667 0 0 0 .14-.22.667.667 0 0 0 0-.507.667.667 0 0 0-.14-.22L6.502 4.083a.67.67 0 0 0-.946.946l1.533 1.527H.696a.667.667 0 0 0 0 1.333h6.393ZM6.696.555a6.667 6.667 0 0 0-6 3.7.67.67 0 0 0 1.2.6 5.333 5.333 0 1 1 4.8 7.7 5.287 5.287 0 0 1-4.774-2.967.67.67 0 1 0-1.2.6A6.666 6.666 0 1 0 6.696.556Z"
      fill={props.color ? props.color : "#4B089F"}
    />
  </Svg>
)

export default SvgComponent
