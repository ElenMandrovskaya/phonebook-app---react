import { HomeContainer, HomeImg, HomeText, MainTitle } from "../App/App.styled";
import phoneContactImg from "../images/network.png"
import ListAltIcon from '@material-ui/icons/ListAlt';

export default function HomePage() {
    return (
        <HomeContainer>
            <MainTitle>Phone book<ListAltIcon style={{ fontSize: 40, marginLeft: 10 }}/></MainTitle>
            <HomeText>the best place to store your contacts list</HomeText>
            <HomeImg src={phoneContactImg}/>
        </HomeContainer>
    )
}