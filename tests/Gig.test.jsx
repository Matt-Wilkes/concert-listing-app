import { render, screen } from "@testing-library/react";
import { test, expect } from 'vitest';
import Gig from "../src/components/Gig";

test('renders with the correct band name', () => {
    render( <Gig 
      bandName="Robot Rendezvous"
      bandImage={"robot_rendezvous2.webp"}
      description="French Electronic robot duo debut their new single"
      eventDateTime={new Date(2024, 7, 20, 20, 0).toLocaleString("en-GB", {timeZone: "Europe/London"})}
      location="London, UK"
      />);
    expect(screen.getByRole("heading", {level:3})).toHaveTextContent("Robot Rendezvous")
});
test('renders with an image', () => {
    render( <Gig 
      bandName="Robot Rendezvous"
      bandImage={"robot_rendezvous2.webp"}
      description="French Electronic robot duo debut their new single"
      eventDateTime={new Date(2024, 7, 20, 20, 0).toLocaleString("en-GB", {timeZone: "Europe/London"})}
      location="London, UK"
      />);
    expect(screen.getByAltText("artwork")).toBeInTheDocument();
});
test('renders with the correct description', () => {
    render( <Gig 
      bandName="Robot Rendezvous"
      bandImage={"robot_rendezvous2.webp"}
      description="French Electronic robot duo debut their new single"
      eventDateTime={new Date(2024, 7, 20, 20, 0).toLocaleString("en-GB", {timeZone: "Europe/London"})}
      location="London, UK"
      />);
    expect(screen.getByTestId("t-description")).toHaveTextContent("French Electronic robot duo debut their new single")
});
test('renders with the correct date/time', () => {
    render( <Gig 
      bandName="Robot Rendezvous"
      bandImage={"robot_rendezvous2.webp"}
      description="French Electronic robot duo debut their new single"
      eventDateTime={new Date(2024, 7, 20, 20, 0).toLocaleString("en-GB", {timeZone: "Europe/London"})}
      location="London, UK"
      />);
    expect(screen.getByTestId("t-eventDateTime")).toHaveTextContent("20/08/2024, 20:00:00")
});
test('renders with the correct date/time', () => {
    render( <Gig 
      bandName="Robot Rendezvous"
      bandImage={"robot_rendezvous2.webp"}
      description="French Electronic robot duo debut their new single"
      eventDateTime={new Date(2024, 7, 20, 20, 0).toLocaleString("en-GB", {timeZone: "Europe/London"})}
      location="London, UK"
      />);
    expect(screen.getByTestId("t-location")).toHaveTextContent("London, UK")
});