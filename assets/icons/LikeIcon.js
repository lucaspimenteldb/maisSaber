import * as React from "react"
import Svg, { Path } from "react-native-svg"

const LikeIcon = (props) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M25.3 14.08A3 3 0 0 0 23 13h-4.56l.56-1.43A4.13 4.13 0 0 0 15.11 6a1 1 0 0 0-.91.59L11.35 13H9a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h12.73a3 3 0 0 0 2.95-2.46l1.27-7a3 3 0 0 0-.65-2.46ZM11 24H9a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2v9Zm13-7.82-1.27 7a1 1 0 0 1-1 .82H13v-9.79l2.72-6.12a2.11 2.11 0 0 1 1.38 2.78l-.53 1.43a2 2 0 0 0 1.87 2.7H23a1 1 0 0 1 .77.36 1.002 1.002 0 0 1 .23.82Z"
      fill="#fff"
    />
  </Svg>
)

export default LikeIcon
