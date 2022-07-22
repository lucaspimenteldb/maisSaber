import * as React from "react"
import Svg, { Path } from "react-native-svg"

const VideoTabIcon = (props) => (
  <Svg
    width={20}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M19.025 13.014h-.975V2.169h.975a.928.928 0 0 0 .69-.318c.182-.203.285-.479.285-.767 0-.287-.103-.563-.286-.766A.928.928 0 0 0 19.025 0H1.475a.928.928 0 0 0-.69.318 1.15 1.15 0 0 0-.285.766c0 .288.103.564.286.767.182.204.43.318.689.318h.975v10.845h-.975a.928.928 0 0 0-.69.318c-.182.203-.285.479-.285.766 0 .288.103.564.286.767.182.204.43.318.689.318h7.8v1.247l-4.436 3.253a1.067 1.067 0 0 0-.398.537 1.2 1.2 0 0 0-.024.695c.061.228.188.427.361.567.173.14.383.213.597.208a.853.853 0 0 0 .536-.185l3.364-2.472v1.572c0 .288.103.564.286.767.182.203.43.318.689.318a.928.928 0 0 0 .69-.318 1.15 1.15 0 0 0 .285-.767v-1.572l3.364 2.472a.853.853 0 0 0 .536.185.913.913 0 0 0 .577-.217c.167-.139.29-.334.35-.556a1.2 1.2 0 0 0-.017-.677 1.075 1.075 0 0 0-.374-.535l-4.436-3.253v-1.27h7.8a.928.928 0 0 0 .69-.317c.182-.203.285-.48.285-.767 0-.287-.103-.563-.286-.767a.928.928 0 0 0-.689-.317Zm-2.925 0H4.4V2.169h11.7v10.845Zm-8.18-1.887c.26.17.556.26.858.26.302 0 .598-.09.858-.26L12.56 9.24c.25-.17.456-.41.6-.695.143-.285.218-.606.218-.932 0-.326-.075-.647-.218-.932a1.837 1.837 0 0 0-.6-.695L9.636 4.1a1.56 1.56 0 0 0-.858-.26c-.302 0-.598.09-.858.26a1.77 1.77 0 0 0-.629.695c-.149.29-.225.62-.22.954v3.774c.002.327.081.647.23.93.15.281.363.514.619.675ZM9.02 6.16l2.204 1.431-2.223 1.432.02-2.863Z"
      fill={props.color ? props.color : "#6B6B6B"}
    />
  </Svg>
)

export default VideoTabIcon
