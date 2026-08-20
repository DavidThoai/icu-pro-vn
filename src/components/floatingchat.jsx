// Icon nổi Zalo + Facebook - góc phải dưới màn hình (dùng icon ảnh do chủ web cung cấp)
import zaloIcon from '../images/icon-zalo.png'
import facebookIcon from '../images/icon-facebook.png'

export default function FloatingChat() {
  return (
    <div className="float-chat" aria-label="Liên hệ nhanh">
      <a
        className="float-btn float-zalo"
        href="https://zalo.me/1549340923407067202"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Zalo"
        title="Chat Zalo"
      >
        <img src={zaloIcon} alt="" className="float-img" width="60" height="60" />
        <span className="float-label">Chat Zalo</span>
      </a>
      <a
        className="float-btn float-facebook"
        href="https://www.facebook.com/profile.php?id=61591335989974"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fanpage Facebook"
        title="Fanpage Facebook"
      >
        <img src={facebookIcon} alt="" className="float-img" width="60" height="60" />
        <span className="float-label">Facebook</span>
      </a>
    </div>
  )
}
