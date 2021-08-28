import { HomeContainer, HomeImg, HomeText, MainTitle } from "../App/App.styled";
import phoneContactImg from "../images/phone-call.jpeg"

export default function HomePage() {
    return (
        <HomeContainer>
            <MainTitle>Phone book</MainTitle>
            <HomeText>the best place to store your contacts list</HomeText>
            <HomeImg src={phoneContactImg}/>
        </HomeContainer>
    )
}