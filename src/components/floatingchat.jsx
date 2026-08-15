// Icon nổi Zalo + Messenger - góc phải dưới màn hình
export default function FloatingChat() {
  return (
    <div className="float-chat" aria-label="Liên hệ nhanh">
      <a
        className="float-btn float-zalo"
        href="https://zalo.me/0918051655"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Zalo"
        title="Chat Zalo"
      >
        <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12.04 2C6.58 2 2.13 6.06 2.13 11.07c0 2.83 1.4 5.35 3.59 7.01-.13.96-.44 2.6-.87 3.46-.06.13-.03.28.07.38.07.07.16.1.25.1.07 0 .14-.02.2-.06.03-.01 3.22-1.97 4.13-2.42.9.25 1.85.39 2.82.39 5.47 0 9.92-4.06 9.92-9.07S17.5 2 12.04 2zM8.97 12.9c-.51.54-1.24.8-2.2.8H5.4c-.11 0-.2-.09-.2-.2V8.17c0-.11.09-.2.2-.2h1.08c.11 0 .2.09.2.2v4.16h.4c.4 0 .78-.12 1.09-.42.31-.3.47-.7.47-1.18V8.17c0-.11.09-.2.2-.2h1.08c.11 0 .2.09.2.2v3.16c0 .87-.26 1.56-.97 1.57zm8.27-1.13c0 .11-.09.2-.2.2h-1.09c-.11 0-.2-.09-.2-.2V8.17c0-.11.09-.2.2-.2h1.09c.11 0 .2.09.2.2v3.6zm-.13-4.73H16.02c-.11 0-.2-.09-.2-.2V5.58c0-.11.09-.2.2-.2h1.09c.11 0 .2.09.2.2v1.26c0 .11-.09.2-.2.2zm-2.23 3.73c-.51.54-1.24.8-2.2.8h-1.37c-.11 0-.2-.09-.2-.2V8.17c0-.11.09-.2.2-.2h1.08c.11 0 .2.09.2.2v4.16h.4c.4 0 .78-.12 1.09-.42.31-.3.47-.7.47-1.18V8.17c0-.11.09-.2.2-.2h1.08c.11 0 .2.09.2.2v3.16c0 .87-.26 1.56-.97 1.57z"
          />
        </svg>
        <span className="float-label">Chat Zalo</span>
      </a>
      <a
        className="float-btn float-messenger"
        href="https://m.me/61591335989974"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Messenger"
        title="Chat Messenger"
      >
        <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2C6.48 2 2 6.14 2 11.25c0 2.81 1.38 5.32 3.55 7.01-.06.59-.35 2.06-.35 2.06s1.52-.47 2.83-1.02c.94.31 1.94.48 2.97.48 5.52 0 10-4.14 10-9.25S17.52 2 12 2zm-1.12 12.36l-2.6-2.77-5.07 2.77 5.57-5.91 2.66 2.77 5.01-2.77-5.57 5.91z"
          />
        </svg>
        <span className="float-label">Chat Messenger</span>
      </a>
    </div>
  )
}
