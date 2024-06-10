import StudentImg from "./assets/student.png"
function Bootstrap() {
    return (
        <>
            <div className="container-fluid">
                <div class="row">
                    <div class="col-md-4 offset-md-1 d-flex justify-content-center align-items-center">
                        <div class="" >
                            <div class="card-body">
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
                    <div class="col-md-6 ms-md-auto">
                        <img src={StudentImg} style={{ width: "100%" }}></img>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Bootstrap;