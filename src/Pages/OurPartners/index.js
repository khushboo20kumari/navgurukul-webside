import { data } from "./data"
function OurPartners() {
    return (
        <>
            <div className="container" style={{border:"1px solid red"}}>
                <h5 className="our-schools-title">Our Partners</h5>
                <div className="row" style={{ marginBottom: "32px", marginTop: "40px" }}>
                    {data.map((item, index) => (
                        <div key={index} className="col-md-4" style={{ marginBottom: "32px",padding:"32px"}}>
                            <img src={item.img}></img>
                            <div style={{ marginTop: "16px" }}>
                                <h6 className="company-tilte">{item.tilte}</h6>
                                <p class="section-para">
                                    {item.description}
                                </p>
                                <span className="writterName">{item.writteName}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default OurPartners;