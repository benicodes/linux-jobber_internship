import React from 'react';
import './landingPage.css';
import profilePic from '../../assets/images/ceo.png';
import { FaUser, FaChevronRight, FaGraduationCap, FaCheck, FaCamera, FaArrowAltCircleDown, FaArrowAltCircleLeft, FaArrowAltCircleRight, FaArrowAltCircleUp, FaArrowCircleDown, FaArrowCircleLeft, FaArrowCircleRight, FaArrowCircleUp } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className='landing'>
      <div className="container">
        <div className="contents">

          {/* left navbar */}
          <div className="left__nav">
            <div className='imageContainer'>
              <img src={profilePic} alt="profile image" />
              <div className='uploadImage'>
                <FaCamera style={{ color: '#fff', fontSize: '10px' }} />
              </div>
            </div>
            <h3 className='userName'>E. Benison</h3>
            <div className='links__container'>
              <button className='links__btn'>
                <div className='icons left__icon'>
                  <FaUser style={{ color: '#6e6e6c', fontWeight: '200', fontSize: '10px' }} />
                </div>
                <span>Profile</span>
                <div className='icons'>
                  <FaChevronRight style={{ color: '#6e6e6c', fontWeight: '200', fontSize: '10px' }} />
                </div>
              </button>
              <button className='links__btn'>
                <div className='icons left__icon'>
                  <FaGraduationCap style={{ color: '#6e6e6c', fontWeight: '200', fontSize: '10px' }} />
                </div>
                <span>Courses</span>
                <div className='icons'>
                  <FaChevronRight style={{ color: '#6e6e6c', fontWeight: '200', fontSize: '10px' }} />
                </div>
              </button>
              <button className='links__btn'>
                <div className='icons left__icon'>
                  <FaCheck style={{ color: '#6e6e6c', fontWeight: '200', fontSize: '10px' }} />
                </div>
                <span>Attendance</span>
                <div className='icons'>
                  <FaChevronRight style={{ color: '#6e6e6c', fontWeight: '200', fontSize: '10px' }} />
                </div>
              </button>
            </div>
            <button className="logout__btn">
              <FaArrowAltCircleRight style={{ color: '#ACB7EB'}} />
              <span>Logout</span>
            </button>
          </div>

          {/* form section */}
          <div className="form__box">
            <form className='form__1' action="">
              <div className='form__wrapper'>
                <div className='form__control'>
                  <div className='splitt'>
                    <span>1.</span>
                    <label htmlFor="">Course of study in school:</label>
                  </div>
                  <input type="text" placeholder='Course of study' />
                </div>
                <div className='form__control'>
                  <div className='splitt'>
                    <span>2.</span>
                    <label htmlFor="">Are you a student?</label>
                  </div>
                  <div class="wrapper">
                    <input type="radio" name="select" id="option-1" checked />
                    <input type="radio" name="select" id="option-2" />
                    <label for="option-1" class="option option-1">
                      <span>Yes</span>
                    </label>
                    <label for="option-2" class="option option-2">
                      <span>No</span>
                    </label>
                  </div>
                </div>
                <div className='form__control'>
                  <div className='splitt'>
                    <span>3.</span>
                    <label htmlFor="">Did you graduate?</label>
                  </div>
                  <div class="wrapper">
                    <input type="radio" name="select" id="option-1" checked />
                    <input type="radio" name="select" id="option-2" />
                    <label for="option-1" class="option option-1">
                      <span>Yes</span>
                    </label>
                    <label for="option-2" class="option option-2">
                      <span>No</span>
                    </label>
                  </div>
                </div>

                <div className='form__control'>
                  <div className='splitt'>
                    <span>3.</span>
                    <label htmlFor="">Does your country require post-graduation service?</label>
                  </div>
                  <div class="wrapper">
                    <input type="radio" name="select" id="option-1" checked />
                    <input type="radio" name="select" id="option-2" />
                    <label for="option-1" class="option option-1">
                      <span>Yes</span>
                    </label>
                    <label for="option-2" class="option option-2">
                      <span>No</span>
                    </label>
                  </div>
                </div>
              </div>
              <button className='form__btn'>
                <FaCheck style={{ color: '#fff', fontSize: '8px' }} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;