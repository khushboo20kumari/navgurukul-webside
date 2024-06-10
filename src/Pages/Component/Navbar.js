// import { useState } from 'react';
// import navgurukulIcon from './Assets/navgurukul-icon.png';
// import { BiChevronDown } from "react-icons/bi";

// function Navbar() {
//     const [showDropdown, setShowDropdown] = useState({
//         about: false,
//         schools: false,
//         digitalInitiatives: false,
//         getInvolved: false,
//     });

//     const handleDropdownClick = (menu) => {
//         setShowDropdown((prevState) => ({
//             ...prevState,
//             [menu]: !prevState[menu]
//         }));
//     };

//     return (
//         <>
//             <nav className="navbar navbar-expand-lg navbar-light">
//                 <div className="container-fluid" style={{ padding: "1px 32px 1px 32px" }}>
//                     <a className="navbar-brand" href="/">
//                         <img src={navgurukulIcon} alt="NavGurukul Icon" style={{width:"198px"}}/>
//                     </a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
//                         <ul className="navbar-nav me-auto mb-4 mb-lg-0">
//                             <li className="nav-item dropdown navabr-text section-para mx-3 my-2 fixed-dimensions">
//                                 <a className="nav-link active navabr-tex" aria-current="page" href="#" onClick={() => handleDropdownClick('about')}>
//                                     About <BiChevronDown style={{ marginLeft: "5px", fontSize: "30px",lineHeight:"27px",textAlign:"center" }} />
//                                 </a>
//                                 {showDropdown.about && (
//                                     <div className="dropdown-menu show">
//                                         <a className="dropdown-item dropdown-item-spacing" href="#">Our History</a>
//                                         <a className="dropdown-item dropdown-item-spacing" href="#">Our Team</a>
//                                         <a className="dropdown-item dropdown-item-spacing" href="#">Careers</a>
//                                     </div>
//                                 )}
//                             </li>
//                             <li className="nav-item dropdown navabr-text section-para mx-3 my-2 fixed-dimensions">
//                                 <a className="nav-link active navabr-tex" aria-current="page" href="#" onClick={() => handleDropdownClick('schools')}>
//                                     Schools <BiChevronDown style={{ marginLeft: "5px", fontSize: "30px" }} />
//                                 </a>
//                                 {showDropdown.schools && (
//                                     <div className="dropdown-menu show">
//                                         <a className="dropdown-item dropdown-item-spacing" href="#">School 1</a>
//                                         <a className="dropdown-item dropdown-item-spacing" href="#">School 2</a>
//                                         <a className="dropdown-item dropdown-item-spacing" href="#">School 3</a>
//                                     </div>
//                                 )}
//                             </li>
//                             <li className="nav-item dropdown navabr-text section-para mx-3 my-2 fixed-dimensions">
//                                 <a className="nav-link active navabr-tex" aria-current="page" href="#" onClick={() => handleDropdownClick('digitalInitiatives')}>
//                                     Digital Initiatives <BiChevronDown style={{ marginLeft: "5px", fontSize: "30px" }} />
//                                 </a>
//                                 {showDropdown.digitalInitiatives && (
//                                     <div className="dropdown-menu show">
//                                         <a className="dropdown-item dropdown-item-spacing" href="#">Initiative 1</a>
//                                         <a className="dropdown-item dropdown-item-spacing" href="#">Initiative 2</a>
//                                         <a className="dropdown-item dropdown-item-spacing" href="#">Initiative 3</a>
//                                     </div>
//                                 )}
//                             </li>
//                             <li className="nav-item dropdown section-para mx-3 my-2 fixed-dimensions">
//                                 <a className="nav-link active navabr-text" aria-current="page" href="#" onClick={() => handleDropdownClick('getInvolved')}>
//                                     Get Involved <BiChevronDown style={{ marginLeft: "5px", fontSize: "30px" }} />
//                                 </a>
//                                 {showDropdown.getInvolved && (
//                                     <div className="dropdown-menu show">
//                                         <a className="dropdown-item dropdown-item-spacing" href="#">Volunteer</a>
//                                         <a className="dropdown-item dropdown-item-spacing" href="#">Partner</a>
//                                         <a className="dropdown-item dropdown-item-spacing" href="#">Donate</a>
//                                     </div>
//                                 )}
//                             </li>
//                         </ul>
//                         <ul className="navbar-nav">
//                             <button
//                                 type="button"
//                                 className="btn section-para btn-primary mx-3 my-2 dashed-btn fixed-dimensions donate-btn"
//                                 onClick={(e) => {
//                                     e.preventDefault();
//                                     window.open("/hiring", "_blank");
//                                 }}
//                             >
//                                 Hire from Us
//                             </button>
//                             <button
//                                 type="button"
//                                 className="btn section-para btn-primary mx-3 my-2 dashed-btn fixed-dimensions donate-btn"
//                                 onClick={(e) => {
//                                     e.preventDefault();
//                                     window.open("/hiring", "_blank");
//                                 }}
//                             >
//                                 CSR Enquiries
//                             </button>
//                             <button
//                                style={{width:"135px"}}
//                                 type="button"
//                                 className="btn section-para regular-btn my-2 mx-3 career-button fixed-dimensions donate-btn"
//                                 onClick={(e) => {
//                                     e.preventDefault();
//                                     window.open("/donate", "_blank");
//                                 }}
//                             >
//                                 Donate
//                             </button>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// }

