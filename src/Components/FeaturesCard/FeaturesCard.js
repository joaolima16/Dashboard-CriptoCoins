import { FeatureCard, Title, Top, Bottom, FeaturedChart, Value, SubTitle, Summary, Item, ItemTitle, ResultValue } from "./stylesFeaturesCard"
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"
import { Col, Row } from "reactstrap";

export default function Card(props, { larguraTela }) {
    const dado = 20;
    const values = props.dados
    return (
        <FeatureCard>
            {console.log(values)}

            <Row xs={2} lg={1}>
                <Col xs={12}>
                    <Top>
                        <Title>Total</Title>
                    </Top>
                </Col>
                <Col>
                    <Bottom>
                        <FeaturedChart>
                            <CircularProgressbar  text={`${values?.[0].atl}%`} strokeWidth={3} />
                        </FeaturedChart>
                        <SubTitle>
                            Last Update
                        </SubTitle>
                        <Value>
                            {values?.[0]?.last_updated}
                        </Value>
                    </Bottom>
                </Col>
                <Col>
                    <Summary>
                        <Row xs={1} lg={3} className={larguraTela < 768 ? "gap-3" : ''}>
                            <Col>
                                <Item className={dado < 20 ? "negative" : "positive"}>
                                    <ItemTitle>High Price 24H</ItemTitle>
                                    <ResultValue>R$ {values?.[0]?.high_24h}</ResultValue>
                                </Item>
                            </Col>
                            <Col>
                                <Item className={dado > 20 ? "positive" : "negative"}>
                                    <ItemTitle>Low Price 24H</ItemTitle>
                                    <ResultValue>R$ {values?.[0]?.low_24h}</ResultValue>
                                </Item>
                            </Col>
                            <Col>
                                <Item>
                                    <ItemTitle>Current Price</ItemTitle>
                                    <ResultValue>R$ {values?.[0]?.current_price}</ResultValue>
                                </Item>
                            </Col>
                        </Row>
                    </Summary>
                </Col>
            </Row>
        </FeatureCard>
    )
}