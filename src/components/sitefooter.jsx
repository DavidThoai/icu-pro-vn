import logoDanghan from '../images/danghan-logo.png'
import logoIcu from '../images/icu-logo.png'
import logoFurry from '../images/furryshine-logo.png'

export default function SiteFooter() {
  return (
    <footer className="site-footer" data-od-id="footer">
      <div className="wrap footer-grid">
        <div>
          <div className="f-logos">
          <img src={logoDanghan} alt="DANGHAN" className="f-logo" />
          <img src={logoIcu} alt="ICU" className="f-logo" />
          <img src={logoFurry} alt="FurryShine" className="f-logo" />
        </div>
        </div>
        <nav aria-label="Liên kết chân trang">
          <a href="#san-pham" className="nav-item nav-blue">Sản Phẩm</a>
          <a href="#tay-rua-cong-nghiep" className="nav-item nav-cyan">Tẩy Rửa Công Nghiệp</a>
          <a href="#vang-bac-da-quy" className="nav-item nav-gold">Vàng · Bạc · Đá Quý</a>
          <a href="#furryshine" className="nav-item nav-mint">Furryshine Pet</a>
          <a href="#cong-thuc" className="nav-item nav-violet">Công Thức &amp; Sử Dụng</a>
          <a href="#lien-he" className="nav-item nav-red">Nhận Báo Giá</a>
        </nav>
        <div className="f-meta">
          <p className="f-tagline">Sạch Sáng Tức Thì – Không Hao Mòn.</p>
          <p>Công ty TNHH SX &amp; TM Đặng Hân · <a href="https://www.icu.pro.vn">www.icu.pro.vn</a></p>
          <p className="f-note">© 2026 ICU · DANG HAN TAP CO., LTD</p>
        </div>
      </div>
      <div className="footer-colors" aria-hidden="true">
        <span className="fc-blue" /><span className="fc-cyan" /><span className="fc-gold" /><span className="fc-mint" /><span className="fc-violet" /><span className="fc-red" />
      </div>
    </footer>
  )
}
