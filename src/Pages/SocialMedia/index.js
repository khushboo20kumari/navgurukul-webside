import teamImg from "./assets/team.png"
function SocailMedia() {
    return (
        <>
            <div className="social-page" style={{ padding: "40px", background: " #F7F7F7", marginTop: "40px" }}>
                <div id="myCarousel" class="carousel slide" data-ride="carousel" style={{background:" #F7F7F7"}}>
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active" style={{color:"#EB5F42"}}></li>
                        <li data-target="#myCarousel" data-slide-to="1" style={{color:"#EB5F42"}}></li>
                        <li data-target="#myCarousel" data-slide-to="2" style={{color:"#EB5F42"}}></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="item active">
                            <h5 className="our-schools-title">In the Media</h5>
                            <div class="container overflow-hidden" style={{ marginTop: "40px" }}>
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

                    </div>
                    <a class="left carousel-control" href="#myCarousel" data-slide="prev" style={{background:"#F7F7F7"}}>
                        <span class="glyphicon glyphicon-chevron-left" style={{color:"white"}}></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#myCarousel" data-slide="next" style={{background:"#F7F7F7"}}>
                        <span class="glyphicon glyphicon-chevron-right" style={{colol:"white"}}></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </>
    )
}
export default SocailMedia;