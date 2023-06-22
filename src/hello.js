import React from 'react'
import { Link } from "react-router-dom"
export function Dashboard() {
    return (
        <>
            <div className='container'>
                <div className="raw" style={{ display: "flex", justifyContent: "space-between" }}>
                    <div className="col-3"  >
                        <div style={{ backgroundColor: "darkgreen", border: "2px solid dimgrey", borderBottomRightRadius: "30px", borderTopRightRadius: "30px", color: "white", textAlign: "center" }}>
                            <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" height="100px" width="100px" style={{ borderRadius: "50%" }} />
                            <h3>Tohamy</h3>
                            <p>tohamy99@yahoo.com</p>
                        </div>
                        <div style={{ backgroundColor: "darkblue", color: "white", border: "2px solid ghostwhite ", borderBottomRightRadius: "30px", borderTopRightRadius: "30px", paddingBottom: "60%", textAlign: "center" }}>
                            <img src="https://cdn.icon-icons.com/icons2/3522/PNG/512/dashboard_icon_221153.png" height="50px" width="50px" alt="dashboard" />dashboard<br /><br />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqFbh1rrg9cpYUK1TijtcoyDgkwxDK8CyJ33MpWCS9BBCXKpOgtwTCjwPpjg62YW-H0oM&usqp=CAU" height="50px" width="50px" alt="profiles" />profiles<br /><br />
                            <img src="https://static.thenounproject.com/png/2445064-200.png" height="50px" width="50px" alt="subscription" />subscription<br /><br />
                            <img src="https://static.thenounproject.com/png/3146970-200.png" height="50px" width="50px" alt="customization" />customization<br /><br />
                            <div id="wrapper" style={{ textAlign: "" }}>
                                <div id="calendario">
                                    <h2>Feb 2023</h2>
                                    <table>
                                        <thead>
                                            <td>Sun</td>
                                            <td>Mon</td>
                                            <td>Tue</td>
                                            <td>Wed</td>
                                            <td>Thur</td>
                                            <td>Fri</td>
                                            <td>Sat</td>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td><input type="button" value="1" /></td>
                                                <td><input type="button" value="2" /></td>
                                                <td><input type="button" value="3" /></td>
                                                <td><input type="button" value="4" /></td>
                                                <td><input type="button" value="5" /></td>
                                            </tr>
                                            <tr>
                                                <td><input type="button" value="6" /></td>
                                                <td><input type="button" value="7" /></td>
                                                <td><input type="button" value="8" /></td>
                                                <td><input type="button" value="9" /></td>
                                                <td><input type="button" value="10" /></td>
                                                <td><input type="button" value="11" /></td>
                                                <td><input type="button" value="12" /></td>
                                            </tr>
                                            <tr>
                                                <td><input type="button" value="13" /></td>
                                                <td><input type="button" value="14" /></td>
                                                <td><input type="button" value="15" /></td>
                                                <td><input type="button" value="16" /></td>
                                                <td><input type="button" value="17" /></td>
                                                <td><input type="button" value="18" /></td>
                                                <td><input type="button" value="19" /></td>
                                            </tr>
                                            <tr>
                                                <td><input type="button" value="20" /></td>
                                                <td><input type="button" value="21" /></td>
                                                <td><input type="button" value="22" /></td>
                                                <td><input type="button" value="23" /></td>
                                                <td><input type="button" value="24" /></td>
                                                <td><input type="button" value="25" /></td>
                                                <td><input type="button" value="26" /></td>
                                            </tr>
                                            <tr>
                                                <td><input type="button" value="27" /></td>
                                                <td><input type="button" value="28" /></td>
                                                <td><input type="button" value="29" /></td>
                                                <td><input type="button" value="30" /></td>
                                                <td><input type="button" value="31" /></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div style={{ marginTop: "15%", marginLeft: "4%" }}>
                                    <Link to="/Message"><button style={{ marginTop: "15px" }} class="button-10">Send Message</button></Link>
                                    <Link to="/Createaccount"><button style={{ marginTop: "15px" }} class="button-10">Create Account</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", justifyContent: "space-around", color: "white", backgroundColor: "darkgreen", border: "2px solid darkgreen", borderRadius: "10px", margin: "15px", width: "200px", padding: "15px" }}>
                                <div>
                                    <h5>Total balance</h5>
                                    <h3>$2256</h3>
                                    <p>update hour ago</p>
                                </div>
                                <div>
                                    <img src="https://icons.veryicon.com/png/o/business/official-icon-of-qianjinding-supply-chain-2/balance-10.png" height="40px" width="40px" />
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-around", backgroundColor: "yellow", border: "2px solid yellow", borderRadius: "10px", margin: "15px", width: "200px", padding: "15px" }}>
                                <div>
                                    <h5>Total sales</h5>
                                    <h3>24</h3>
                                    <p>update hour ago</p>
                                </div>
                                <div>
                                    <img src="https://cdn-icons-png.flaticon.com/128/3144/3144573.png" height="40px" width="40px" />
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-around", color: "white", backgroundColor: "darkgreen", border: "2px solid darkgreen", borderRadius: "10px", margin: "15px", width: "200px", padding: "15px" }}>
                                <div>
                                    <h5>Total expenses</h5>
                                    <h3>$12</h3>
                                    <p>update hour ago</p>
                                </div>
                                <div>
                                    <img src="https://cdn-icons-png.flaticon.com/128/2488/2488980.png" height="40px" width="40px" />
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-around", color: "white", backgroundColor: "darkblue", border: "2px solid darkblue", borderRadius: "10px", margin: "15px", width: "200px", padding: "15px" }}>
                                <div>
                                    <h5>Total visitors</h5>
                                    <h3>3</h3>
                                    <p>update hour ago</p>
                                </div>
                                <div>
                                    <img src="https://cdn-icons-png.flaticon.com/512/634/634013.png" height="40px" width="40px" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div style={{ display: "flex", justifyContent: "space-around", marginTop: "5%" }}>
                                <div>
                                    <div style={{ border: "1px solid", borderRadius: "8px", width: "250px", padding: "10px", height: "80px", margin: "10px" }}>
                                        <h6>Taylor Swift</h6>
                                        <p>24 April,2023 | 04:00 PM</p><br />
                                    </div>
                                    <div style={{ border: "1px solid", borderRadius: "8px", width: "250px", padding: "10px", height: "80px", margin: "10px" }}>
                                        <h6>Well Smith</h6>
                                        <p>24 April,2023 | 04:00 PM</p><br />
                                    </div>
                                    <div style={{ border: "1px solid", borderRadius: "8px", width: "250px", padding: "10px", height: "80px", margin: "10px" }}>
                                        <h6>Johnson</h6>
                                        <p>24 April,2023 | 04:00 PM</p><br />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                                        <div>
                                            <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" height="30px" width="30px" />
                                        </div>
                                        <div>
                                            <hr style={{ borderRadius: "10px", border: "10px solid yellow", width: "600px" }} />Shopping
                                        </div>
                                    </div><br />
                                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                                        <div>
                                            <img src="https://cdn-icons-png.flaticon.com/512/2432/2432572.png" height="30px" width="30px" />
                                        </div>
                                        <div>
                                            <hr style={{ borderRadius: "10px", border: "10px solid pink", width: "600px" }} />Electronics
                                        </div>
                                    </div><br />
                                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                                        <div>
                                            <img src="https://www.iconbolt.com/preview/facebook/voyage-icons/international-travel.svg" height="30px" width="30px" />
                                        </div>
                                        <div>
                                            <hr style={{ borderRadius: "10px", border: "10px solid yellow", width: "600px" }} />Travels
                                        </div>
                                    </div><br />
                                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                                        <div>
                                            <img src="https://www.iconbolt.com/preview/facebook/voyage-icons/international-travel.svg" height="30px" width="30px" />
                                        </div>
                                        <div>
                                            <hr style={{ borderRadius: "10px", border: "10px solid pink", width: "600px" }} />Travels
                                        </div>
                                    </div><br />
                                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                                        <div>
                                            <img src="https://www.iconbolt.com/preview/facebook/voyage-icons/international-travel.svg" height="30px" width="30px" />
                                        </div>
                                        <div>
                                            <hr style={{ borderRadius: "10px", border: "10px solid yellow", width: "600px" }} />Travels
                                        </div>
                                    </div><br />
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzqS9fF2adapfO94zEfcEY5L8MyuP57SzgYK45maiZyAIBLmxCFajMtVbnVb09HiKN5y8&usqp=CAU" height="250px" width="750px" alt="image not found" style={{
                                    border: "1px solid ", borderRadius: "8px"
                                }} />
                            </div>
                            <div>
                                <ul style={{ listStyleType: "none" }}>
                                    <li><img src="https://pixlok.com/wp-content/uploads/2021/04/Google-Icon-PNG.jpg" height="60px" width="60px" />Google</li>
                                    <li><img src="https://cdn-icons-png.flaticon.com/512/4926/4926581.png" height="60px" width="60px" />Foursqure</li>
                                    <li><img src="https://cdn-icons-png.flaticon.com/512/1051/1051281.png" height="60px" width="60px" />Kickstarter</li>
                                    <li><img src="https://static.vecteezy.com/system/resources/previews/000/638/514/original/vector-talking-bubble-chat-icon.jpg" height="60px" width="60px" />Talk</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}