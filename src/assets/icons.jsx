export const Loader = () => (
  <div
    role="status"
    className="flex items-center justify-center"
    style={{ height: 'calc(100vh - 4rem)' }}
  >
    <svg
      aria-hidden="true"
      className="w-8 h-8 mr-2 text-gray-200 animate-spin  fill-blue-600"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
    <span className="sr-only">Loading...</span>
  </div>
);

export const ArrowLeft = ({ className, onClick }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className || 'w-6 h-6'}
    onClick={onClick}
  >
    <path
      fillRule="evenodd"
      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
    />
  </svg>
);

export const ArrowRight = ({ className, onClick }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className || 'w-6 h-6'}
    onClick={onClick}
  >
    <path
      fillRule="evenodd"
      d="M1 8a.5.5 0 0 1 .5-.5h12.793l-3.147-3.146a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L14.293 8.5H1.5A.5.5 0 0 1 1 8z"
    />
  </svg>
);

export const Cart = ({ className }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className || 'w-6 h-6'}
  >
    <path
      fillRule="evenodd"
      d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
    />
  </svg>
);

export const HomeIcon = ({ className, onClick }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 48 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className || 'w-6 h-6'}
    onClick={onClick}
  >
    <polygon fill="#E8EAF6" points="42,39 6,39 6,23 24,6 42,23" />
    <g fill="#C5CAE9">
      <polygon points="39,21 34,16 34,9 39,9" />
      <rect x="6" y="39" width="36" height="5" />
    </g>
    <polygon
      fill="#B71C1C"
      points="24,4.3 4,22.9 6,25.1 24,8.4 42,25.1 44,22.9"
    />
    <rect x="18" y="28" fill="#D84315" width="12" height="16" />
    <rect x="21" y="17" fill="#01579B" width="6" height="6" />
    <path
      fill="#FF8A65"
      d="M27.5,35.5c-0.3,0-0.5,0.2-0.5,0.5v2c0,0.3,0.2,0.5,0.5,0.5S28,38.3,28,38v-2C28,35.7,27.8,35.5,27.5,35.5z"
    />
  </svg>
);

export const CloseIcon = ({ className, onClick }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 512 512"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className || 'w-6 h-6'}
    onClick={onClick}
  >
    <path
      fillRule="evenodd"
      d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"
    />
  </svg>
);

export const MenuIcon = ({ className, onClick }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 512 512"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className || 'w-6 h-6'}
    onClick={onClick}
  >
    <path
      fillRule="evenodd"
      d="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z"
    />
  </svg>
);
