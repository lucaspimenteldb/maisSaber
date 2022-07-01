import * as React from "react"
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  Pattern,
  Use,
  Image,
} from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path
      d="M33.125 0H6.875a2.5 2.5 0 0 0-2.5 2.5v35a2.5 2.5 0 0 0 2.5 2.5h26.25a2.5 2.5 0 0 0 2.5-2.5v-35a2.5 2.5 0 0 0-2.5-2.5Z"
      fill="url(#a)"
    />
    <Path
      d="M32.5 2.5h-25a.625.625 0 0 0-.625.625v31.25c0 .345.28.625.625.625h25c.345 0 .625-.28.625-.625V3.125A.625.625 0 0 0 32.5 2.5Z"
      fill="#D3E0EF"
    />
    <Path
      d="M20 38.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
      fill="url(#b)"
    />
    <Path fill="url(#c)" d="M6.923 9.091h26.923v26.154H6.923z" />
    <Defs>
      <LinearGradient
        id="a"
        x1={4.375}
        y1={20}
        x2={35.625}
        y2={20}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={1} stopColor="#3471C3" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={18.75}
        y1={37.5}
        x2={21.25}
        y2={37.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D4D8E1" />
        <Stop offset={1} stopColor="#F3F4F5" />
      </LinearGradient>
      <Pattern
        id="c"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#d" transform="matrix(.00498 0 0 .00512 0 -.012)" />
      </Pattern>
      <Image
        id="d"
        width={201}
        height={200}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAADICAYAAABCmsWgAAAACXBIWXMAAC4jAAAuIwF4pT92AAAffklEQVR4nO2dC7AcVZnHT7+7586dua88UFkI4SGEkGiChEBMomEVUYmyLL7WpBbX9RUJC6tlrdnCxS10V1cgq0tZVi1YrkKtW4bHwsoKIT4QHzEEAYOR5RESQpL7mHtnpqd7uqe3vr7d12HuTD9PP6b7/KqmCHN7ps90n39/j/OdcyjDMBCBQOgNTa4NgeAMEQmB4AIRCYHgAksuUHzs3rnjVITQSus1ZP0XgPdP6dKQ/QihKevfj1j/fhxeG7fdOBV3+/MKCdwjZPfOHSCCDW2vMsazvWAJB167iGiig4gEM5YwtiKENvewDlEBVud2eBHB4IWIBAO7d+4YskSxHSG0IgVNuhshdPPGbTc+koK29D1EJCGwxLHdeuF0pXABLtkNG7fdeHsK29Y3EJEEoA/E0QmIZfvGbTfuSlez+gMiEp/s3rkD4o2b+0QcneyxxPJ4upqVbohIPGKlb8FtWd8XDXbmCxu33XhDmhuYJohIPNDn1qMXkA3bSqyKO0QkDkDsoTab3+Y57l2pbWQ4Kpb7RQJ7B4hIevDAVz57niwrPxsqF4sURaWyjRi5Y+O2G7dm5tdghoikC/d+6fqr5IbyvdLgACXwXOraFxEQ1G8mA5HzIQWOHdgCkUQ+TwJBVkLiESu9TWiDiKSN+778tx8BgYCFHShIqWlXjKwgQpkPEYkFWJC63PimYRjU4EAB5SAO6QURSgdEJG0uFgiE41gkinwKWpUoK6zq4tyDiEjAxbr+FEVRvwsCgf/PqZvVjRW7d+7IfWoYEZEg1FCav9NbLfM6gBXhOTIPrY0tu3fu2J6a1iRErkWy6x+v3afr+pzpIFakK1/bvXPHhhS2KzZyK5L7vnz95xW1aU+fJVbEmdvzHMjnUiQQh9Rl5R/a35MEIbkGpZ9TrOLOXJJLkWh66wE7UAcg3UsyWq5cnle3K3ciuedL121XFPXs9vdyNrIehlxak9yJRGvqN3a+V5DEZBrTf5yye+eO3M1DyZVI7r7pum81Na3Y/h64WizLJNeo/mN73oL4XIlEVZtbOt8jrpZvytbc/tyQG5GAFWm1WvNyvDxHRBKAXFmT3IhE1/Srur3PkbGRIOTKmuRCJFAC3xmL2DBM7itzgpKbmYy56CGarv9Nt/eJFQkFZLo293H7PZMLkahq8/Xd3m82tfgbky2ISLLAPTddd1P76Honut7K+iWIEiKSLNAyjMudfkZDUbJ+CaKknAeXK/Mi0ZraWU5/r8sKStOKMRRF1VPQDD8QkfQz9//TZ95hT6jqBQhkarqail/Jclzl3FVvLKSgKX7IfNFjpkWi6fqHvBwHAXxlupq4RVm+elV5bPFidNKfnHwi0Yb44xRrneTMkmmRGIZxgddjFbWJJianUaOhRtuoHoAwhkZHzT+efvbZY2BVEmlIMFZG8aVpIdMDBbreeo2v41stNF2toVpdNsdQ4hpo5DhOBmHY/89ynGlV9v38sVjOjwEQSWb3Psm0SJqaFqgGHsSiK/FZlPPXrpDYjhoysCpgXV5+8dBYzw+mh0zHJZl1tx74ymffl4JmuDK2YFQ+7cwzuh7WR25XposdMyuSpqYtTkEzHGEYprV2w/qeS7TYblc6WutIGjZTjYzMioSh6TUpaIYjb7xgNS0NOGd8bbcr8cbmmAxbEj3VlsTJzeqkH9yuLC8SQerEE8DNzeqkj9yuTEJEkgBe3KxOiNuVHEQkMePHzeqkDwcZM0Fmx0kYhl4oCLyyaOGoNjIyNEAzNBJFEZXLg4EnW7FSEXFS1wmOfgi84DC4Xeve9qdxuF0vWKs29mRqfNz828uHXjp87MiRkVYru1MOMrlnorx319ZKZfpfy+XSAM7vxSSSfsBVJO1ozSYyEDrEcdy70ZI1mdvyOnPulrx3F+y3/u+4BULoDVg4juNONjf+ee6xzNVxZUok8t5dMLfhmhQ0Ja+ULaFkqio4a5bk5hS0Ie+AUDK1FGpmRAJxiB8/mhApW9Bzj2WmnitLliTXuzGlkMzEJlkSSaZnx/UhmXlokcFEAsEFIhJCN3DEds9n5cpmSSRkc/50kZlBxSyJJLNzrPuQF7I08p4ZkUirNsNN2ZOCphDIOEmqgbESUiWbLHvQkjWZ2oA0UyKRVm1+3ko9EqEkw/4sLnuaueyW5XatJK5X7NxiPqCWrJnK2g/LZKm8jbx310rryeZlYGvIbdWPHJXKI48PmSkrq7gLLVmTmZRvJ5kWiR/kvbtASLudPpIrkSxZ03NPl7xBBhMJ3SAxXRtEJIRuZG52YRiISHzQaiaz4jwhWYhI/gh5ehK6QkRiIa3a7Jq6bGnEkuQRIhKftPRmX7U3IMSqtkFE0gbNuK/HZWi52Ps9cwOCYSAiaYeiXDuHng+XK7MDg0EgImmDZrhX3I5pqY04m5QURCRtEJG0Q1EH3A6BCgU9+0IhMUkbRCRtUBR9n5fj9KYSV5OS4IUsFimGgYikDVYa+D5FuZcsgctlGJldIJpMg+6AiKSdJWumaI53jUvA5dIa9VibFiNEJB0QkXRA0czDXo7TG7WsWhOyVkAHRCQd0Cz/JS/HZdSa7CHxyHyISDpgztrwBMMJh7wcm0Frkqm56bggIukCxXLf9HIcWJNmLTNTLypZW8ABF0QkXeDO2fRFimY81Z/oqpKVcROybUUPiEh6QHP8HV6PBWtitPS4m4iTChFJb4hIesCf+7aP0CznKYgFt0udmUyimbi4gQTsvSEicYBm+Y95Pbala0jtz/hkP1qyhlgRB4hIHOCWXXIXwwm/8Hq8rsj9KJStKWhDqiEicYE/79I1FMPKXo/vM6Fcm8UtpXHTt+tuvendH3sHy9JnalrrdJ5nzw3yHY2GckBpqEfdjlt9+qJl29957hVnnlTyvBYVI0iIHygHaVYsfPIbD768/7ljv4/6XIZh/MEwjCcNA/365z/4xk/T8ev90TciWXfltmsNhD5M0/TpHMdiWSFO11to/PiE5+P/7aMXoVVLF3o+HmY68qURqC4O2MJouPa2B5pPHK5ycZ/XMAxD1/Vxran/tNVqfbVfRJNqkVx85bbzKIS+yfHc+VREPa1WrZsvL3xw7cmVbZetKNOs9/4FVcV8cRhSylE03zeNyWONbz/0BH3X/snEG6TrerWpNu/62X99/SNJt8UJ90ndCbBm88dP4XnubkHgHdfmxcFAsYAURUVa033sUG40p5TpcUkojfJehQIPIWVmArFiwVwmNUmrolTG5fqJwxIyUCpGPxmGKTISc/XG91+7RVXVO9IqltQF7hf/2ae+WxiQnuN4LnKB2JSHSoiiPYYbhsEr0+NqS/O3agoUQypTx83APgnk8ZeV2rEXpdnf0ErVrDGaoVlREq9ef9U1kxe+5xNXpaBJryI1IgHr8eY///TLgii8n/Iy8wkjDEOjoaGS9y+cFYqiNxVfvqo56FiroEaMYoFKgOrR56vyxFGhrSGpXM2C5dihwoB050VXfOoHKWjOHKkQyfJNW1ayLPMbjucWJ9UGjudQqTzo/QOGIajTE5TWqPleYwg6ri0WDSqJIyppgWVZKy8+U1FnJl+V6KBRqw5Ji7QiSsLmdVd++g9paV7iIgGBwGw4hmVGkm6LKAn+hGLWbU2z6vRENUhHh8806zOmWJTpCVMwYRe/g9J9sFK1Y4e0qReebrSaStc8tNdkRVLwArd0/fuuOQ4eRtJtSTRwtwUCYQHLpiOHAEIBpisznj+jN5WiPnVc5gqDHCNIbJDgHJZQtZdRBW+TYjgzIwb/ppk/JgngPRCXoc+KEkQBJTGG3kQtTTMFosnVut5UCk73tyE3EM9zc783jbAsO4ZE9GuE0IIkm5dYz1y+acuptkDgZqUJ6Dgsx6DJCaju9Rh2GIbUrE0jTa5VuYFSgeHFwFYaYhejTTSePtPSwRLJmlyD4Lzg5TP2gyDtQgHX6yf/eevpSbUhSXcL5lKncki6ISuoOl3zLpA2jJZeVGcmaXniqKo16mrUJfSQPFCmJ+TG5DFkCcQXIJTqTA2lebwMXK8kg/lERLJ805ab2/cn5FJgSSCQhc5y/Ni42XFUNeTC2IbBN2sVHjqvUjkh64rcwiUYmOSl1at1ECIkD1pNxbc42qnXZHTi+IT5cEgrEMwnlR6O3d2y4pBr4j5vL6BjgH8eWhQOtLSmpFZnp2tQNFOlOZ6iWY6hGU5EVpzRDTv2MFq6YbR0VW8qcqupDlmHenKpvAJWEx4OENCD+1UYkFDMmXhXeJ67DSF0V9znTSImSXzuAlgNuS4jWW4EcqnCAO4YBNc+x0mgtwrWK1J0XZ8r1RElEQkijwQhHSU1MI5y0RWf/FbcI/OximT5pi2ww+36OM9pY5aHNFRUr8ueSlAIsxkweDEMY4pFKkjmwGuS8Dy/BSEUq0ji/sXbYz4f0jQNTVeqps8N7gQRiH/AukDcAhXTUxOVRGMXKGEBaxLnOWOzJMs3bQFf+vI4zpU2q0HRjBl32JsEwbgGjIb34+IRELvBa2amiiRJnE2XxzzGxbLsFXFakzgtSeTTRCHWiMpqjJRLjbVvOMdXyhqEIZRGkTi8EPHFIbMKGF7wb3gP/hZnCT2IlR8cRsvOWfZagedC1W9BLAfWZeLEFJoYnzKtS1xpZIhNLnzPJy6O5WQxxyQbovriKDNUb7lwlXz5JRdLK885AzJRYuvZH8/QlRdda1e4wqApCCdMEXGjkP0yS1KiKnqE87BCwZwtqQpjxllnrGAfXHspeuCRx4y7f/TTxu/+8HyoFDI8jMyByQqKLdinafo6hFAsk7Zim3S1fNOWqV6Dh3BRy36qcC2XCrJTcq1h+sw4ee2iBdXLL1lXuGzjhXRxYH7/cRMKKw4gbsDf77F/k67UYVAwtCsGVoPhRdhOwvw3AALRF6+Yl9c9enwc3XnfQ9r9u3/eUtQmlt4NwT64YiCaKIJ9TdNO7LnzlljKVWIRiTU2sq9nI2gKjS0Y8ZSXh/aCmYd4A2f6lmGY+vo3raQ+ePkl0umnvs71+F5CgclYQnksdHvAurSairlhEMQvbsB5KYY1/0uzPOqcFNZLIJ2AdXnwJ7+c/s1Tv8dWDTFbIyZiLX+BqcAP/8e/xBIuxCWSzQghx7ICuIilsrN7AjMIoVwEp+UYKZdeufLSt7AXr1ox+pqTRhHLer/u3YQCPj88wXFjTvLqdq+gANJllqRXgdjUagp68aVX0P17Hn3lfx/9FSs3lFEcPwcehhDs40ol12vyujjmyccVk6x0OwBiCmCwNDDPosyWjFTNjBUOwGqsfcO5RzdvWn/aktedtGiuDQ0VFYveOzi99M2D7UKB6t8oBIIsSxEEvwIBlEYTLRwdRlvfe9mire+9DD3xzLO1XT/ac/Tx3x1cGuY32ME+vOChKElCqJIkikKr44hL4hLJqV4OAqEoioIEQZh70sA4Bw5xLF4wii5evXxi4fCItGnt+VDScVrnMaqiIeRzHZZ2oVApKfe3CSIQVdXmZanOO2vpwHlnLV1akxtozy/3HSoU+KFb7/i+v4k3HdgDleCKwToDQcRCUVSgpaT8kiqRIOtpY1sVTCiCwOuf3nolv/aNy4Ynxqs9O405vVbVEM/7uyy2UFhlPFTHwUkQgSBLJL0YkES0+ZJ1Jw+WJHTrHd+HOvuXEEInI9+PlvbzNZE6UQkkFoqiYimfz+wKjizLTJZKRX3h4jGhPFwqDA4U4KJSbgIAVyMIIBRDGk5FGW1QgcwOwjr/fl7gatY/4YFwtiWQ550SM14AscD8HRjRT9vU4kyJhKKoqigJ9dEFw2hkbHhYLIhM5zG84LxkaTd3wyv6kg2CZtDRlRN7IKhAkIsVQfYaYjwz0OVP4Cm8ASEE1uVXCKGXA7dfbZrlL2maXhyXSCItamRZdqY0NGgsWDRaLJUHC5Cj74UgcJJbqtmtszjRPHUjl5RQwggEebCivMCq9rXrkSYH63I+QuikwoBUYVnmYNC2gEhgJB9i0qTpW0syazVEddZqDA2KouC5c/AC69gbGnK4REESQgkrkFarhZpN59R6u6taLDgP0gsCXx4ZGz5jbOGIIUriCYqixv22CUbyoewFxsSSpO9EAunbwVLRshpF3slq9EIUOMfOpGkts9OEIU6hhBUIsjN7DtAMDSLxPRpP0zRVKhfHFiwaHS2WihpN08f8fgeMjUFNXlJTjPtGJLzAayOjQ2h0wXBBKoihOgTLMSztMpilNMKb+TiEgkMgaHYJV8e/CzwbOuVYKIjs2MKRhWD9OZ7zvhyNlTI2F+ZIQChpF4livdDQcIllOXwZa4FnHTNRDQVP345SKLgEYlpOl4ySIOArVwbrPzxSHgSxSJLYQBTy5N+C+wVCiTtOSatIbHFENmVVlJwT8tBpoPPgIAqh4BIIMst9nJsGpToMS2PvKyCWwXJRXLBglC8UJE8XOwmhpE0kctTisKFpinar02pgKoNBmIWCUyDIQzZPEPlIV6GHmq5iaYAGy8ILvOtFhwFnEEqzqbluwISDVIjEKkd/BSEkxbHYgY3bzXcLZv2CQyhRCMTN1eJ5JpZ7ApZlaLjED42UIVEgd5umYGPVgR2Io11xiaTnJoKf+NB7lK9/4Tp4eizqdUxUCALrePPtMhWchBEKboEgD1YE0r6QocJ5TjegRGVswYh0561faK0854w4T92VuEQyb/NKKDi84yufV69651sFjmMTqUOIskzFiSBCiUIg5kPAxVq6VShEyeBAgb7l769Bn/v4XyQ6UJKIu7V6+esb3/naDuPU1y1OfEGnKMtUnPAjlCgEgjz8ttkyFDbU1F4cvH39BdL3brlBd3K/oiR2kbzrLRepX/27T4kcy6ZiecCoy1Qcv/eUDZymG1WnY+r0kBaFQJCHmKu9DCVpXrNojAH3y8usUdzEKpKrr7yscv1H35+O5QDbiLpMpRvwBJ+u1NHR0gXFpmZ0HVibMUrqhHQmW63iTy5BRYGXeCRNgPt12xevN+IWSmwi+eJ1f6V8+IpLU7mKfBxlKu3YArHHYV4pXzDYKRQQSKX4evOBAnERbqFEVYYSNeCBxC2UWETyz5/75Dnrzl+R2k0w4ipTQV0EYtMulHaB/PH8eIXiNoAo8Gxqt8KyhfKODRcui+N8kYvk5ZcmvvWmFWcnulORF9xqk3CUqfQSiA0IZXJanOwUiA0uocD53aoJBIGLZrI+JkAon/nrD1xx5NB45NsxRCoSEIggcldHeQ5ciBLv6FrAgJtbKbkTbgIBqHv+W67fds8wevb/nu11DA6huFUSRFWGghtI4Qsi973Dh8YjXc0xsgsBCucF9i+j+n7ceClTqdeCdU6vAkF795k5Turb310alVCgDW5jP4LIJzuBwwfWWNeDh18cj2wD0khEAg3mBe47ce/HHha3MhXoYH47p1+BzL0XgVCgLTMz7v2f55lUu1qdMAwtsRz9UFTfH4lIWI55jKapdOUPPeBWpoKszjkzLXsaYARhTE05C4S77361UyA2XoXipS3gKk5O1DzUacVfhoIDjmOXgnsfxXdjF8nBA0e2cxyzGPf3xoGXMhVkDS5Ch5PralcBQIeEzluZcu6UpR/+0Bg9+AwvOZzTi1DstnRLU0NboS1gzbyIqW01lL4D3Pso4hOsT/uDB47Aqhk34PzOuIEyFVXVXOsfzDWJ6wpC9dm5WxDPwNLEbk9qGxBI4emnzSd2qTBrwOQeg3sgFOPDH3gWLT2t6wqKdlvqVls4jkF6y/Dclrnz9F4NpS+AhxzHMfcihIZxthe3Jbk5rdtOe8VLmUo3vMzus2kXyNx7BQGFsSjtgCXzKxCUsjKUoLAsM3TkpYmbcH4nNpEcPHBkQ1w7WUUNdJaoTtFNIHN/wyiUIAg8239bb3WB59nrcWa7cFqS2zF+V6KIAhdJQgOyWMKTTzk+qpMSClQccCmo+MUBJI0Yhr4D2/fh+JKDB47AVm+R5anjxkuZil/sNK/iYYu6JISS5jKUIHA882Zc1gRXT+jrYL0bODtN+zhIr+C8k7iFIogxbt4YAxDE47ImoUWSNStiI0p4NhrpHCjU9JaZefJCXEIxy1AYuu/GtdwAa4Lje3BYktj3Zo8DL2UqbnQbSQfqPool4xBKP5Wh+AGsCY4BxlC94OCBI7CD1YqwjUgrYTpPL4EAXuKSdqIWCs+7Vxr0KyzHfCBs08Naksj3Zk8SQWADuVxOAgHA3dJ8jmNEJZTZMhQqs/vUQF1X2FH4sBdnc8jPpxqvZSrtuAnExo/LZROFUPq5DMUrDEPvDPP5wCKxXK3MBeydeO1EEL8Ml0TDi0CARsC5KW5CEWemlw4OSp4Wo7bKUAqBGtJHsCwTam/FMJYk01bERhDYAbdSDRBIqVwwaJ6j+BXeZpSaW69FIBR+9QqZF9hBL0KxylD6uw7FAzC4GMblCiOSDSE+21c4lanYArE7G3/xGs/ui98Avp1uQqEkCXFDJdOSeRFKVspQvEDT1HWBPxvivJFu8ZYmRKH7AvSdAgG4M5d6dl+Culw2nULh3/7WV/3dSSjQ5KyUoXiBpuk1gT8b5ENWPJIbWI7hO8tUugkEoFgmFpfLpl0o4Gp1/r2XUESRy1QZihssSwdeazqoJcmVSFBHmUovgdjE5XLZgFAK5eKcqzWvPV2EkrUyFDfgXgWNS4KK5NTAre1T7DIVN4Egny6XquEJC/hLNzn/vU0oYBWzWIbiBoXQ6iCfCyqS3ATtNjDgJoicq0CQT5cryMBiN1rLznZVmy0UScpmGYobNE0HyshmdqQ1CopFEXlNmfpxuUJbE1FE7MiQp22IQSiiyOUmYH8VVLBZs0FFkpvMVlD8uFxhLYmyYV1EvyJb0DQVKEwgliQi/LhczZAi8eJqEYLjWyTWiih9R7Uux74BuFeXK5Ql8eFq5R2apotBLkEQS9KfIqnFL5I4XC7iankn6IKJuXG31Cb+vQ/d8ONytQJuOUdcrejJjUgmpmYS2bzUq8sVSCPE1YqFXAXuYbZOCIpXlyuIu0VcrXgIIpK+HUjUMY1u+8GPy+UX4mrFQ64sSVS76LrhxeXyvZA7cbViI3fuVhR7srvhxeVifIqEuFrxkbvBRLddnqLAi8tF+5wgSFyt+OgLkVAY95SRExAJ8uBysT6WVTWGh3LhaiWRaOlG7ixJ2A1Cg+LkcvkRCKCuuyj29idBEomWbvSFSAyPy4J6RbY2u4kTJ5eLZ30ahXPPSWTMJ26IJfEJzoAbLr7bZv9R0Mvl8iMScLXoASn1962phc8kEpH4RMMwzbWdWlWJPdPVzeWC6SkC510k/eJqBdlpqxNzDYAEHmad9I1IVBXvxYIbUKvF73Z1IvoQiEm1PxZcxHW/kshGdhKJSLrtAhsWRcG/QxvcgDifVOq+387r4QLnrzBVePgR1NL0+Ad7fAKWX8dgTcDlStrtikQkegT3EC66hsHP7QTcLqd91nEi3/s/8+Yz+HG1bPR9T8bS3rDIdTxT6eu1RpI/IxqRaBEpP4qLBW4X7HEetVC0V44rrfHJV73nd5TdRnh4N5WWoNYJWW5gifvg3sA+9UkRiUgaEbkwDbmBmphjExSTUJSHfjxPEQwd7PIz09Oo8eQz9SRKbPwAqftaFc8aeLBHfVwWv5NoYpIIB+xmZmqRZKWiFIqh6Ybys1/OWwwuzCophX37CjPT6V8ZqF6TsbnJcH+iiHfdiCy7FdWAHcQmM9P+MzwGQq5X1xYK7mrhbgG7jdf9EzsRn30WaZWZerWarL/uhcrkDJYHG3wHPBjitqCRiQQsSUOOxo8Et2u6UvX1GcowPPlp9o2A9DCum9EtYLdphBBkYf8TImTo0i4UXdfR5EQFW3wyNRV9DNlOpOMk0NGimsMRRCj+vl81b0ZYt7FbwN5OTWkG7jyFp58y7x8IpTJVS8QV8Qp4ALiEAu58FBa/F0FE8rifg6szjcjGIkAoU5gufDfsmwGvoGLpFrC3A22vBHRNIYDnnnvedOXMJ+xkPRUj1L0AoZw4PoEl+WJb/DjcryAimfJzMPwAEApO96UdGNmFC1/HlJPvBgjEFoufTtgrYO8Etl+YDiiUgd8+MTB3PutahxG1V44enwj0Och4gUUBLwDHYCNYk8mJmpkijkossa0sDu4L/CBJ5GDZf4RzFzK48NXpGpJrDSRKAhIlEVZNx/b9NvboLwxA8gKLOI4xd6/t9VusgN3TgmiyqpkrOQ5KvK+CRwjgqXq9bhQKc3VhZjsrdXP1eLje0FY6YLq5F0ePj4f6PHgB8IJ7JYg8EoTgO0GAOCBFDC/oW3BP4N7g6mOxLr8P7gtYFHjBj+CskoynnnkOOlOg7aDbgQAR8vLwYhgGNt9BLDv3E7E5sGbhHZS0WHVF5lYGNDX3e0waDaQ4BOzdgBVTJqsNc34JCMXrbEX28f1Uc+2F895vv97QRvhe1m9ZfsTYYoGJdRzLIo7vvquYV9rvC2yTwbBM4PEom8T2qGivydn31EGIwEdxfj8IBl4Kms2wUQhhP4cNdMaW/urSbuoH9x5G45OvDfJ9IBZfSwz9Yq+Euoiks40qvBJaDMMN8AbAdcZZyApxGo4sGFkwOyp++9RIbOeamkLopcOH4v6JeYGIJAr27pORrse6Bwj1k0dPjvN8eYKIJAKoRx8LlvoJw4FnoGiu94AMITBEJLgB1+fEeKBYJDS/3kvuZwSQi4oZavePDyd27l/9JtB2ZwRniEhwE2fA3gkJ4COBiAQnCQTsnZAAHj9U2ifuEAhJQywJgeACEQmB4AIRCYHgBELo/wFMoGxYuzQV5gAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
)

export default SvgComponent