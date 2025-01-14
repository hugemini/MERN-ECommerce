
import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useDispatch} from "react-redux"
import {logout} from "../redux/userRedux"

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
    
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "10px 0px" })};

`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    
`
const Language = styled.span`
    font-size: 14;
    cursor: pointer;
    ${mobile({ display: "none" })}
`

const SearchContainer = styled.div`
     border: 0.5px solid lightgray;
     display:flex;
     align-items: center;
     margin-left: 25px;
     padding: 5px;
`

const Input = styled.input`
    border:none;
    ${mobile({ width: "50px" })}
`

const Center = styled.div`
    flex: 1;
    text-align: center;
    ${mobile({ textAlign: "right" })}
`

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "20px" })}
    cursor: pointer;
`


const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end; 
    ${mobile({ flex: 2, justifyContent: "center" })}
    
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`





const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity);
    const user = useSelector(state => state.user.currentUser);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch({type:"logout"});
        
        
    }

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{ color: "black", fontsize: 16 }} />
                    </SearchContainer>
                </Left>

                <Center><Logo>NHÀ HEO</Logo></Center>
                <Right>
                    {user ?
                        <span>Hello {user.username} </span> :
                        <Link to="/register">
                            <MenuItem>REGISTER</MenuItem>
                        </Link>}

                    {user ?
                        
                        
                        <Link to="/signout" >
                            <MenuItem onClick={handleClick}>SIGN OUT</MenuItem>
                            
                        </Link>
                        
                         :
                        <Link to="/login">
                            <MenuItem>SIGN IN</MenuItem>
                        </Link>}

                    <Link to="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} color="secondary">
                                <ShoppingCartOutlined></ShoppingCartOutlined>
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>

            </Wrapper>
        </Container>
    )
}

export default Navbar
