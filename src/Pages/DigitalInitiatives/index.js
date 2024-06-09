import { data } from "./Digitallinitiadata";
import lunch from "./assets/launch.png";
function DigitalInitiatives() {
    return (
        <>
            <div class="container overflow-hidden" style={{marginTop:"40px"}}>
            <h5 className="our-alumnus-title">Digital Initiatives</h5>
                <div class="row gx-4">
                    {data.map((item, index) => (
                        <div class="col-md-4" style={{marginTop:"40px"}}>
                            <div class="p-3">
                                <img src={item.img}></img>
                                <div style={{ marginTop: "16px" }}>
                                    <h6 className="Digital-tilte">{item.title}</h6>
                                    <p class="section-digital">
                                        {item.description}
                                    </p>
                                    <p className="">
                                        <span style={{ color: "red", fontWeight: "700px" }} className="Digital-tilte">visit Webside</span> <img src={lunch} ></img>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default DigitalInitiatives;