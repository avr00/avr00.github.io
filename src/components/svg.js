import React from "react"
import styled from "styled-components"

const SvgWrapper = styled.svg`
  path {
    fill: ${props => props.theme.primary};
  }
`

export const GithubIcon = () => {
  return (
    <SvgWrapper
      width="40"
      height="44"
      viewBox="0 0 40 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5939 39.1179C15.6054 39.3827 15.5759 39.6411 15.5185 39.9026C15.4174 40.3622 15.2224 40.8485 14.9463 41.2979C14.1613 42.5752 12.8279 43.4275 11.1111 43.4275C7.06689 43.4275 5.47964 41.5029 3.49227 36.6836C2.1463 33.4196 1.51133 32.6497 0 32.6497L0 28.3386C4.04423 28.3386 5.63148 30.2631 7.61884 35.0825C8.96481 38.3465 9.59978 39.1164 11.1111 39.1164C11.1111 38.4909 11.1023 37.9369 11.0837 37.1866C11.0401 35.4281 11.0351 35.0691 11.1142 34.599C11.1458 33.5728 11.419 32.8446 11.9667 32.1219C7.00709 31.0746 3.66204 28.9118 1.74216 25.4038L1.02297 23.7632C0.322323 21.81 0 19.597 0 17.0411C0 14.0976 0.925214 11.4657 2.65337 9.26568C2.11428 7.17448 2.18811 4.61949 3.37846 1.73402L3.76742 0.791171L4.7646 0.48177C4.8981 0.440345 5.06041 0.402931 5.25109 0.373902C7.19281 0.0782895 9.95579 0.78359 13.5679 3.02788C15.6973 2.54908 17.9397 2.30734 20.1973 2.30734C22.2147 2.30734 24.221 2.50463 26.137 2.89358C29.6512 0.758858 32.3383 0.0893268 34.2278 0.374281C34.4163 0.402706 34.5769 0.439404 34.7093 0.480132L35.7127 0.788776L36.1021 1.73738C37.1435 4.27391 37.3222 6.61153 36.9433 8.657C38.9299 10.9693 40 13.812 40 17.0411C40 19.7634 39.7989 21.8105 39.221 23.8019L38.6109 25.4259C37.014 28.9302 33.4921 31.1172 28.0612 32.1589C28.6257 32.9171 28.8889 33.6867 28.8889 34.8053V36.9608C28.8889 38.0054 28.8889 38.0376 28.8864 39.1164C28.8915 39.1938 28.8982 39.2318 28.9054 39.2554C28.9036 39.256 28.8889 43.4275 28.8889 43.4275C26.996 43.4275 25.5886 42.5321 24.8964 41.1196C24.5375 40.3873 24.4303 39.688 24.4444 39.0858V34.8053C24.4444 34.6245 24.438 34.6141 23.9842 34.1739C22.7713 32.9974 22.2222 32.1097 22.2222 30.4942V28.5442L24.2224 28.3494C30.1763 27.7694 33.4145 26.1655 34.4882 23.8225L34.9899 22.492C35.3892 21.1009 35.5556 19.4067 35.5556 17.0411C35.5556 14.5275 34.6509 12.4512 32.94 10.7922L31.9996 9.88038L32.3834 8.6455C32.7244 7.54844 32.8054 6.25031 32.4447 4.76968C32.3847 4.78441 32.3224 4.80047 32.2578 4.81793C31.0679 5.13926 29.5823 5.82874 27.7921 6.98946L26.9756 7.51887L26.0223 7.28958C24.1786 6.84613 22.1974 6.61845 20.1973 6.61845C17.973 6.61845 15.7744 6.89296 13.7432 7.43007L12.752 7.69219L11.904 7.1295C10.0525 5.90087 8.51434 5.17021 7.28094 4.82889C7.19285 4.80451 7.10898 4.78271 7.02925 4.76327C6.59894 6.4769 6.76914 7.8848 7.20496 8.94125L7.72752 10.208L6.77086 11.2082C5.24644 12.8019 4.44444 14.7414 4.44444 17.0411C4.44444 19.1466 4.69854 20.8912 5.16418 22.2054L5.7457 23.5406C7.19942 26.1866 10.2871 27.7785 15.7924 28.3509L17.7778 28.5573V30.4942C17.7778 32.1097 17.2287 32.9974 16.0158 34.1739C15.562 34.6141 15.5556 34.6245 15.5556 34.8053L15.5173 35.2038C15.4919 35.3345 15.4919 35.6719 15.5269 37.083C15.5429 37.732 15.5521 38.2457 15.5547 38.7825C15.5813 38.8936 15.5853 38.9653 15.5939 39.1179Z"
        fill="black"
      />
    </SvgWrapper>
  )
}

export const EmailIcon = () => {
  return (
    <SvgWrapper
      width="40"
      height="31"
      viewBox="0 0 40 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 0.919922H35C37.7614 0.919922 40 3.09134 40 5.76992V25.1699C40 27.8485 37.7614 30.0199 35 30.0199H5C2.23858 30.0199 0 27.8485 0 25.1699V5.76992C0 3.09134 2.23858 0.919922 5 0.919922ZM5 13.0449V25.1699H35V12.7889L20 20.3199L5 13.0449ZM5 8.19492L20.0001 15.4409L35 8.19492V5.76992H5V8.19492Z"
        fill="black"
      />
    </SvgWrapper>
  )
}
