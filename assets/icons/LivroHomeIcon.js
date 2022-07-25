import * as React from "react"
import Svg, { Path } from "react-native-svg"

const LivroHomeIcon = (props) => (
  <Svg
    width={42}
    height={42}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M36.75 1.75H10.224v31.5H36.75V1.75Z" fill="#6FABE6" />
    <Path
      d="M36.75 1.75c0 30.878-.083 29.842 0 29.842a24.04 24.04 0 0 1-24.04-24.04V1.75h24.04Z"
      fill="#388CDF"
    />
    <Path
      d="M36.75 33.25v6.632H8.566a3.316 3.316 0 0 1 0-6.632H36.75Z"
      fill="#C6C3D8"
    />
    <Path
      d="M36.75 34.08v5.802c-30.422 0-28.839.257-30.074-.597a3.316 3.316 0 0 1 2.72-5.206H36.75Z"
      fill="#DAD7E5"
    />
    <Path
      d="M10.224 1.75v31.5H8.566a3.316 3.316 0 0 0-3.316 3.316V6.724a4.974 4.974 0 0 1 4.974-4.974Z"
      fill="#388CDF"
    />
    <Path d="M31.776 6.724H15.197v6.631h16.58V6.724Z" fill="#9FDBF3" />
    <Path
      d="M31.776 6.724v4.973H21.83a4.974 4.974 0 0 1-4.974-4.973h14.921Z"
      fill="#B2E5FB"
    />
    <Path
      d="M29.29 19.987H17.684a.829.829 0 1 1 0-1.658H29.29a.829.829 0 1 1 0 1.658ZM27.631 23.302h-8.29a.829.829 0 1 1 0-1.657h8.29a.83.83 0 0 1 0 1.657Z"
      fill="#374F68"
    />
    <Path
      d="M36.75 35.737v1.658H10.224a.829.829 0 1 1 0-1.658H36.75Z"
      fill="#C6C3D8"
    />
  </Svg>
)

export default LivroHomeIcon
