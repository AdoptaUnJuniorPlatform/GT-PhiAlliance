const PlanetIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 114} 
      height={props.height || 114}
      fill="none"
      viewBox="0 0 152 152"
    {...props}
  >
    <path
      stroke="#000"
      strokeWidth={8}
      d="M76 148c39.766 0 72-32.234 72-72S115.766 4 76 4 4 36.234 4 76s32.234 72 72 72Z"
    />
    <path
      stroke="#000"
      strokeWidth={8}
      d="M4 64.623c10.855-5.124 18.883-5.838 24.084-2.142 7.801 5.544 8.777 28.148 26.525 17.348 17.748-10.8-7.6-15.206-2.099-30.852 5.5-15.65 23.519-3.492 25.308-20.632 1.198-11.426-12.47-15.799-41.004-13.118"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={8}
      d="M119.2 18.4C98.63 36.36 91.445 47.204 97.647 50.934c9.302 5.598 13.248-2.283 24.602 0 11.355 2.282 8.892 17.672 2.923 17.672-5.968 0-36.896-3.938-35.337 14.108 1.559 18.047 20.16 20.718 20.16 30.802 0 6.72-4.116 17.008-12.348 30.863m-86.073-36.245a315.652 315.652 0 0 1 7.402-3.146c13.848-5.592 24.125-6.911 30.83-3.957 11.852 5.231 7.294 15.793 11.01 19.685 3.707 3.892 12.98 2.761 12.98 10.163 0 4.937-1.658 10.512-4.974 16.725"
    />
  </svg>
)
export default PlanetIcon