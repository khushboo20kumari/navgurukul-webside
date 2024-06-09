import { data } from "./data";

function AlumnusNavgurukul() {
    return (
        <>
            {/* <div className="container" style={{ border: "1px solid red" }}>
                <h5 className="our-Digital-title">Digital Initiatives</h5>
                <div className="row">
                    {data.map((item, index) => (
                        <div key={index} className="col-md-6 container-card" style={{ padding: "32px" }}>
                            <div style={{ marginTop: "16px" }}>
                                <img src={item.dotimg} style={{marginBottom:"8px"}}></img><br></br>
                                <span class="section-digital">
                                    {item.description}
                                </span><br></br>
                                <span class="section-digital">
                                    {item.description}
                                </span>
                            </div>
                            <div style={{display:"flex",marginTop:"64px"}}>
                                <div style={{}}>
                                    <img src={item.img}></img>
                                </div>
                                <div style={{marginLeft:"32px"}}>
                                    <h6>{item.name}</h6>
                                    <p>{item.address}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
            <div class="container overflow-hidden"  style={{marginTop:"40px"}}>
                <div class="row gx-4">
                    <h5 className="our-alumnus-title">Hear from the alumnus</h5>
                    {data.map((item, index) => (
                        <div class="col" style={{ marginTop: "32px" }}>
                            <div key={index} class="p-2 border container-card" >
                                <div style={{ marginTop: "16px", padding: "32px" }}>
                                    <img src={item.dotimg} style={{ marginBottom: "8px" }}></img><br></br>
                                    <span class="section-digital">
                                        {item.description}
                                    </span><br></br>
                                    <span class="section-digital">
                                        {item.description}
                                    </span>
                                </div>
                                <div style={{ display: "flex", padding: "32px" }}>
                                    <div style={{}}>
                                        <img src={item.img}></img>
                                    </div>
                                    <div style={{ marginLeft: "32px" }}>
                                        <h6>{item.name}</h6>
                                        <p>{item.address}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default AlumnusNavgurukul;