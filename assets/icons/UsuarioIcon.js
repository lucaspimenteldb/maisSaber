import * as React from "react"
import Svg, { Path } from "react-native-svg"

const UsuarioIcon = (props) => (
  <Svg
    width={28}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12.08 12.79c3.863 0 6.994-2.862 6.994-6.395 0-3.532-3.13-6.395-6.993-6.395-3.863 0-6.994 2.863-6.994 6.395 0 3.533 3.131 6.396 6.994 6.396ZM0 25h24.16c-.849-5.586-5.926-9.884-12.08-9.884S.85 19.414 0 25Z"
      fill="#3B368C"
    />
  </Svg>
)

export default UsuarioIcon
