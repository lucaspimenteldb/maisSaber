import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.63 19.37a.543.543 0 0 1-.518-.203.536.536 0 0 1-.063-.55l1.614-3.514A9.648 9.648 0 0 1 3.24 2.478a9.795 9.795 0 0 1 12.8-.194 9.65 9.65 0 0 1 1.96 12.573c-2.593 4.09-7.823 5.654-12.257 3.667L.63 19.37Z"
      fill="#fff"
    />
  </Svg>
)

export default SvgComponent
