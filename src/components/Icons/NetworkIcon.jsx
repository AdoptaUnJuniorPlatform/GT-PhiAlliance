const NetworkIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 118}
    height={props.height || 118}
    fill="none"
    viewBox="0 0 144 144"

    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M0 72a72.001 72.001 0 0 0 122.912 50.912 72.004 72.004 0 0 0 0-101.824A72.001 72.001 0 0 0 0 72Zm131.657 0a59.657 59.657 0 1 1-119.313 0 59.657 59.657 0 0 1 119.313 0Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M41.143 72c0 37.21 12.269 67.886 30.857 67.886S102.857 109.21 102.857 72c0-37.21-12.269-67.886-30.857-67.886S41.143 34.79 41.143 72Zm49.371 0c0 30.956-9.833 55.543-18.514 55.543S53.486 102.956 53.486 72 63.319 16.457 72 16.457 90.514 41.044 90.514 72Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      d="m19.354 34.7 8.277-9.15a36.883 36.883 0 0 0 2.675 2.196c10.458 7.834 27.154 12.672 45.38 12.672 15.56 0 30.059-3.513 40.575-9.528 2.54-1.454 4.787-3.018 6.74-4.69l8.014 9.388c-2.556 2.189-5.431 4.191-8.623 6.007-12.475 7.142-29.08 11.158-46.706 11.158-20.752 0-40.032-5.579-52.786-15.132a49.379 49.379 0 0 1-3.546-2.922Zm0 74.731 8.277 9.151a36.493 36.493 0 0 1 2.675-2.197c10.458-7.834 27.154-12.672 45.38-12.672 15.56 0 30.059 3.513 40.575 9.528 2.54 1.454 4.787 3.017 6.74 4.69l8.014-9.388a57.569 57.569 0 0 0-8.623-6.007c-12.475-7.143-29.08-11.158-46.706-11.158-20.752 0-40.032 5.579-52.786 15.132a49.404 49.404 0 0 0-3.546 2.921Zm-15.24-31.26V65.828h135.772v12.343H4.114Z"
    />
  </svg>
)
export default NetworkIcon