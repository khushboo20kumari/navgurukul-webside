function Bringachange() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12" style={{textAlign:"center"}}>
                        <h6 className="Bring-change-title">Bring a change!</h6>
                        <div className="button">
                            <button
                                type="button"
                                class="btn section-para regular-btn my-2 mx-8 career-button fixed-dimensions " style={{ width: "154px" }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.open(
                                        "/donate",
                                        "_blank"
                                    );
                                }}
                            >
                                Donate
                            </button>
                            <button
                                type="button"
                                class="btn section-para regular-btn my-2 mx-3 career-button fixed-dimensions "
                                style={{ width: "154px" }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.open(
                                        "/donate",
                                        "_blank"
                                    );
                                }}
                            >
                                Donate
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Bringachange;
