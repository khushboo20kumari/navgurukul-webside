import studentImg from "./assets/student.png";
function Home() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-5 d-flex align-items-center justify-content-center">
                        <div className="content-card d-flex align-items-end justify-content-end">
                            <div className="card-body">
                                <h2 className="heading-line">
                                    The <span className="text-primary">Gurukul</span> for the <br />
                                    <span className="bg-color" style={{ background: "#EB5F42", color: "white" }}>New Age India</span> and its <br></br>New Generation
                                </h2>
                                <p className="font para-line detail">
                                    We are a non-profit orgranization dedicated to bring affordable <br></br>technical education to underprivileged girls in India
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-end">
                        <img style={{ width: "100%", marginLeft: "10px" }} src={studentImg} className="img-fluid" alt="Student" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
