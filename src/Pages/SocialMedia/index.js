import teamImg from "./assets/team.png"
function SocailMedia() {
    return (
        <>
            {/* <div className="container" style={{border:"1px solid red"}}>
                <h5 className="our-schools-title">In the Media</h5>
                <div className="row" style={{ marginBottom: "32px", marginTop: "40px" }}>
                    <div className="col-md-6 " style={{ marginBottom: "32px" }}>
                        <img src={teamImg} style={{ width: "100%" }}></img>
                    </div>

                    <div className="col-md-6" style={{ marginTop: "16px" }}>
                        <span className="title" style={{ color: "red" }}>
                            Creating more equitable employment pathways | Macquarie Group<br></br> Foundation 2023 Annual Review | Macquarie Group
                        </span>
                        <p className="title" style={{marginTop:"16px"}}>
                            Mohini Mohini began her journey at Macquarie through an internship after training with Macquarie Group Foundation grant partner, NavGurukul. NavGurukul provides residential courses in software programming for young women from rural and tribal regions in India.
                        </p>
                    </div>
                </div>
            </div> */}
            <div className="social-page" style={{padding:"40px", background: " #F7F7F7",marginTop:"40px"}}>
                <h5 className="our-schools-title">In the Media</h5>
                <div class="container overflow-hidden" style={{marginTop:"40px"}}>
                    <div class="row gx-4">
                        <div class="col-md-6">
                            <div class="p-3 ">
                                <img src={teamImg} style={{ width: "100%" }}></img>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="p-3">
                                <span className="title" style={{ color: "red" }}>
                                    Creating more equitable employment pathways | Macquarie Group<br></br> Foundation 2023 Annual Review | Macquarie Group
                                </span>
                                <p className="title" style={{ marginTop: "16px" }}>
                                    Mohini Mohini began her journey at Macquarie through an internship after training with Macquarie Group Foundation grant partner, NavGurukul. NavGurukul provides residential courses in software programming for young women from rural and tribal regions in India.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SocailMedia;
