import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React from 'react';
import { Calendar } from 'antd';
import { BankOutlined } from '@ant-design/icons'
import { RiseOutlined } from '@ant-design/icons'
import { BarChartOutlined } from '@ant-design/icons'
import { AppstoreAddOutlined } from '@ant-design/icons'
import { Avatar, Space } from 'antd';
import { Progress } from 'antd'
import { Rate } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons'
import { CarFilled } from '@ant-design/icons'
import { BulbFilled } from '@ant-design/icons'

const { Content, Footer, Sider } = Layout;

const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
};

export const Dashboard = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const { token } = theme.useToken();
    const wrapperStyle = {
        width: 300,
        marginTop: 100,
        marginBottom: 100,
        paddingRight: 15,
        paddingLeft: 20,
        border: `0px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    }
    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                width="300"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div style={{ backgroundColor: "#0a0a29", border: "2px solid dimgrey", borderBottomRightRadius: "30px", borderTopRightRadius: "30px", color: "white", textAlign: "center" }}>
                    <Space wrap size={16}>
                        <Avatar size={150} icon={<UserOutlined />} />
                    </Space>
                    <h3>Tohamy</h3>
                    <p>tohamy99@yahoo.com</p>
                </div>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['4']}
                    items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
                        (icon, index) => ({
                            key: String(index + 1),
                            icon: React.createElement(icon),
                            label: `Dashboard ${index + 1}`,
                        }),
                    )}
                />

                <div style={wrapperStyle}>
                    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                </div>

            </Sider>
            <Layout>
                <Content
                    style={{ margin: '24px 16px 0', }}>
                    <div style={{ padding: 24, minHeight: 600, background: colorBgContainer, }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", justifyContent: "space-around", color: "white", backgroundColor: "darkgreen", border: "2px solid darkgreen", borderRadius: "10px", margin: "20px", width: "250px", padding: "15px", height: "150px" }}>
                                <div>
                                    <h5>Total balance</h5>
                                    <h3>$2256</h3>
                                    <p>update hour ago</p>
                                </div>
                                <div>
                                    <h1><BankOutlined /></h1>
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-around", backgroundColor: "yellow", border: "2px solid yellow", borderRadius: "10px", margin: "15px", width: "250px", padding: "15px" }}>
                                <div>
                                    <h5>Total sales</h5>
                                    <h3>24</h3>
                                    <p>update hour ago</p>
                                </div>
                                <div>
                                    <h1><RiseOutlined /></h1>
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-around", color: "white", backgroundColor: "darkgreen", border: "2px solid darkgreen", borderRadius: "10px", margin: "15px", width: "250px", padding: "15px" }}>
                                <div>
                                    <h5>Total expenses</h5>
                                    <h3>$12</h3>
                                    <p>update hour ago</p>
                                </div>
                                <div>
                                    <h1><BarChartOutlined /></h1>
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-around", color: "white", backgroundColor: "darkblue", border: "2px solid darkblue", borderRadius: "10px", margin: "15px", width: "250px", padding: "15px" }}>
                                <div>
                                    <h5>Total visitors</h5>
                                    <h3>3</h3>
                                    <p>update hour ago</p>
                                </div>
                                <div>
                                    <h1><AppstoreAddOutlined /></h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-6'>
                                <h3>Observations</h3>
                                <div style={{ border: "1px solid", borderRadius: "8px", width: "700px", padding: "10px", height: "90px", margin: "10px", display: "flex", justifyContent: "space-around" }}>
                                    <div>
                                        <Space wrap>
                                            <Progress type="circle" percent={80} size={50} />
                                        </Space>
                                    </div>
                                    <div>
                                        <h6>Taylor Swift</h6>
                                        <p>24 April,2023 | 04:00 PM</p><br />
                                    </div>
                                    <div>
                                        <Rate disabled defaultValue={2} />
                                    </div>
                                    <div>
                                        <button class="button-2">2 days Left</button>
                                    </div>
                                </div>
                                <div style={{ border: "1px solid", borderRadius: "8px", width: "700px", padding: "10px", height: "90px", margin: "10px", display: "flex", justifyContent: "space-around" }}>
                                    <div>
                                        <Space wrap>
                                            <Progress type="circle" percent={85} size={50} />
                                        </Space>
                                    </div>
                                    <div>
                                        <h6>Well Smith</h6>
                                        <p>24 April,2023 | 04:00 PM</p><br />
                                    </div>
                                    <div>
                                        <Rate disabled defaultValue={2} />
                                    </div>
                                    <div>
                                        <button class="button-2">5 days Left</button>
                                    </div>
                                </div>
                                <div style={{ border: "1px solid", borderRadius: "8px", width: "700px", padding: "10px", height: "90px", margin: "10px", display: "flex", justifyContent: "space-around" }}>
                                    <div>
                                        <Space wrap>
                                            <Progress type="circle" percent={68} size={50} style={{ color: "red" }} />
                                        </Space>
                                    </div>
                                    <div>
                                        <h6>Johnson</h6>
                                        <p>24 April,2023 | 04:00 PM</p><br />
                                    </div>
                                    <div>
                                        <Rate disabled defaultValue={4.5} />
                                    </div>
                                    <div>
                                        <button class="button-2">2 days Left</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6">
                                <div style={{ display: "flex", justifyContent: "space-around" }}>
                                    <div>
                                        <h2><ShoppingCartOutlined /></h2>
                                    </div>
                                    <div>
                                        <Progress percent={50} size={[500, 15]} />
                                    </div>
                                </div>
                                <div style={{ paddingLeft: 200 }}>
                                    <h5>Shopping</h5>
                                </div>

                                <div style={{ display: "flex", justifyContent: "space-around" }}>
                                    <div>
                                        <h1><CarFilled /></h1>
                                    </div>
                                    <div>
                                        <Progress percent={21} size={[500, 15]} />
                                    </div>
                                </div>
                                <div style={{ paddingLeft: 200 }}>
                                    <h5>Electronics</h5>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-around" }}>
                                    <div>
                                        <h1><BulbFilled /></h1>
                                    </div>
                                    <div>
                                        <Progress percent={74} size={[500, 15]} />
                                    </div>
                                </div>
                                <div style={{ paddingLeft: 200 }}>
                                    <h5>Travels</h5>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-around" }}>
                                    <div>
                                        <h1><BulbFilled /></h1>
                                    </div>
                                    <div>
                                        <Progress percent={74} size={[500, 15]} />
                                    </div>
                                </div><br />
                                <div style={{ paddingLeft: 200 }}>
                                    <h5>Travels</h5>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-around" }}>
                                    <div>
                                        <h1><BulbFilled /></h1>
                                    </div>
                                    <div>
                                        <Progress percent={74} size={[500, 15]} />
                                    </div>
                                </div><br />
                                <div style={{ paddingLeft: 200 }}>
                                    <h5>Travels</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
                <h3 style={{ paddingLeft: 100 }}>Stock Graph</h3>
                <Footer style={{ textAlign: 'center' }} >

                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzqS9fF2adapfO94zEfcEY5L8MyuP57SzgYK45maiZyAIBLmxCFajMtVbnVb09HiKN5y8&usqp=CAU" height="250px" width="750px" alt="not found" style={{
                                border: "1px solid ", borderRadius: "8px"
                            }} />
                        </div>
                        <div>
                            <ul style={{ listStyleType: "none" }}>
                                <li><img src="https://pixlok.com/wp-content/uploads/2021/04/Google-Icon-PNG.jpg" height="60px" width="60px" alt='hy' />Google</li>
                                <li><img src="https://cdn-icons-png.flaticon.com/512/4926/4926581.png" height="60px" width="60px" alt='hy' />Foursqure</li>
                                <li><img src="https://cdn-icons-png.flaticon.com/512/1051/1051281.png" height="60px" width="60px" alt='hy' />Kickstarter</li>
                                <li><img src="https://static.vecteezy.com/system/resources/previews/000/638/514/original/vector-talking-bubble-chat-icon.jpg" height="60px" width="60px" alt='hy' />Talk</li>
                            </ul>
                        </div>
                    </div>
                </Footer>
            </Layout>
        </Layout>
    );
};
export default Dashboard;