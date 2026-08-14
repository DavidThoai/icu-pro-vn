import logo from '../images/company-logo.png'

export default function SiteFooter() {
  return (
    <footer className="site-footer" data-od-id="footer">
      <div className="wrap footer-grid">
        <div>
          <img src={logo} alt="ICU" className="f-logo" />
          <p className="f-tagline">Sạch sáng tức thì – không hao mòn.</p>
        </div>
        <nav aria-label="Liên kết chân trang">
          <a href="#san-pham">Sản phẩm</a>
          <a href="#furryshine">Furryshine</a>
          <a href="#cong-thuc">Công thức</a>
          <a href="#lien-he">Liên hệ</a>
        </nav>
        <div className="f-meta">
          <p>Công ty TNHH SX &amp; TM Đặng Hân · <a href="https://www.icu.pro.vn">www.icu.pro.vn</a></p>
          <p className="f-note">© 2026 ICU · DANG HAN TAP CO., LTD</p>
        </div>
      </div>
    </footer>
  )
}
