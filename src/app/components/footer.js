export default function Footer() {
    return (
        <footer>
            <div className="container-fluid bg-white">
                <div className="py-5">
                    <div className="row">
                        <div className="col-6 col-md-6 mb-3">
                            <h5>ร้าน Aunt Pizza Company By Poomza</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">อั๋นพิสซ่า Aunt Pizza" พิกัดแม่ริม เชียงใหม่ ดื่มด่ำไปกับความเป็นธรรมชาติอย่างใกล้ชิด เลือกนั่งได้หลายโซน มีบริการอาหาร ขนมหวาน และเครื่องดื่ม สามารถพาน้องๆ สัตว์เลี้ยงมาเที่ยวด้วยได้ </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">ที่อยู่: 123 ถนนแม่ริม-สเมิง, จังหวัดเชียงใหม่, ประเทศไทย</a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">ติดต่อ 091-876-1573</a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">อีเมล: info@pizzaexample.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>© 2024 Company, Inc. All rights reserved.</p>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-3">
                                <a className="link-body-emphasis" href="#">
                                    <svg className="bi" width={24} height={24}>
                                        <use xlinkHref="#twitter" />
                                    </svg>
                                </a>
                            </li>
                            <li className="ms-3">
                                <a className="link-body-emphasis" href="#">
                                    <svg className="bi" width={24} height={24}>
                                        <use xlinkHref="#instagram" />
                                    </svg>
                                </a>
                            </li>
                            <li className="ms-3">
                                <a className="link-body-emphasis" href="#">
                                    <svg className="bi" width={24} height={24}>
                                        <use xlinkHref="#facebook" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
