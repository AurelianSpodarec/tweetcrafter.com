const settingsMenu = {
  menu: [
    {
      id: "type",
      name: "Type",
      new: false,
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="h-full w-full"
        viewBox="0 0 24 24"
      >
        <path d="M4 7h3a1 1 0 0 0 1-1V5a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-1a2 2 0 0 0-4 0v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a2 2 0 0 0 0-4H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1"></path>
      </svg>
    },
    {
      id: "users",
      name: "Users",
      new: false,
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="h-full w-full"
        viewBox="0 0 24 24"
      >
        <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6"></path>
        <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9"></path>
        <path d="M6 20.05V20a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v.05"></path>
      </svg>
    },
    {
      id: "theme",
      name: "X Theme",
      new: false,
      icon: <svg
        className="w-full h-full"
        data-icon="palette"
        data-prefix="fas"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M512 255.1c0 1.8-.9 2.7-.9 3.6.5 36.5-32.7 60.4-69.2 60.4H344c-26.5 0-48 22.4-48 48.9 0 3.4.4 6.7 1 9.9 2.2 10.2 6.5 19.2 10.9 29.9 6 13.8 12.1 27.5 12.1 42 0 31.9-21.6 60.7-53.4 62-3.5.1-7.1.2-10.6.2C114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256zm-416 0c-17.67 0-32 15.2-32 32 0 18.6 14.33 32 32 32 17.7 0 32-13.4 32-32 0-16.8-14.3-32-32-32m32-64c17.7 0 32-13.4 32-32 0-16.8-14.3-32-32-32s-32 15.2-32 32c0 18.6 14.3 32 32 32m128-128c-17.7 0-32 15.23-32 32 0 18.6 14.3 32 32 32s32-13.4 32-32c0-16.77-14.3-32-32-32m128 128c17.7 0 32-13.4 32-32 0-16.8-14.3-32-32-32s-32 15.2-32 32c0 18.6 14.3 32 32 32"
        ></path>
      </svg>
    },
    {
      id: "Decoration",
      name: "Decoration",
      new: false,
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="h-full w-full"
        viewBox="0 0 20 20"
      >
        <path
          fill="currentColor"
          d="m14.878.282.348 1.071a2.2 2.2 0 0 0 1.399 1.397l1.071.348.021.006a.423.423 0 0 1 0 .798l-1.071.348a2.2 2.2 0 0 0-1.399 1.397l-.348 1.07a.423.423 0 0 1-.798 0l-.349-1.07a2.2 2.2 0 0 0-.532-.867 2.2 2.2 0 0 0-.866-.536l-1.071-.348a.423.423 0 0 1 0-.798l1.071-.348a2.2 2.2 0 0 0 1.377-1.397l.348-1.07a.423.423 0 0 1 .799 0m4.905 7.931-.766-.248a1.58 1.58 0 0 1-.998-.999l-.25-.764a.302.302 0 0 0-.57 0l-.248.764a1.58 1.58 0 0 1-.984.999l-.765.248a.303.303 0 0 0 0 .57l.765.249a1.58 1.58 0 0 1 1 1.002l.032.1.215.662v.002a.302.302 0 0 0 .571 0l.249-.764a1.58 1.58 0 0 1 .999-.999l.765-.248a.303.303 0 0 0 0-.57zm-2.48 3.773a1.3 1.3 0 0 1-.53-.21 7 7 0 1 1-6.683-8.775 1.42 1.42 0 0 1 .884-.854l.193-.063a8 8 0 1 0 6.587 9.893q-.224.044-.45.009m-4.636.61a4.01 4.01 0 0 1-5.512-.169.5.5 0 1 0-.71.705 5.01 5.01 0 0 0 7.087.023l.023-.023.057-.07a.5.5 0 0 0-.767-.635zM13.5 8.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-5 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0"
        ></path>
      </svg>
    },
  ]
}

export default settingsMenu
