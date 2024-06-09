import { data } from "./studentData";
function SchoolsPage() {
    return (
        <>
            <div className="container">
                <h5 className="our-schools-title">Our Schools</h5>
                <div className="row" style={{ marginBottom: "32px"}}>
                    {data.map((item, index) => (
                        <div key={index} className="col-md-6 " style={{marginTop:"40px" }}>
                            <img src={item.img} style={{ width: "100%" }}></img>
                            <div style={{marginTop:"16px"}}>
                                <h6 className="program-tilte">{item.title}</h6>
                                <p class="section-para">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default SchoolsPage;

