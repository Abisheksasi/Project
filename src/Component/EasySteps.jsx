import { CgArrowLongRight } from "react-icons/cg";
import './Component.css';
import book from '../image/bookings.svg'
import book2 from '../image/bookings2.svg'
import book3 from '../image/bookings3.svg'
import Container from 'react-bootstrap/Container';
function Easy() {
    return (
        <Container className='mt-5 Accommodation Easy-ste' fluid>
            <h1 className='text-start Heading'>Book your student accommodation in 3 easy steps</h1>
            <p className='text-start Paragraph'>Book places in major cities and universities across the globe</p>
            <ul className="gallery Easy mt-5">
                <li className='homepage  border border-black-50 rounded easy'>
                    <div className="card border-0 home">
                    <div className="step d-flex align-items-center justify-content-center position-absolute position-absolute">1</div>
                        <img src={book} className="mt-3 ms-4 image" alt="..." />
                        <div className="card-body home-body">
                            <h1 className='text-dark text-start ms-3 me-5'>Discover and Finalise</h1>
                            <p className='text-start ms-3'>Choose from a plethora of verified student home listings.</p>
                        </div>
                    </div>
                </li>
                <div className="d-flex justify-content-center align-items-center"><CgArrowLongRight className="arrow" /></div>
                <li className='homepage  border border-black-50 rounded easy'>
                    <div className="card border-0 home">
                    <div className="step d-flex align-items-center justify-content-center position-absolute position-absolute">2</div>
                        <img src={book2} className="mt-3 ms-4 image" alt="..." />
                        <div className="card-body home-body">
                            <h1 className='text-dark text-start ms-3 me-5'>Discover and Finalise</h1>
                            <p className='text-start ms-3'>Choose from a plethora of verified student home listings.</p>
                        </div>
                    </div>
                </li>
                <div className="d-flex justify-content-center align-items-center"><CgArrowLongRight className="arrow" /></div>
                <li className='homepage  border border-black-50 rounded easy'>
                    <div className="card border-0 home">
                    <div className="step d-flex align-items-center justify-content-center position-absolute position-absolute">3</div>
                        <img src={book3} className="mt-3 ms-4 image" alt="..." />
                        <div className="card-body home-body">
                            <h1 className='text-dark text-start ms-3 me-5'>Discover and Finalise</h1>
                            <p className='text-start ms-3'>Choose from a plethora of verified student home listings.</p>
                        </div>
                    </div>
                </li>
            </ul>
        </Container>
    )
}
export default Easy;