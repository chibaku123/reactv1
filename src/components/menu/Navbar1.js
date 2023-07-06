import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import Layout from "../../Layout";
import AcmeLogo from "../../AcmeLogo";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

// import { Alert } from "@mui/material";

const Navbar1 = () => {
  const [user, setUser] = useState(null);
  const history = useNavigate();
  const collapseItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  useEffect(() => {
    // Kiểm tra liệu dữ liệu người dùng có tồn tại trong local storage hay không
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
    }
  }, []);
  const profile = localStorage.getItem('profile')
  const isAdmin = localStorage.getItem('isAdmin');


  const logOut = () => {
    
    localStorage.removeItem("user");
    localStorage.removeItem("profile");
     setUser(null);
     history('/');
    localStorage.removeItem('isAdmin') 


  };

  return (
    <Layout>
      <Navbar
        className="header"
        style={{ position: "fixed" }}
        shouldHideOnScroll
        isBordered
        variant="sticky"
      >
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="warning"
          hideIn="xs"
          variant="highlight"
        >
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/About">About</Navbar.Link>
          <Navbar.Link href="/Contact">Contact</Navbar.Link>
          <Navbar.Link href="/Nike">Nike</Navbar.Link>
          <Navbar.Link href="/Adidas">Adidas</Navbar.Link>
          <Navbar.Link href="/Unisex">Unisex</Navbar.Link>
          <Navbar.Link href="/Accessory">Accessory</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <Navbar.Link>
            <Link href="/Cart">
              <Avatar src="https://banner2.cleanpng.com/20180703/vtz/kisspng-shopping-cart-software-computer-icons-mayline-5b3b72a89c95a3.3174593115306226326414.jpg" />
            </Link>
          </Navbar.Link>
          <Dropdown placement="bottom-right">
            {user ? (
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="warning"
                  size="md"
                  // src={profile.img}
                  
                />
              </Dropdown.Trigger>
            ) : (
              <Navbar.Link>
                <Link href="/Login" >
                  <Avatar
                    bordered
                    as="button"
                    color="warning"
                    size="md"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"
                  />
                </Link>
              </Navbar.Link>
            )}
            
            <Dropdown.Menu
              
              
            >
              {isAdmin && (
                <Dropdown.Item>
                  <Link href="/Admin">Admin</Link>
                </Dropdown.Item>
              )}
              {!isAdmin && (
                <Dropdown.Item>
                  <Link href="/User">User</Link>
                </Dropdown.Item>
              )}
              <Dropdown.Item  >
                <Link  onClick={logOut}>Đăng xuất</Link>
              </Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
        {/* hien thi menu mobi */}
        <Navbar.Collapse disableAnimation>
          
            <Navbar.CollapseItem
              
              activeColor="warning"
              
              
            >
              <Link href="Home" >Home</Link>
              
            </Navbar.CollapseItem>
            <Navbar.CollapseItem
              
              activeColor="warning"
              
              
            >
              <Link href="About" >About</Link>
              
            </Navbar.CollapseItem>
            <Navbar.CollapseItem
              
              activeColor="warning"
              
              
            >
              <Link href="Contact" >Contact</Link>
              
            </Navbar.CollapseItem>
            <Navbar.CollapseItem
              
              activeColor="warning"
              
              
            >
              <Link href="Nike" >Nike</Link>
              
            </Navbar.CollapseItem>
            <Navbar.CollapseItem
              
              activeColor="warning"
              
              
            >
              <Link href="Adidas" >Adidas</Link>
              
            </Navbar.CollapseItem>
            <Navbar.CollapseItem
              
              activeColor="warning"
              
              
            >
              <Link href="Unisex" >Unisex</Link>
              
            </Navbar.CollapseItem>
            <Navbar.CollapseItem
              
              activeColor="warning"
              
              
            >
              <Link href="Accessory" >Accessory</Link>
              
            </Navbar.CollapseItem>
          
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
};

export default Navbar1;
