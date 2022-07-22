import * as React from "react"
import Svg, { Path } from "react-native-svg"

const HomeTabIcon = (props) => (
  <Svg
    width={20}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m18.417 6.526-6.5-5.698a3.25 3.25 0 0 0-4.334 0l-6.5 5.698A3.25 3.25 0 0 0 0 8.974v9.469a3.25 3.25 0 0 0 3.25 3.25h13a3.25 3.25 0 0 0 3.25-3.25v-9.48a3.25 3.25 0 0 0-1.083-2.437Zm-6.5 13H7.583v-5.417a1.083 1.083 0 0 1 1.084-1.083h2.166a1.084 1.084 0 0 1 1.084 1.083v5.417Zm5.416-1.083a1.083 1.083 0 0 1-1.083 1.083h-2.167v-5.417a3.25 3.25 0 0 0-3.25-3.25H8.667a3.25 3.25 0 0 0-3.25 3.25v5.417H3.25a1.083 1.083 0 0 1-1.083-1.083v-9.48a1.083 1.083 0 0 1 .368-.812l6.5-5.688a1.083 1.083 0 0 1 1.43 0l6.5 5.688a1.083 1.083 0 0 1 .368.812v9.48Z"
      fill={props.color ? props.color : "#EA414F"}
    />
  </Svg>
)

export default HomeTabIcon
