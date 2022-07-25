import * as React from "react"
import Svg, { Path } from "react-native-svg"

const AgendaTabIcon = (props) => (
  <Svg
    width={20}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14.083 13.014H5.417a1.083 1.083 0 0 0-.766 1.851c.203.204.478.318.766.318h8.666a1.083 1.083 0 0 0 .766-1.851 1.083 1.083 0 0 0-.766-.318Zm0-4.338h-6.5a1.083 1.083 0 0 0-.766 1.851c.203.204.479.318.766.318h6.5a1.083 1.083 0 0 0 .766-1.851 1.083 1.083 0 0 0-.766-.318Zm4.334-6.507h-3.25V1.084A1.085 1.085 0 0 0 14.083 0 1.083 1.083 0 0 0 13 1.085v1.084h-2.167V1.084A1.085 1.085 0 0 0 8.984.319c-.203.203-.317.479-.317.766V2.17H6.5V1.084A1.085 1.085 0 0 0 5.417 0a1.083 1.083 0 0 0-1.084 1.085v1.084h-3.25A1.083 1.083 0 0 0 0 3.253v15.183a3.255 3.255 0 0 0 3.25 3.254h13a3.248 3.248 0 0 0 3.25-3.254V3.253a1.085 1.085 0 0 0-1.083-1.084Zm-1.084 16.267a1.085 1.085 0 0 1-1.083 1.085h-13a1.083 1.083 0 0 1-1.083-1.085V4.338h2.166v1.085a1.085 1.085 0 0 0 1.084 1.084A1.083 1.083 0 0 0 6.5 5.423V4.338h2.167v1.085a1.085 1.085 0 0 0 1.849.766c.203-.203.317-.479.317-.766V4.338H13v1.085a1.085 1.085 0 0 0 1.85.766c.203-.203.317-.479.317-.766V4.338h2.166v14.098Z"
      fill={props.color ? props.color : "#6B6B6B"}
    />
  </Svg>
)

export default AgendaTabIcon