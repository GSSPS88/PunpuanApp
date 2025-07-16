import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './register.css';
import landlordImage from "../../assets/landlord2.jpg";
import TenantImage from "../../assets/tenant.jpg";

const Register = () => {
  const { role } = useParams();
  const isTenant = role === 'tenant';

  return (
    <div className="register-container box_container container">
      <div className="signUp_text">
        <h1>{isTenant ? 'Sign up for Tenant' : 'Sign up for Landlord'}</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      {/* LEFT SIDE IMAGE + TITLE */}
      <div className="register-left" style={{
        backgroundImage: `url(${isTenant ? TenantImage : landlordImage})`,
        backgroundSize: 'cover',
        filter: 'brightness(80%)',
        backgroundPosition: 'center',
        objectFit: 'cover',
        overflow: 'hidden',
        borderRadius: '16px 0 0 16px'
      }}>
      </div>

      {/* FORM SECTION */}
      <div className="register-form">
        <div className="form-row">
          <label htmlFor="">First Name</label>
          <label htmlFor="">Last Name</label>
          <input className='input_app' type="text" placeholder="First Name" />
          <input className='input_app' type="text" placeholder="Last Name" />
        </div>
        <label htmlFor="">Email</label>
        <input className='input_app' type="email" placeholder="Email" />
        <label htmlFor="">Phone</label>
        <input className='input_app' type="tel" placeholder="Phoone Number" />
        <div className="password-group">
          <label htmlFor="">Password</label>
          <label htmlFor="">Confirm password</label>
          <input className='input_app' type="password" placeholder="Password" />
          <input className='input_app' type="password" placeholder="Confirm Password" />
        </div>

        {isTenant ? (
          <>
            <label>Occupation</label>
            <input className='input_app' type="text" placeholder="Occupation" />
            <label>Income per month</label>
            <select className='select_app'>
              <option value="">Income per month</option>
              <option value="1">3,000,000 - 5,000,000</option>
              <option value="2">5,000,000 - 10,000,000</option>
            </select>

            <div className="upload-group">
              <label>Upload ID card image</label>
              <input className='input_app' type="file" />
            </div>
          </>
        ) : (
          <>
            <label>Bank account number</label>
            <input className='input_app' type="text" placeholder="xxxx-xxxx-xxxx-xxxx" />

            <div className="upload-image-group">
              <div className="upload-group">
                <label>Upload ID card image</label>
                <input className='input_app' type="file" />
              </div>

              <div className="upload-group">
                <label>Upload business license</label>
                <input class="input_app" type="file"/>
              </div>
            </div>
          </>
        )}

        <button className="submit_button small-button">Sign up</button>
        <p className="signIn-text">
          Have Already an account?<Link to="/contactPage" className='link_to'>Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
