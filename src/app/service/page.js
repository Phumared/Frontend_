'use client';
import { useState } from 'react';

export default function Service() {
    return (
        <>
            <style jsx>{`
                .card-img-top {
                    width: 10%;
                    height: auto;
                    border-radius: 15px; /* Adds rounded corners to the images */
                }
                .card {
                    border-radius: 15px; /* Adds rounded corners to the card */
                    padding: 20px; /* Adds padding inside the card */
                }
                .card-body {
                    padding: 15px; /* Adds padding inside the card body */
                }
                .container {
                    padding: 20px; /* Adds padding to the container */
                }
                .section-title {
                    margin-bottom: 30px; /* Adds space below the section titles */
                }
                .service-list-item {
                    padding: 10px 0; /* Adds padding to service list items */
                }
            `}</style>

            <br />
            <br />
            <br />
            <br />

            <div className="container my-5">
                <section className="text-center">
                    <h1 className="mb-4">บริการของเรา</h1>
                    <p className="lead">
                        ยินดีต้อนรับสู่ร้านพิซซ่าของเรา! เราเสนอพิซซ่าหลายหลากรสชาติที่ทำด้วยวัตถุดิบคุณภาพและความรักในการทำอาหาร
                    </p>
                </section>

                <section className="py-5">
                    <div className="container">
                        <div className="row mb-4">
                            <div className="col-lg-6">
                                <h3 className="section-title">เมนูพิซซ่าที่เรามี</h3>
                                <div className="card-deck">
                                    <div className="card">
                                        <img src="/image/Food1.png" alt="Margherita Pizza" className="card-img-top" />
                                        <div className="card-body">
                                            <h5 className="card-title">พิซซ่า มาร์เกอรีต้า</h5>
                                            <p className="card-text">
                                                พิซซ่าที่ทำจากซอสมะเขือเทศสด ชีสมอสซาเรลล่า และใบโหระพา
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img src="/image/Food2.png" alt="Pepperoni Pizza" className="card-img-top" />
                                        <div className="card-body">
                                            <h5 className="card-title">พิซซ่า เปปเปอโรนี</h5>
                                            <p className="card-text">
                                                พิซซ่าที่มาพร้อมกับเปปเปอโรนี ชีส และซอสพิซซ่าที่อร่อย
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img src="/image/Food3.png" alt="Vegetarian Pizza" className="card-img-top" />
                                        <div className="card-body">
                                            <h5 className="card-title">พิซซ่า มังสวิรัติ</h5>
                                            <p className="card-text">
                                                พิซซ่าที่เต็มไปด้วยผักสดใหม่และชีสที่มีคุณภาพ
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <h3 className="section-title">บริการพิเศษของเรา</h3>
                                <ul className="list-unstyled">
                                    <li className="service-list-item">
                                        <h5>บริการส่งฟรี</h5>
                                        <p>เรามีบริการส่งฟรีภายในระยะทาง 5 กิโลเมตรจากร้านของเรา</p>
                                    </li>
                                    <li className="service-list-item">
                                        <h5>พิซซ่าขนาดใหญ่พิเศษ</h5>
                                        <p>พิซซ่าขนาดใหญ่พิเศษสำหรับงานเลี้ยงและกิจกรรมพิเศษ</p>
                                    </li>
                                    <li className="service-list-item">
                                        <h5>โปรโมชั่นสำหรับสมาชิก</h5>
                                        <p>รับส่วนลดพิเศษสำหรับสมาชิกและข้อเสนอพิเศษอื่นๆ</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="text-center py-5">
                    <h3 className="mb-4">ติดต่อเรา</h3>
                    <p>ที่อยู่: 123 ถนนพิซซ่า, กรุงเทพมหานคร</p>
                    <p>โทร: 123-456-7890</p>
                    <p>อีเมล: contact@pizzastore.com</p>
                </section>
            </div>
        </>
    );
}
