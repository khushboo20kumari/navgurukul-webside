

// import { useState } from 'react';
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
//         <nav className="navbar navbar-expand-lg navbar-light">
//             <div className="container-fluid px-4">
//                 <a className="navbar-brand" href="/">
//                 <h1>Navgurukul </h1>
//                 </a>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item dropdown mx-2 my-2">
//                             {/* <a className="nav-link active" aria-current="page" href="#" onClick={() => handleDropdownClick('about')}>
//                                 About <BiChevronDown style={{ marginLeft: "5px", fontSize: "30px", lineHeight: "27px", textAlign: "center" }} />
//                             </a>
//                             {showDropdown.about && (
//                                 <div className="dropdown-menu show">
//                                     <a className="dropdown-item" href="#">Our History</a>
//                                     <a className="dropdown-item" href="#">Our Team</a>
//                                     <a className="dropdown-item" href="#">Careers</a>
//                                 </div>
//                             )} */}
//                                <li class="nav-item dropdown">
//                                 <a class="nav-link " href="#" role="button" aria-expanded="false">
//                                     Dropdown <BiChevronDown />
//                                 </a>
//                                 <ul class="dropdown-menu">
//                                     <li><a class="dropdown-item" href="#">Action</a></li>
//                                     <li><a class="dropdown-item" href="#">Another action</a></li>
//                                     <li>
//                                         <hr class="dropdown-divider" />
//                                     </li>
//                                     <li class="nav-item dropend">
//                                         <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                             Dropdown
//                                         </a>
//                                         <ul class="dropdown-menu">
//                                             <li><a class="dropdown-item" href="#">Action</a></li>
//                                             <li><a class="dropdown-item" href="#">Another action</a></li>
//                                             <li>
//                                                 <hr class="dropdown-divider" />
//                                             </li>
//                                             <li class="nav-item dropend">
//                                                 <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                                     Dropdown
//                                                 </a>
//                                                 <ul class="dropdown-menu">
//                                                     <li><a class="dropdown-item" href="#">Action</a></li>
//                                                     <li><a class="dropdown-item" href="#">Another action</a></li>
//                                                     <li>
//                                                         <hr class="dropdown-divider" />
//                                                     </li>
//                                                     <li class="nav-item dropend">
//                                                         <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                                             Dropdown
//                                                         </a>
//                                                         <ul class="dropdown-menu">
//                                                             <li><a class="dropdown-item" href="#">Action</a></li>
//                                                             <li><a class="dropdown-item" href="#">Another action</a></li>
//                                                             <li>
//                                                                 <hr class="dropdown-divider" />
//                                                             </li>
//                                                             <li><a class="dropdown-item" href="#">Something else here</a></li>
//                                                         </ul>
//                                                     </li>
//                                                 </ul>
//                                             </li>
//                                         </ul>
//                                     </li>
//                                 </ul>
//                             </li>
//                         </li>
//                         <li className="nav-item dropdown mx-2 my-2">
//                             <a className="nav-link active" aria-current="page" href="#" onClick={() => handleDropdownClick('schools')}>
//                                 Schools <BiChevronDown style={{ marginLeft: "5px", fontSize: "30px" }} />
//                             </a>
//                             {showDropdown.schools && (
//                                 <div className="dropdown-menu show">
//                                     <a className="dropdown-item" href="#">School 1</a>
//                                     <a className="dropdown-item" href="#">School 2</a>
//                                     <a className="dropdown-item" href="#">School 3</a>
//                                 </div>
//                             )}
//                         </li>
//                         <li className="nav-item dropdown mx-2 my-2">
//                             <a className="nav-link active" aria-current="page" href="#" onClick={() => handleDropdownClick('digitalInitiatives')}>
//                                 Digital Initiatives <BiChevronDown style={{ marginLeft: "5px", fontSize: "30px" }} />
//                             </a>
//                             {showDropdown.digitalInitiatives && (
//                                 <div className="dropdown-menu show">
//                                     <a className="dropdown-item" href="#">Initiative 1</a>
//                                     <a className="dropdown-item" href="#">Initiative 2</a>
//                                     <a className="dropdown-item" href="#">Initiative 3</a>
//                                 </div>
//                             )}
//                         </li>
//                         <li className="nav-item dropdown mx-2 my-2">
//                             <a className="nav-link active" aria-current="page" href="#" onClick={() => handleDropdownClick('getInvolved')}>
//                                 Get Involved <BiChevronDown style={{ marginLeft: "5px", fontSize: "30px" }} />
//                             </a>
//                             {showDropdown.getInvolved && (
//                                 <div className="dropdown-menu show">
//                                     <a className="dropdown-item" href="#">Volunteer</a>
//                                     <a className="dropdown-item" href="#">Partner</a>
//                                     <a className="dropdown-item" href="#">Donate</a>
//                                 </div>
//                             )}
//                         </li>
//                     </ul>
//                     <ul className="navbar-nav">
//                         <button
//                             type="button"
//                             className="btn btn-primary mx-2 my-2 "
//                             onClick={(e) => {
//                                 e.preventDefault();
//                                 window.open("/hiring", "_blank");
//                             }}
//                         >
//                             Hire from Us
//                         </button>
//                         <button
//                             type="button"
//                             className="btn btn-primary mx-2 my-2 dashed-btn"
//                             onClick={(e) => {
//                                 e.preventDefault();
//                                 window.open("/hiring", "_blank");
//                             }}
//                         >
//                             CSR Enquiries
//                         </button>
//                         <button
//                             style={{ width: "135px" }}
//                             type="button"
//                             className="btn regular-btn mx-2 my-2 donate-btn"
//                             onClick={(e) => {
//                                 e.preventDefault();
//                                 window.open("/donate", "_blank");
//                             }}
//                         >
//                             Donate
//                         </button>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// }
// export default Navbar;








import { useState } from 'react';
import { BiChevronDown } from "react-icons/bi";
import navbarlogo from "./assets/Logo.png"
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
                    <img src={navbarlogo} alt="NavGurukul Icon" style={{ width: "198px" }} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown mx-2 my-2">
                            <a className="nav-link active" aria-current="page" href="#" onClick={() => handleDropdownClick('about')} style={{display:"flex"}}>
                                <p style={{fontWeight:"700px", marginLeft: "5px", fontSize: "300px", lineHeight: "27px", textAlign: "center" }}>About</p> <BiChevronDown style={{fontWeight:"700px", marginLeft: "5px", fontSize: "30px", lineHeight: "27px", textAlign: "center" }} />
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
                            <a className="nav-link active" aria-current="page" href="#" onClick={() => handleDropdownClick('schools')}  style={{display:"flex"}}>
                                Schools <BiChevronDown style={{ marginLeft: "5px", fontSize: "30px" }} />
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
                            <a className="nav-link active" aria-current="page" href="#" onClick={() => handleDropdownClick('digitalInitiatives')}  style={{display:"flex"}}>
                                Digital Initiatives <BiChevronDown style={{ marginLeft: "5px", fontSize: "30px" }} />
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
                            <a className="nav-link active" aria-current="page" href="#" onClick={() => handleDropdownClick('getInvolved')}  style={{display:"flex"}}>
                                Get Involved <BiChevronDown style={{ marginLeft: "5px", fontSize: "30px" }} />
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
                            className="btn btn-primary mx-2 my-2 "
                            onClick={(e) => {
                                e.preventDefault();
                                window.open("/hiring", "_blank");
                            }}
                        >
                            Hire from Us
                        </button>
                        <button
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
                            style={{ width: "135px" }}
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

