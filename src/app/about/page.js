'use client';
import { useState } from 'react';

export default function AboutUs() {
  const [aboutText] = useState(`
    

    ยินดีต้อนรับสู่ ร้านอั๋นพิซซ่า! เราคือร้านพิซซ่าที่ตั้งใจให้บริการคุณด้วยพิซซ่าที่มีรสชาติอันยอดเยี่ยมและวัตถุดิบที่สดใหม่ที่สุดในเมืองของเรา

    ที่ ร้านอั๋นพิซซ่าเราภูมิใจในความหลงใหลในพิซซ่าและการสร้างสรรค์เมนูที่หลากหลายเพื่อตอบสนองทุกรสนิยมของลูกค้า เริ่มต้นจากแป้งพิซซ่าที่เราทำขึ้นเองทุกวัน ไปจนถึงซอสมะเขือเทศที่เราปรุงขึ้นจากสูตรลับของเรา เราใช้ส่วนผสมที่ดีที่สุดเพื่อให้แน่ใจว่าคุณจะได้สัมผัสถึงรสชาติและคุณภาพที่เหนือกว่า

    นอกจากพิซซ่าที่อร่อยแล้ว ร้านของเรายังมีบรรยากาศที่อบอุ่นและเป็นกันเอง ทีมงานของเราพร้อมที่จะต้อนรับคุณด้วยรอยยิ้มและการบริการที่เป็นเลิศ ไม่ว่าคุณจะมาที่ร้านของเรากับครอบครัว เพื่อนฝูง หรือเพื่อจัดงานพิเศษ เรายินดีที่จะทำให้ทุกช่วงเวลาของคุณเป็นประสบการณ์ที่น่าจดจำ

    ขอบคุณที่เลือก ร้านอั๋นพิซซ่าเป็นจุดหมายปลายทางในการอิ่มอร่อยและสร้างความทรงจำดี ๆ ร่วมกับเรา เราหวังว่าจะได้ให้บริการคุณในเร็ว ๆ นี้!
  `);

  return (
    <>
     <h1 className="animate__animated animate__fadeIn"></h1>
     <nav className="animate__animated animate__bounceInDown navbar bg-light navbar-expand-lg z-index-fixed top-0 blur border-radius-xl shadow position-absolute my-3 py-2 start-0 end-0 mx-4"></nav>
      <style jsx>{`
        .about-us {
          background-color: #f8f9fa; /* Light background for contrast */
          padding: 20px; /* Adds padding around the content */
          border-radius: 15px; /* Rounds the corners of the container */
          margin: 20px auto; /* Centers the container and adds some space around it */
          max-width: 800px; /* Limits the width of the container */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adds a subtle shadow for depth */
        }
        .about-us-title {
          text-align: center;
          margin-bottom: 20px;
        }
        .about-us-text {
          white-space: pre-wrap; /* Preserves formatting of the aboutText */
          line-height: 1.6; /* Improves readability */
        }
      `}</style>
      
      <br />
      <br />
      <br />
      <br />
      
      <div className="about-us">
        <h1 className="about-us-title">เกี่ยวกับเรา</h1>
        <p className="about-us-text">{aboutText}</p>
      </div>
    </>
  );
}
