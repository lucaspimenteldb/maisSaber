import * as React from "react"
import Svg, { Path } from "react-native-svg"

const FacebookIcon = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 2a9.65 9.65 0 0 0-10 9.7 9.51 9.51 0 0 0 3.14 7.18.81.81 0 0 1 .27.56v1.78a.81.81 0 0 0 1.13.71l2-.87a.75.75 0 0 1 .53 0 11 11 0 0 0 2.9.38A9.72 9.72 0 0 0 12 2Zm6 7.46-2.93 4.66a1.499 1.499 0 0 1-2.17.4l-2.34-1.75a.6.6 0 0 0-.72 0l-3.16 2.4a.47.47 0 0 1-.68-.63l2.93-4.66a1.5 1.5 0 0 1 2.17-.4l2.34 1.75a.6.6 0 0 0 .72 0l3.16-2.4a.47.47 0 0 1 .68.63Z"
      fill="#fff"
    />
  </Svg>
)

export default FacebookIcon
