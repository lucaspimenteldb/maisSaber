import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={17}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.5 7.65a.85.85 0 0 0-.85.85v3.4a.85.85 0 0 0 1.7 0V8.5a.85.85 0 0 0-.85-.85Zm.323-3.332a.85.85 0 0 0-.646 0 .85.85 0 0 0-.28.179.978.978 0 0 0-.179.28.85.85 0 0 0 .178.926.978.978 0 0 0 .281.179A.85.85 0 0 0 9.35 5.1a.892.892 0 0 0-.246-.603.85.85 0 0 0-.281-.179ZM8.5 0a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm0 15.3a6.8 6.8 0 1 1 0-13.6 6.8 6.8 0 0 1 0 13.6Z"
      fill="#000"
      fillOpacity={0.4}
    />
  </Svg>
)

export default SvgComponent
