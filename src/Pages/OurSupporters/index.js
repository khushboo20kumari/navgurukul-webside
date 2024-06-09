import { data } from "./data"
function OurSupporters() {
    return (
        <>
            <div className="container">
                <h5 className="our-schools-title">Our Partners</h5>
                <div className="row" style={{marginTop:"40px"}}>
                    {data.map((item, index) => (
                        <div key={index} className="col-md" style={{ padding: "32px", position: "relative", bottom: "30px" }}>
                            <img src={item.img} style={{ width: item.width }}></img>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default OurSupporters;