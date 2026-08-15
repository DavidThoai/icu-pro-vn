import logo from '../images/company-logo.png'

export default function NavBar({ scrolled }) {
  return (
    <header className={`topnav${scrolled ? ' scrolled' : ''}`} data-od-id="topnav">
      <div className="wrap nav-inner">
        <a className="logo" href="#top" onClick={(e) => e.preventDefault()}>
          <img src={logo} alt="ICU" className="logo-img" />
          <span className="logo-text">Sản Phẩm Độc Quyền<br /><span className="logo-sub">DANG HAN TAP CO., LTD</span></span>
        </a>
        <nav aria-label="Điều hướng chính">
          <a href="#san-pham">Sản Phẩm</a>
          <a href="#tay-rua-cong-nghiep">Tẩy Rửa Công Nghiệp</a>
          <a href="#vang-bac-da-quy">Chuyên Dụng Cho Vàng · Bạc · Đá Quý</a>
          <a href="#furryshine">Furryshine Pet</a>
          <a href="#cong-thuc">Công Thức &amp; Sử Dụng</a>
          <a href="#lien-he" className="btn btn-accent btn-sm">
            Nhận Báo Giá
          </a>
        </nav>
      </div>
    </header>
  )
}
