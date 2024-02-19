type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  Spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  ArrowRight: (props: IconProps) => (
    <svg
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_12_114)">
        <path
          d="M1.45996 10H17.54"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.5 4.45837L18.0417 9.99837L12.5 15.5384"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_12_114">
          <rect
            width="19"
            height="19"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  Facebook: (props: IconProps) => (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.5 2.5H14.5C13.1739 2.5 11.9021 3.02678 10.9645 3.96447C10.0268 4.90215 9.5 6.17392 9.5 7.5V10.5H6.5V14.5H9.5V22.5H13.5V14.5H16.5L17.5 10.5H13.5V7.5C13.5 7.23478 13.6054 6.98043 13.7929 6.79289C13.9804 6.60536 14.2348 6.5 14.5 6.5H17.5V2.5Z"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Heart: (props: IconProps) => (
    <svg
      width="25"
      height="23"
      viewBox="0 0 25 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.2913 3.99586C20.7805 3.48486 20.1741 3.07951 19.5066 2.80294C18.8392 2.52638 18.1238 2.38403 17.4013 2.38403C16.6788 2.38403 15.9634 2.52638 15.2959 2.80294C14.6285 3.07951 14.022 3.48486 13.5113 3.99586L12.4513 5.05586L11.3913 3.99586C10.3596 2.96417 8.96032 2.38457 7.50129 2.38457C6.04226 2.38457 4.64298 2.96417 3.61129 3.99586C2.5796 5.02755 2 6.42683 2 7.88586C2 9.34489 2.5796 10.7442 3.61129 11.7759L4.67129 12.8359L12.4513 20.6159L20.2313 12.8359L21.2913 11.7759C21.8023 11.2651 22.2076 10.6587 22.4842 9.99121C22.7608 9.32375 22.9031 8.60835 22.9031 7.88586C22.9031 7.16337 22.7608 6.44796 22.4842 5.7805C22.2076 5.11304 21.8023 4.50661 21.2913 3.99586Z"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Instagram: (props: IconProps) => (
    <svg
      width="23"
      height="25"
      viewBox="0 0 23 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17 2.49121H7C4.23858 2.49121 2 4.72979 2 7.49121V17.4912C2 20.2526 4.23858 22.4912 7 22.4912H17C19.7614 22.4912 22 20.2526 22 17.4912V7.49121C22 4.72979 19.7614 2.49121 17 2.49121Z"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.0002 11.861C16.1236 12.6933 15.9815 13.5432 15.594 14.29C15.2065 15.0368 14.5933 15.6424 13.8418 16.0207C13.0903 16.399 12.2386 16.5306 11.408 16.397C10.5773 16.2633 9.80996 15.8711 9.21503 15.2762C8.62011 14.6813 8.22793 13.9139 8.09426 13.0832C7.9606 12.2526 8.09226 11.4009 8.47052 10.6494C8.84878 9.89788 9.45438 9.28476 10.2012 8.89727C10.948 8.50977 11.7979 8.36761 12.6302 8.49102C13.4791 8.61691 14.265 9.01249 14.8719 9.61933C15.4787 10.2262 15.8743 11.0121 16.0002 11.861Z"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.5 6.99121H17.51"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
};

export default Icons;
