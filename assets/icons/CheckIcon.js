import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CheckIcon = (props) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m5 17.222 6.706 6.795L27.08 8"
      stroke="#00E633"
      strokeWidth={6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default CheckIcon
