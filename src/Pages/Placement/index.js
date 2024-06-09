import { data } from "./data";
function PlacementCom() {
    return (
        <>
            <div className="main-page" style={{background: "#F7F7F7",padding:"40px"}}>
                <div className="container">
                    <div className="row">
                        {data.map((item, index) => (
                            <div key={index} className="col-md col-sm-6" style={{marginBottom:"32px",textAlign:"start",marginLeft:"20px"}}>
                                <div>
                                    <h6 className="program">{item.percentage}</h6>
                                    <p class="detail">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default PlacementCom;