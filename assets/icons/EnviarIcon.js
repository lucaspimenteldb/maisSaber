import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={14}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12.447 4.153 3.113.3A2 2 0 0 0 .447 2.767L1.473 6 .42 9.233a2 2 0 0 0 1.873 2.634c.263 0 .524-.053.767-.154l9.367-3.853a2 2 0 0 0 0-3.693l.02-.014Zm-9.874 6.314a.666.666 0 0 1-.706-.127.667.667 0 0 1-.18-.667l.973-3.006h9.153l-9.24 3.8Zm.087-5.134-.993-2.98a.667.667 0 0 1 .18-.666.667.667 0 0 1 .746-.154l9.22 3.8H2.66Z"
      fill="#000"
      fillOpacity={0.4}
    />
  </Svg>
)

export default SvgComponent
