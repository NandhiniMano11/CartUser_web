import React, {Component} from 'react';

import Breadcrumb from "../common/breadcrumb";

class Register extends Component {
componentDidMount() {
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/color15.css` );
    }

    constructor (props) {
        super (props)

    }

    render (){


        return (
            <div>
                <Breadcrumb title={'create account'}/>
                
                
                {/*Regsiter section*/}
                <section className="register-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3>create account</h3>
                                <div className="theme-card">
                                    <form className="theme-form">
<a href="pages/register1" class="btn btn-solid">buyer</a> <a href="pages/register" class="btn btn-solid">seller</a>
<br/><br/>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">First Name</label>
                                                <input type="text" className="form-control" id="fname"
                                                       placeholder="First Name" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="review">Company Name</label>
                                                <input type="password" className="form-control" id="lname"
                                                       placeholder="Company Name" required="" />
                                            </div>
                                        </div>
                                           <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">Email</label>
                                                <input type="text" className="form-control" id="fname"
                                                       placeholder="Email" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="review">Mobile</label>
                                                <input type="password" className="form-control" id="lname"
                                                       placeholder="Mobile" required="" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">Address</label>
                                                <input type="text" className="form-control" id="email"
                                                       placeholder="Address" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="review">company logo</label>
                                                <input type="file" className="form-control" id="review"
                                                       placeholder="Upload company logo" required="" />
                                            </div>


                                           
                                        </div>

<div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">Country</label>
                                                <div class="product-page-per-view"><select><option value="Afganistan">Select Country</option>
   <option value="Albania">Albania</option>
   <option value="Algeria">Algeria</option>
   <option value="American Samoa">American Samoa</option>
   <option value="Andorra">Andorra</option>
   <option value="Angola">Angola</option>
   <option value="Anguilla">Anguilla</option>
   <option value="Antigua & Barbuda">Antigua & Barbuda</option>
   <option value="Argentina">Argentina</option>
   <option value="Armenia">Armenia</option>
   <option value="Aruba">Aruba</option>
   <option value="Australia">Australia</option>
   <option value="Austria">Austria</option>
   <option value="Azerbaijan">Azerbaijan</option>
   <option value="Bahamas">Bahamas</option>
   <option value="Bahrain">Bahrain</option>
   <option value="Bangladesh">Bangladesh</option>
   <option value="Barbados">Barbados</option>
   <option value="Belarus">Belarus</option>
   <option value="Belgium">Belgium</option>
   <option value="Belize">Belize</option>
   <option value="Benin">Benin</option>
   <option value="Bermuda">Bermuda</option>
   <option value="Bhutan">Bhutan</option>
   <option value="Bolivia">Bolivia</option>
   <option value="Bonaire">Bonaire</option>
   <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
   <option value="Botswana">Botswana</option>
   <option value="Brazil">Brazil</option>
   <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
   <option value="Brunei">Brunei</option>
   <option value="Bulgaria">Bulgaria</option>
   <option value="Burkina Faso">Burkina Faso</option>
   <option value="Burundi">Burundi</option>
   <option value="Cambodia">Cambodia</option>
   <option value="Cameroon">Cameroon</option>
   <option value="Canada">Canada</option>
   <option value="Canary Islands">Canary Islands</option>
   <option value="Cape Verde">Cape Verde</option>
   <option value="Cayman Islands">Cayman Islands</option>
   <option value="Central African Republic">Central African Republic</option>
   <option value="Chad">Chad</option>
   <option value="Channel Islands">Channel Islands</option>
   <option value="Chile">Chile</option>
   <option value="China">China</option></select></div>
                                            </div>
                                            <div className="col-md-6">
                                               <label htmlFor="review">Trade document</label>
                                                <input type="file" className="form-control" id="review"
                                                       placeholder="Upload company logo" required="" />
                                            </div>
                                        </div>
<div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">Company proof</label>
                                                <input type="file" className="form-control" id="review"
                                                       placeholder="Upload company logo" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="review">Office photos</label>
                                                <input type="file" className="form-control" id="review"
                                                       placeholder="Upload company logo" required="" />
                                            </div>


                                           
                                        </div>


                                         <a href="#" className="btn btn-solid">Submit</a>


                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Register