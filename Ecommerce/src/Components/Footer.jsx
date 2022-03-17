import { Facebook, Instagram, Twitter, Room, Phone, MailOutline} from '@material-ui/icons'

import styled from 'styled-components'
import { mobile } from '../responsive'


const Container  = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column"})}
`
const Left  = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``

const Desc = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center  = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none"})}
`
const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right  = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "lightgray"})}
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`




const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>NHÀ HEO</Logo>
                <Desc>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F"> 
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>

                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links </Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>

                </List>
            </Center>
            <Right>

                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight: "10px"}}/>
                    Nhà của Heo, Quận 6, TpHCM
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight: "10px"}}/>
                    +0 123 456 789
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight: "10px"}}/> 
                    lehieudhqt@gmail.com
                </ContactItem>
                
            </Right>
        </Container>
    )
}

export default Footer
