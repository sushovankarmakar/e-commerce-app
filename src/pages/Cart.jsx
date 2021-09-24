import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;

  ${mobile({
    padding: "10px",
  })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({
    display: "none",
  })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({
    flexDirection: "column",
  })}
`;

const Info = styled.div`
  flex: 3;
  margin: 0px 10px;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({
    flexDirection: "column",
  })}
`;

const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;

  ${mobile({
    width: "150px",
  })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductInfo = styled.span`
  display: flex;
`;

const ProductColor = styled.div`
  margin-left: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${mobile({
    flexDirection: "row",
    justifyContent: "space-between",
  })}
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  ${mobile({
    margin: "0px 15px",
  })}
`;

const Amount = styled.div`
  font-size: 24px;
  margin: 5px;

  ${mobile({
    margin: "0px 15px",
  })}
`;

const AmountButton = styled.div`
  cursor: pointer;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;

  ${mobile({
    marginBottom: "5px",
  })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 3px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgrey;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  border-radius: 20px;
  cursor: pointer;
`;

const Cart = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductInfo>
                    <b>Product :</b> &nbsp; JESSIE THUNDER SHOES
                  </ProductInfo>
                  <ProductInfo>
                    <b>ID :</b> &nbsp; 982345671012
                  </ProductInfo>
                  <ProductInfo>
                    <b>Color :</b> <ProductColor color="black" />
                  </ProductInfo>
                  <ProductInfo>
                    <b>Size :</b> &nbsp; 38
                  </ProductInfo>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <AmountButton>
                    <Remove />
                  </AmountButton>
                  <Amount>1</Amount>
                  <AmountButton>
                    <Add />
                  </AmountButton>
                </ProductAmountContainer>
                <ProductPrice>₹ 100</ProductPrice>
              </PriceDetails>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <Details>
                  <ProductInfo>
                    <b>Product :</b> &nbsp; HAKURA T-SHIRT
                  </ProductInfo>
                  <ProductInfo>
                    <b>ID :</b> &nbsp; 9381371829314
                  </ProductInfo>
                  <ProductInfo>
                    <b>Color :</b> <ProductColor color="gray" />
                  </ProductInfo>
                  <ProductInfo>
                    <b>Size :</b> &nbsp; M
                  </ProductInfo>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <AmountButton>
                    <Remove />
                  </AmountButton>
                  <Amount>2</Amount>
                  <AmountButton>
                    <Add />
                  </AmountButton>
                </ProductAmountContainer>
                <ProductPrice>₹ 120</ProductPrice>
              </PriceDetails>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>₹ 500</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>₹ 100</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>₹ - 50</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>₹ 550</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
