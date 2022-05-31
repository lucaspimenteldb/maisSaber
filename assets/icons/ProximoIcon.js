import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ProximoIcon = (props) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M11.613 9.72a1.339 1.339 0 1 0-1.893 1.893L14.12 16l-4.4 4.387a1.333 1.333 0 0 0 0 1.893 1.333 1.333 0 0 0 1.893 0l5.334-5.333a1.333 1.333 0 0 0 0-1.894L11.613 9.72Zm9.72-.387A1.333 1.333 0 0 0 20 10.667v10.666a1.333 1.333 0 1 0 2.667 0V10.667a1.333 1.333 0 0 0-1.334-1.334Z"
      fill="#fff"
    />
  </Svg>
)

export default ProximoIcon
