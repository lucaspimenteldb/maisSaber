import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={19}
    height={17}
    fill={props.fill ? props.fill : "none" }
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m16.769 8.224-7.27 7.354-7.268-7.333a4.276 4.276 0 0 1 0-6.004l.004-.004a4.106 4.106 0 0 1 5.878.004l.676.683.711.72.711-.72.676-.683.003-.004a4.105 4.105 0 0 1 5.835-.04l.047.047c1.635 1.637 1.64 4.317-.003 5.98Z"
      stroke={props.color ? props.color : "#000"}
      strokeOpacity={0.5}
      strokeWidth={2}
    />
  </Svg>
)

export default SvgComponent
