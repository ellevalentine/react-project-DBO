
  import React from "react";
  import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
  "mdbreact";
  import OverAllChartsPage from "../components/TransPieChart"
  import OverAllBarChart from "../components/OverAllBarChart"

  
  const CarouselPage = (props) => {
    return (
      <MDBContainer>
        <MDBCarousel
        activeItem={1}
        length={3}
        // showControls={true}
        // showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
                <OverAllBarChart TotalSpending={props.TotalSpending} OtherAmounts={props.OtherAmounts} TechAmounts={props.TechAmounts} RetailAmounts={props.RetailAmounts} HolidayAmounts={props.HolidayAmounts} PhoneAmounts={props.PhoneAmounts} TravelAmounts={props.TravelAmounts} FoodAmounts={props.FoodAmounts} BillsAmounts={props.BillsAmounts} SubscriptionsAmounts={props.SubscriptionsAmounts}  />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive"></h3>
              <p></p>
            </MDBCarouselCaption>
          </MDBCarouselItem>


          <MDBCarouselItem itemId="2">
            <MDBView>
                <OverAllChartsPage TotalSpending={props.TotalSpending} OtherAmounts={props.OtherAmounts} TechAmounts={props.TechAmounts} RetailAmounts={props.RetailAmounts} HolidayAmounts={props.HolidayAmounts} PhoneAmounts={props.PhoneAmounts} TravelAmounts={props.TravelAmounts} FoodAmounts={props.FoodAmounts} BillsAmounts={props.BillsAmounts} SubscriptionsAmounts={props.SubscriptionsAmounts}  />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive"></h3>
              <p></p>
            </MDBCarouselCaption>
          </MDBCarouselItem>


            <MDBCarouselItem itemId="3">
            <MDBView>
                 <p>Savings</p>
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive"></h3>
              <p></p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

        </MDBCarouselInner>

        </MDBCarousel>

      </MDBContainer>
    );
  }
  
  export default CarouselPage;
  