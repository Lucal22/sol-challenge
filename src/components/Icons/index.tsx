export function Back() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.41421 13L11.7071 17.2929C12.0976 17.6834 12.0976 18.3166 11.7071 18.7071C11.3166 19.0976 10.6834 19.0976 10.2929 18.7071L4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929L10.2929 5.29289C10.6834 4.90237 11.3166 4.90237 11.7071 5.29289C12.0976 5.68342 12.0976 6.31658 11.7071 6.70711L7.41421 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H7.41421Z"
        fill="white"
      />
      <mask
        id="mask0_5334_898"
        maskUnits="objectBoundingBox"
        maskContentUnits="objectBoundingBox"
        x="0.1667" // Use normalized values here (4 / 24)
        y="0.2083" // Use normalized values here (5 / 24)
        width="0.6667" // Use normalized values here (16 / 24)
        height="0.5833" // Use normalized values here (14 / 24)
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.41421 13L11.7071 17.2929C12.0976 17.6834 12.0976 18.3166 11.7071 18.7071C11.3166 19.0976 10.6834 19.0976 10.2929 18.7071L4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929L10.2929 5.29289C10.6834 4.90237 11.3166 4.90237 11.7071 5.29289C12.0976 5.68342 12.0976 6.31658 11.7071 6.70711L7.41421 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H7.41421Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_5334_898)"></g>
    </svg>
  );
}

export function Options() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM10 18C10 16.9 10.9 16 12 16C13.1 16 14 16.9 14 18C14 19.1 13.1 20 12 20C10.9 20 10 19.1 10 18Z"
        fill="white"
      />
    </svg>
  );
}

export function LightFavorite() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clip-path="url(#clip0_5334_863)">
        <path
          d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z"
          fill="#555555"
        />
      </g>
      <defs>
        <clipPath id="clip0_5334_863">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Save() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M13 13.5858L16.2929 10.2929C16.6834 9.90237 17.3166 9.90237 17.7071 10.2929C18.0976 10.6834 18.0976 11.3166 17.7071 11.7071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L6.29289 11.7071C5.90237 11.3166 5.90237 10.6834 6.29289 10.2929C6.68342 9.90237 7.31658 9.90237 7.70711 10.2929L11 13.5858V3C11 2.44772 11.4477 2 12 2C12.5523 2 13 2.44772 13 3V13.5858Z"
        fill="#555555"
        stroke="#555555"
        stroke-width="0.5"
      />
      <path
        d="M18 19C18 18.4477 18.4477 18 19 18C19.5523 18 20 18.4477 20 19V20C20 20.4304 19.7246 20.8126 19.3162 20.9487C17.2075 21.6516 14.7686 22 12 22C9.23141 22 6.79246 21.6516 4.68377 20.9487C4.27543 20.8126 4 20.4304 4 20V19C4 18.4477 4.44772 18 5 18C5.55228 18 6 18.4477 6 19L6 19.0303C6 19.1668 6.09218 19.2861 6.22428 19.3206C6.55286 19.4063 6.81071 19.4695 6.99783 19.5103C8.49173 19.836 10.159 20 12 20C13.8445 20 15.5147 19.8354 17.0109 19.5084C17.196 19.468 17.451 19.4054 17.7759 19.3206L17.7759 19.3204C17.9079 19.286 18 19.1667 18 19.0303V19Z"
        fill="#555555"
        stroke="#555555"
        stroke-width="0.5"
      />
    </svg>
  );
}

export function Share() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.9061 5.41423L5.90614 9.41423L5.09386 7.58661L14.0939 3.58661L14.9061 5.41423Z"
        fill="#555555"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.0144 16.3746L5.01436 11.3746L5.98564 9.62628L14.9856 14.6263L14.0144 16.3746Z"
        fill="#555555"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.5 7.00031C18.433 7.00031 20 5.4333 20 3.50031C20 1.56731 18.433 0.000305176 16.5 0.000305176C14.567 0.000305176 13 1.56731 13 3.50031C13 5.4333 14.567 7.00031 16.5 7.00031Z"
        fill="#555555"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.5 13.0003C5.433 13.0003 7 11.4333 7 9.50031C7 7.56731 5.433 6.00031 3.5 6.00031C1.567 6.00031 0 7.56731 0 9.50031C0 11.4333 1.567 13.0003 3.5 13.0003Z"
        fill="#555555"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.5 20.0003C18.433 20.0003 20 18.4333 20 16.5003C20 14.5673 18.433 13.0003 16.5 13.0003C14.567 13.0003 13 14.5673 13 16.5003C13 18.4333 14.567 20.0003 16.5 20.0003Z"
        fill="#555555"
      />
    </svg>
  );
}

export function Home() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clip-path="url(#clip0_5332_478)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.5714 21.5C14.5714 21.7761 14.7953 22 15.0714 22H20.5C20.7761 22 21 21.7761 21 21.5V11.2451C21 10.5371 20.5824 9.56469 20.0673 9.08176L12.8993 2.36161C12.3782 1.87308 11.5445 1.88284 11.0239 2.37091L3.94263 9.00973C3.42045 9.49928 3 10.4633 3 11.1662C3 11.1662 3 11.5708 3 11.7732C3 14.2853 3 19.8134 3 21.501C3 21.7771 3.22386 22 3.5 22H8.92857C9.20471 22 9.42857 21.7761 9.42857 21.5V15C9.42857 14.7239 9.65243 14.5 9.92857 14.5H14.0714C14.3476 14.5 14.5714 14.7239 14.5714 15V21.5Z"
          fill="#A076F2"
        />
      </g>
      <defs>
        <clipPath id="clip0_5332_478">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Add() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clip-path="url(#clip0_5332_471)">
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z"
          fill="#9E9E9E"
        />
      </g>
      <defs>
        <clipPath id="clip0_5332_471">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function DarkAdd() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clip-path="url(#clip0_5301_173)">
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z"
          fill="#555555"
        />
      </g>
      <defs>
        <clipPath id="clip0_5301_173">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Search() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clip-path="url(#clip0_5332_464)">
        <path
          d="M17.1527 15.0943H16.0686L15.6844 14.7238C17.0292 13.1595 17.8388 11.1286 17.8388 8.91938C17.8388 3.99314 13.8456 0 8.91938 0C3.99314 0 0 3.99314 0 8.91938C0 13.8456 3.99314 17.8388 8.91938 17.8388C11.1286 17.8388 13.1595 17.0292 14.7238 15.6844L15.0943 16.0686V17.1527L21.9554 24L24 21.9554L17.1527 15.0943ZM8.91938 15.0943C5.50257 15.0943 2.74443 12.3362 2.74443 8.91938C2.74443 5.50257 5.50257 2.74443 8.91938 2.74443C12.3362 2.74443 15.0943 5.50257 15.0943 8.91938C15.0943 12.3362 12.3362 15.0943 8.91938 15.0943Z"
          fill="#9E9E9E"
        />
      </g>
      <defs>
        <clipPath id="clip0_5332_464">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Favorites() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clip-path="url(#clip0_5332_457)">
        <path
          d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
          fill="#9E9E9E"
        />
      </g>
      <defs>
        <clipPath id="clip0_5332_457">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function DarkFavorites() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clip-path="url(#clip0_5301_168)">
        <path
          d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
          fill="#555555"
        />
      </g>
      <defs>
        <clipPath id="clip0_5301_168">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
