import { Row, Col } from "react-bootstrap";

export default function BootstrapGrids() {
    return (
        <div>
        <h2>Bootstrap</h2>
        <h2>Responsive grid systems</h2>
        <Row>
        <Col xs={12} sm={4} md={8} lg={2} xl={3} className="bg-danger text-white">
                Left part is samsung s24 ultra , 
                samsung s25 has 200mp  and equipped with galaxy ai feature as a personalized ai, 
                Here's more on samsung s24 ultraThe Samsung S24 Ultra is a high-end Android smartphone that was released in 2022.
                It features a 6.8-inch Dynamic AMOLED display, a long-lasting 5000mAh battery, and a powerful Exynos 2200 chipset. The phone also comes with a quad-camera setup, including a 108MP primary sensor, a 40MP front camera, and support for 8K video recording. Additionally, the S24 Ultra has a large storage capacity, up to 16GB of RAM, and runs on Android 12 out of the box. It's considered one of the best Android flagships of 2022, offering top-notch performance and camera capabilities.
        </Col>
        <Col xs= {12} sm={8} md={4} lg={8}  xl={7} className="bg-success text-white">
                 right part is apple 16 pro max, apple 16 pro max is equipped with open ai chatgpt along with it's feature of voice recognition known as siri ,
                 it contains 48 megapixels camera, The Apple iPhone 16 Pro Max is a flagship smartphone that boasts an impressive 6.7-inch Super Retina XDR display,
                 powered by Apple's A17 Bionic chip. It features a quad-camera setup with a 48MP primary sensor, 12MP front camera, and a long-lasting battery with fast charging capabilities. The device also supports 5G connectivity, water and dust resistance, and up to 16GB of RAM. With its sleek design and advanced features, the iPhone 16 Pro Max is a top-of-the-line device for those seeking a premium mobile experience. It's available in various storage options and colors.  
        </Col>
        <Col  xl={2} className="bg-primary text-white" >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ut non, ipsum totam laboriosam dolorum neque aspernatur exercitationem necessitatibus. Aut esse non consectetur, similique neque aliquid placeat deleniti consequuntur nulla.
        </Col>
        </Row>
        <div id="wd-bs-responsive-grids">
  <h2>Responsive grid system 2</h2>
  <Row>
    <Col xs={12} md={6} xl={3} className="bg-warning">
         <h3>Column A</h3> </Col>
    <Col xs={12} md={6} xl={3} className="bg-primary text-white">
         <h3>Column B</h3> </Col>
    <Col xs={12} md={6} xl={3} className="bg-danger text-white">
         <h3>Column C</h3> </Col>
    <Col xs={12} md={6} xl={3} className="bg-success text-white">
         <h3>Column D</h3> </Col>
  </Row>
  </div>


<div id="wd-bs-grid-system">
  <h2>Grid system</h2>
  <Row>
    <Col className="bg-danger text-white">
      <h3>Left half</h3>
    </Col>
    <Col className="bg-primary text-white">
      <h3>Right half</h3>
    </Col>
  </Row>
  <Row>
    <Col md={4} className="bg-warning">
      <h3>One third</h3>
    </Col>
    <Col md={8} className="bg-success text-white">
      <h3>Two thirds</h3>
    </Col>
  </Row>
  <Row>
    <Col xs={2} className="bg-black text-white">
      <h3>Sidebar</h3>
    </Col>
    <Col xs={8} className="bg-secondary text-white">
      <h3>Main content</h3>
    </Col>
    <Col xs={2} className="bg-info">
      <h3>Sidebar</h3>
    </Col>
  </Row>
  </div>
  </div>



    );
}