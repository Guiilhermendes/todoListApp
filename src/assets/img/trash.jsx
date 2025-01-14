import * as React from "react"
import Svg, { Path } from "react-native-svg"

export function Trash(props) {
  return (
    <Svg
      width={18}
      height={19}
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.202 4.985h-1.33v5.522h1.33V4.985zM5.462 4.985h-1.33v5.522h1.33V4.985z"
        fill="gray"
      />
      <Path
        d="M12.478 2.167a.644.644 0 00-.46-.605.62.62 0 00-.184-.045H8.287a2.144 2.144 0 00-4.1 0H.638a.641.641 0 00-.172.027H.452a.641.641 0 00.09 1.246l.711 9.743A1.512 1.512 0 002.683 14h7.104a1.512 1.512 0 001.433-1.467l.708-9.734a.638.638 0 00.55-.632zm-6.241-.952a.937.937 0 01.689.302H5.547a.932.932 0 01.69-.302zm3.55 11.575H2.683c-.081 0-.208-.133-.223-.344L1.758 2.81h8.957l-.701 9.635c-.016.211-.143.344-.227.344z"
        fill="gray"
      />
    </Svg>
  )
}
