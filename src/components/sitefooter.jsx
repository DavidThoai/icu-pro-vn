import logoDanghan from '../images/danghan-logo.png'
import logoIcu from '../images/icu-logo.png'
import logoFurry from '../images/furryshine-logo.png'

export default function SiteFooter() {
  return (
    <footer className="site-footer" data-od-id="footer">
      <div className="wrap footer-grid">
        <div>
          <div className="f-logos">
          <span className="f-logo-item" data-title="DANG HAN TAP CO., LTD"><img src={logoDanghan} alt="DANGHAN" className="f-logo" /></span>
          <span className="f-logo-item" data-title="ICU.PRO.VN"><img src={logoIcu} alt="ICU" className="f-logo" /></span>
          <span className="f-logo-item" data-title="FURRYSHINE PET"><img src={logoFurry} alt="FurryShine" className="f-logo" /></span>
          <a href="//www.dmca.com/Protection/Status.aspx?ID=42b6b10d-2dcf-4aad-9ba6-2e92856c864d" data-title="DMCA.com Protection Status" className="dmca-badge f-logo-item">
            <img src="https://images.dmca.com/Badges/dmca_protected_sml_120g.png?ID=42b6b10d-2dcf-4aad-9ba6-2e92856c864d" alt="DMCA.com Protection Status" className="f-logo f-logo-dmca" />
          </a>
          <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js" />
        </div>
        </div>
        <nav aria-label="Liên kết chân trang">
          <a href="#san-pham" className="nav-item nav-blue">Sản Phẩm</a>
          <a href="#tay-rua-cong-nghiep" className="nav-item nav-cyan">Tẩy Rửa Công Nghiệp</a>
          <a href="#vang-bac-da-quy" className="nav-item nav-gold">Vàng · Bạc · Đá Quý</a>
          <a href="#furryshine" className="nav-item nav-mint">Furryshine Pet</a>
          <a href="#cong-thuc" className="nav-item nav-violet">Công Thức &amp; Sử Dụng</a>
          <a href="#lien-he" className="nav-item nav-red">Tư Vấn Sản Phẩm</a>
        </nav>
        <div className="f-meta">
          <p className="f-tagline">Sạch Sáng Tức Thì – Không Hao Mòn.</p>
          <p>Công ty TNHH SX &amp; TM Đặng Hân · <a href="https://www.icu.pro.vn">www.icu.pro.vn</a></p>
          <p>Email: <a href="mailto:danghanco.ltd.hcm@gmail.com">danghanco.ltd.hcm@gmail.com</a></p>
          <p className="f-note">© 2026 ICU · DANG HAN TAP CO., LTD</p>
          <p className="mst-line">MST: 0318386193 · Nơi cấp: Sở Kế hoạch và Đầu tư TP.HCM · Ngày cấp: 03/04/2024</p>
        </div>
      </div>
      <div className="footer-colors">
        <span className="fc-blue" data-label="Sản Phẩm" />
        <span className="fc-cyan" data-label="Tẩy Rửa CN" />
        <span className="fc-gold" data-label="Vàng · Bạc · Đá Quý" />
        <span className="fc-mint" data-label="Furryshine Pet" />
        <span className="fc-violet" data-label="Công Thức & Sử Dụng" />
        <span className="fc-red" data-label="Tư Vấn Sản Phẩm" />
      </div>
    </footer>
  )
}
