import * as React from "react"
import Svg, { Path } from "react-native-svg"

const LupaIcon = (props) => (
  <Svg
    width={13}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M11.863 6c0 2.923-2.287 5.25-5.057 5.25-2.77 0-5.056-2.327-5.056-5.25S4.037.75 6.806.75c2.77 0 5.057 2.327 5.057 5.25ZM3.903 10.875 1 15"
      stroke="#000"
      strokeOpacity={0.2}
      strokeWidth={1.5}
    />
  </Svg>
)

export default LupaIcon
