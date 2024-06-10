import { data } from "./data";
import Facilitiesat from "./assets/user.png";
import verified from "./assets/verified.png"
function FacilitiesatNavGurukul() {
    return (
        <>
            <div class="container overflow-hidden" style={{marginTop:"40px"}}>
            <h5 className="our-alumnus-title">Key Facilities at NavGurukul</h5>
                <div class="row gx-5" style={{marginTop:"40px"}}>
                    <div class="col">
                        <div>
                            <img src={Facilitiesat} ></img>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3">
                            {data.map((item, index) => (
                                <div key={index} className="col-md-12">
                                    <div style={{ marginTop: "24px", display: "flex" }}>
                                        <div>
                                            <img src={verified} style={{ width: "24px" }}></img>
                                        </div>
                                        <span className="tilte" style={{ marginLeft: "8px",fontSize:"18px",fontWeight:"700px" }}>{item.title}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FacilitiesatNavGurukul;

