import logo from '../images/danghan-logo.png'

export default function NavBar({ scrolled }) {
  return (
    <header className={`topnav${scrolled ? ' scrolled' : ''}`} data-od-id="topnav">
      <div className="wrap nav-inner">
        <a className="logo" href="#top" onClick={(e) => e.preventDefault()}>
          <img src={logo} alt="ICU" className="logo-img" />
          <span className="logo-text">Sản Phẩm Độc Quyền<br /><span className="logo-sub">DANG HAN TAP CO., LTD</span><br /><span className="logo-sub est">EST. 2024</span></span>
        </a>
        <nav aria-label="Điều hướng chính">
          <a href="#san-pham" className="nav-item nav-blue">Sản Phẩm</a>
          <a href="#tay-rua-cong-nghiep" className="nav-item nav-cyan">Tẩy Rửa Công Nghiệp</a>
          <a href="#vang-bac-da-quy" className="nav-item nav-gold">Vàng · Bạc · Đá Quý</a>
          <a href="#furryshine" className="nav-item nav-mint">Furryshine Pet</a>
          <a href="#cong-thuc" className="nav-item nav-violet">Công Thức &amp; Sử Dụng</a>
          <a href="#lien-he" className="btn btn-accent btn-sm nav-cta">
            Tư Vấn Sản Phẩm
          </a>
        </nav>
      </div>
      <div className="nav-colors">
        <span className="fc-blue" data-label="Sản Phẩm" />
        <span className="fc-cyan" data-label="Tẩy Rửa Công Nghiệp" />
        <span className="fc-gold" data-label="Vàng · Bạc · Đá Quý" />
        <span className="fc-mint" data-label="Furryshine Pet" />
        <span className="fc-violet" data-label="Công Thức &amp; Sử Dụng" />
        <span className="fc-red" data-label="Tư Vấn Sản Phẩm" />
      </div>
    </header>
  )
}
