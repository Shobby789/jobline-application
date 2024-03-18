import React from "react";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <div className="continer-fluid">
      <div className="continer-fluid">
        <div className="container px-sm-4">
          <div className="container mb-4 py-5">
            <div className="row mb-3">
              <h4 className="fw-semibold mb-4">My Profile</h4>
              <div className="">
                <input type="file" className="form-control" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <label htmlFor="" className="form-label text-medium p-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control py-3 text-medium"
                  placeholder="John Doe"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <label htmlFor="" className="form-label text-medium p-1">
                  Job Title
                </label>
                <input
                  type="text"
                  className="form-control py-3 text-medium"
                  placeholder="Web Developer"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <label htmlFor="" className="form-label text-medium p-1">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control py-3 text-medium"
                  placeholder="+923413549043"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <label htmlFor="" className="form-label text-medium p-1">
                  Email Address
                </label>
                <input
                  type="text"
                  className="form-control py-3 text-medium"
                  placeholder="JohnDoe@gmail.com"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <label htmlFor="" className="form-label text-medium p-1">
                  Portfolio URL
                </label>
                <input
                  type="text"
                  className="form-control py-3 text-medium"
                  placeholder="+923413549043"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12 mb-sm-3">
                    <label htmlFor="" className="form-label text-medium p-1">
                      Current Salary
                    </label>
                    <select className="form-select py-3 text-medium">
                      <option selected>15K - 25K</option>
                      <option value="1">25K - 35K</option>
                      <option value="2">35K - 45K</option>
                      <option value="3">45+</option>
                    </select>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <label htmlFor="" className="form-label text-medium p-1">
                      Expected Salary
                    </label>
                    <select className="form-select py-3 text-medium">
                      <option selected>15K - 25K</option>
                      <option value="1">25K - 35K</option>
                      <option value="2">35K - 45K</option>
                      <option value="3">45+</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 ol-md-6 col-12 mb-3">
                <label htmlFor="" className="form-label text-medium p-1">
                  Experience
                </label>
                <select className="form-select py-3 text-medium">
                  <option selected>0 - 1</option>
                  <option value="1">1 - 2</option>
                  <option value="2">2- 3</option>
                  <option value="3">3+</option>
                </select>
              </div>
              <div className="col-lg-6 ol-md-6 col-12 mb-3">
                <label htmlFor="" className="form-label text-medium p-1">
                  Age
                </label>
                <select className="form-select py-3 text-medium">
                  <option selected>18 - 22</option>
                  <option value="1">22 - 26</option>
                  <option value="2">26- 30</option>
                  <option value="3">30+</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 ol-md-6 col-12 mb-3">
                <label htmlFor="" className="form-label text-medium p-1">
                  Education Level
                </label>
                <select className="form-select py-3 text-medium">
                  <option selected>Matric</option>
                  <option value="1">Intermediate</option>
                  <option value="2">Bachelor's</option>
                  <option value="3">Masters's</option>
                  <option value="3">PhD</option>
                </select>
              </div>
              <div className="col-lg-6 ol-md-6 col-12"></div>
            </div>
            <div className="row mb-5">
              <div className="col-12">
                <label htmlFor="" className="form-label text-medium p-1">
                  Description
                </label>
                <textarea
                  className="form-control py-3 text-medium"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Write about yourself..."
                ></textarea>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2 col-md-3 col-sm-12">
                <button className="w-100 btn btn-dark px-3 rounded-2 text-medium">
                  Save
                </button>
              </div>
            </div>
          </div>
          <div className="container pb-5">
            <div className="row mt-5 mb-3">
              <h4 className="fw-semibold">Social Networks</h4>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <label htmlFor="" className="form-label text-medium p-1">
                  Facebook
                </label>
                <input
                  type="text"
                  className="form-control py-3 text-medium"
                  placeholder="www.fcebook.com/JohnDoe"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <label htmlFor="" className="form-label text-medium p-1">
                  Twitter
                </label>
                <input
                  type="text"
                  className="form-control py-3 text-medium"
                  placeholder="www.twitter.com/JohnDoe"
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <label htmlFor="" className="form-label text-medium p-1">
                  LinkedIn
                </label>
                <input
                  type="text"
                  className="form-control py-3 text-medium"
                  placeholder="www.linkedin.com/JohnDoe"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <label htmlFor="" className="form-label text-medium p-1">
                  Twitter
                </label>
                <input
                  type="text"
                  className="form-control py-3 text-medium"
                  placeholder="Web Developer"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2 col-md-3 col-sm-12">
                <button className="w-100 btn btn-dark px-3 rounded-2 text-medium">
                  Save
                </button>
              </div>
            </div>
          </div>
          <div className="container py-5">
            <div className="row">
              <table className="table text-center">
                <thead>
                  <tr>
                    <th scope="col">Job Title</th>
                    <th scope="col">Date Applied</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* <div className="row">
            <div className='col-lg-2 col-md=-4 col-sm-12 pt-2'>
                <div className="container py-2 mb-2 ps-5">
                    <Link to="" className='text-decoration-none text-medium text-secondary'>Profile</Link>
                </div>
                <div className="container py-2 mb-2 ps-5">
                    <Link to="" className='text-decoration-none text-medium text-secondary'>Applied Jobs</Link>
                </div>
                <div className="container py-2 mb-2 ps-5">
                    <Link to="" className='text-decoration-none text-medium text-secondary'>Job Alerts</Link>
                </div>
                <div className="container py-2 mb-2 ps-5">
                    <Link to="" className='text-decoration-none text-medium text-secondary'>Change Pssword</Link>
                </div>
                <div className="container py-2 mb-2 ps-5">
                    <button className='text-medium text-secondary'>Logout</button>
                </div>
            </div>
            <div className='col-lg-10 col-md=-8 col-sm-12 secondary-bg py-5 px-lg-5 rounded-3'>
                <div className="container mb-4 px-lg-5">
                   <div className="row mb-3">
                        <h4 className="fw-semibold mb-4">My Profile</h4>
                        <div className="">
                            <input type="file" className="form-control" />
                        </div>
                   </div>
                   <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <label htmlFor="" className="form-label text-medium p-1">Full Name</label>
                            <input type="text" className="form-control py-3 text-medium" placeholder='John Doe'/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <label htmlFor="" className="form-label text-medium p-1">Job Title</label>
                            <input type="text" className="form-control py-3 text-medium" placeholder='Web Developer'/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <label htmlFor="" className="form-label text-medium p-1">Phone</label>
                            <input type="text" className="form-control py-3 text-medium" placeholder='+923413549043'/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <label htmlFor="" className="form-label text-medium p-1">Email Address</label>
                            <input type="text" className="form-control py-3 text-medium" placeholder='JohnDoe@gmail.com'/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <label htmlFor="" className="form-label text-medium p-1">Portfolio URL</label>
                            <input type="text" className="form-control py-3 text-medium" placeholder='+923413549043'/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <div className="row">
                                <div className="col-lg-6 ol-md-6 col-12">
                                    <label htmlFor="" className="form-label text-medium p-1">Current Salary</label>
                                    <select className="form-select py-3 text-medium">
                                    <option selected>15K - 25K</option>
                                        <option value="1">25K - 35K</option>
                                        <option value="2">35K - 45K</option>
                                        <option value="3">45+</option>
                                    </select>
                                </div>
                                <div className="col-lg-6 ol-md-6 col-12">
                                    <label htmlFor="" className="form-label text-medium p-1">Expected Salary</label>
                                    <select className="form-select py-3 text-medium">
                                        <option selected>15K - 25K</option>
                                        <option value="1">25K - 35K</option>
                                        <option value="2">35K - 45K</option>
                                        <option value="3">45+</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 ol-md-6 col-12 mb-3">
                            <label htmlFor="" className="form-label text-medium p-1">Experience</label>
                            <select className="form-select py-3 text-medium">
                                <option selected>0 - 1</option>
                                <option value="1">1 - 2</option>
                                <option value="2">2- 3</option>
                                <option value="3">3+</option>
                            </select>
                        </div>
                        <div className="col-lg-6 ol-md-6 col-12 mb-3">
                            <label htmlFor="" className="form-label text-medium p-1">Age</label>
                            <select className="form-select py-3 text-medium">
                                <option selected>18 - 22</option>
                                <option value="1">22 - 26</option>
                                <option value="2">26- 30</option>
                                <option value="3">30+</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 ol-md-6 col-12 mb-3">
                            <label htmlFor="" className="form-label text-medium p-1">Education Level</label>
                            <select className="form-select py-3 text-medium">
                                <option selected>Matric</option>
                                <option value="1">Intermediate</option>
                                <option value="2">Bachelor's</option>
                                <option value="3">Masters's</option>
                                <option value="3">PhD</option>
                            </select>
                        </div>
                        <div className="col-lg-6 ol-md-6 col-12 mb-3"></div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-12">
                            <label htmlFor="" className="form-label text-medium p-1">Description</label>
                            <textarea className='form-control py-3 text-medium' name="" id="" cols="30" rows="10" placeholder='Write about yourseld...'></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <button className="w-100 btn btn-dark px-3 rounded-5 text-medium">Save</button>
                        </div>
                    </div>
                </div>
                <div className="container px-lg-5">
                    <div className="row mt-5 mb-3">
                        <h4 className="fw-semibold">Social Networks</h4>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <label htmlFor="" className="form-label text-medium p-1">Facebook</label>
                            <input type="text" className="form-control py-3 text-medium" placeholder='www.fcebook.com/JohnDoe'/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <label htmlFor="" className="form-label text-medium p-1">Twitter</label>
                            <input type="text" className="form-control py-3 text-medium" placeholder='www.twitter.com/JohnDoe'/>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <label htmlFor="" className="form-label text-medium p-1">LinkedIn</label>
                            <input type="text" className="form-control py-3 text-medium" placeholder='www.linkedin.com/JohnDoe'/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <label htmlFor="" className="form-label text-medium p-1">Twitter</label>
                            <input type="text" className="form-control py-3 text-medium" placeholder='Web Developer'/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <button className="w-100 btn btn-dark px-3 rounded-5 text-medium">Save</button>
                        </div>
                    </div>
                </div>
                <div className="container px-lg-5">
                    <div className="row px-lg-3">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th scope="col">Job Title</th>
                                    <th scope="col">Date Applied</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th>3</th>
                                    <td>Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
