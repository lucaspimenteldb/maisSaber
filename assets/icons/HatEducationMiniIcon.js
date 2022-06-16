import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={12}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m11.428 3.394-.524-.31L6.19.256h-.058a.526.526 0 0 0-.1-.034H5.84a.58.58 0 0 0-.105.034h-.058L.961 3.083a.546.546 0 0 0-.194.207.6.6 0 0 0 0 .57.546.546 0 0 0 .194.207l1.305.78v2.68c0 .45.165.88.46 1.199.295.318.694.497 1.111.497h4.191c.417 0 .817-.179 1.112-.497.294-.318.46-.75.46-1.2V4.848l1.048-.633V5.83c0 .15.055.293.153.4a.505.505 0 0 0 .37.165c.14 0 .273-.06.371-.166a.589.589 0 0 0 .154-.4V3.887a.6.6 0 0 0-.072-.285.545.545 0 0 0-.196-.207ZM8.552 7.527c0 .15-.055.293-.153.4a.505.505 0 0 1-.37.165H3.836a.505.505 0 0 1-.37-.166.589.589 0 0 1-.154-.4V5.476l2.363 1.413.079.034h.047a.486.486 0 0 0 .13 0 .486.486 0 0 0 .132 0h.047a.236.236 0 0 0 .079-.034l2.362-1.413v2.052Zm-2.62-1.775L2.298 3.569l3.636-2.182L9.569 3.57 5.933 5.752Z"
      fill="#000"
      fillOpacity={0.4}
    />
  </Svg>
)

export default SvgComponent