// export default Navbar;


import { useState } from 'react';
import navgurukulIcon from './Assets/navgurukul-icon.png';
import { BiChevronDown } from "react-icons/bi";

function Navbar() {
    const [showDropdown, setShowDropdown] = useState({
        about: false,
        schools: false,
        digitalInitiatives: false,
        getInvolved: false,
    });

    const handleDropdownClick = (menu) => {
        setShowDropdown((prevState) => ({
            ...prevState,
            [menu]: !prevState[menu]
        }));
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid px-4">
                <a className="navbar-brand" href="/">
                    <img src={navgurukulIcon} alt="NavGurukul Icon" style={{ width: "198px" }} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown mx-2 my-2">
                            <a className="nav-link active" aria-current="page" href="#" onClick={() => handleDropdownClick('about')}>
                                <span style={{ fontSize: "18px", fontWeight: "700px" }}> About</span> <BiChevronDown style={{ marginLeft: "5px", fontSize: "18px", lineHeight: "27px", textAlign: "center" }} />
                            </a>
                            {showDropdown.about && (
                                <div className="dropdown-menu show">
                                    <a className="dropdown-item" href="#">Our History</a>
                                    <a className="dropdown-item" href="#">Our Team</a>
                                    <a className="dropdown-item" href="#">Careers</a>
                                </div>
                            )}
                        </li>
                        <li className="nav-item dropdown mx-2 my-2">
                            <a className="nav-link active" aria-current="page" href="#" onClick={() => handleDropdownClick('schools')} style={{ display: "flex" }}>
                                <span style={{ fontSize: "18px", fontWeight: "700px" }}> Schools </span><BiChevronDown style={{ marginLeft: "5px", fontSize: "18px" }} />
                            </a>
                            {showDropdown.schools && (
                                <div className="dropdown-menu show">
                                    <a className="dropdown-item" href="#">School 1</a>
                                    <a className="dropdown-item" href="#">School 2</a>
                                    <a className="dropdown-item" href="#">School 3</a>
                                </div>
                            )}
                        </li>
                        <li className="nav-item dropdown mx-2 my-2">
                            <a className="nav-link active" aria-current="page" href="#" onClick={() => handleDropdownClick('digitalInitiatives')}>
                                <span style={{ fontSize: "18px", fontWeight: "700px" }}> Digital Initiatives </span><BiChevronDown style={{ marginLeft: "5px", fontSize: "18px" }} />
                            </a>
                            {showDropdown.digitalInitiatives && (
                                <div className="dropdown-menu show">
                                    <a className="dropdown-item" href="#">Initiative 1</a>
                                    <a className="dropdown-item" href="#">Initiative 2</a>
                                    <a className="dropdown-item" href="#">Initiative 3</a>
                                </div>
                            )}
                        </li>
                        <li className="nav-item dropdown mx-2 my-2">
                            <a className="nav-link active" aria-current="page" href="#" onClick={() => handleDropdownClick('getInvolved')}>
                                <span style={{ fontSize: "18px", fontWeight: "700px" }}>  Get Involved</span>  <BiChevronDown style={{ marginLeft: "5px", fontSize: "18px" }} />
                            </a>
                            {showDropdown.getInvolved && (
                                <div className="dropdown-menu show">
                                    <a className="dropdown-item" href="#">Volunteer</a>
                                    <a className="dropdown-item" href="#">Partner</a>
                                    <a className="dropdown-item" href="#">Donate</a>
                                </div>
                            )}
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <button
                            type="button"
                            style={{fontSize:"18px",fontWeight:"700px"}}
                            className="btn btn-primary mx-2 my-2  dashed-btn"
                            onClick={(e) => {
                                e.preventDefault();
                                window.open("/hiring", "_blank");
                            }}
                        >
                            Hire from Us
                        </button>
                        <button
                        style={{fontSize:"18px",fontWeight:"700px"}}
                            type="button"
                            className="btn btn-primary mx-2 my-2 dashed-btn"
                            onClick={(e) => {
                                e.preventDefault();
                                window.open("/hiring", "_blank");
                            }}
                        >
                            CSR Enquiries
                        </button>
                        <button
                            style={{ width: "135px",fontSize:"18px",fontWeight:"700px"}}
                            type="button"
                            className="btn regular-btn mx-2 my-2 donate-btn"
                            onClick={(e) => {
                                e.preventDefault();
                                window.open("/donate", "_blank");
                            }}
                        >
                            Donate
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

