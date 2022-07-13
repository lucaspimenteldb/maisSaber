import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ChevronIconLeft = (props) => (
  <Svg
    width={9}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M7.258 1 2 6l5.258 5"
      stroke={'#4B089F'}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
)

export default ChevronIconLeft
