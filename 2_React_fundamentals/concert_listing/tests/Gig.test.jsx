import { render, screen } from "@testing-library/react";
import Gig from "../src/components/Gig"
import userEvent from "@testing-library/user-event";
import wavingQuackie from "../assets/waving-quackie.png";

describe("Testing Gig Component", () =>{
    test("Renders with the correct details", () =>{
        render (<Gig 
        src = {wavingQuackie}
        alt = "black duck waving with the Makers M logo on its chest"
        band_name="The Quacks are Back"
        description="Come see a Ducking good show!"
        time_date="20 July 2025"
        location="Royal Albert Hall"
        />);
        expect(screen.getByTestId("image")).toHaveAttribute("src", "/assets/waving-quackie.png")
        expect(screen.getByTestId("image")).toHaveAttribute("alt", "black duck waving with the Makers M logo on its chest")
        expect(screen.getByTestId("band_name")).toHaveTextContent("The Quacks are Back");
        expect(screen.getByTestId("description")).toHaveTextContent("Come see a Ducking good show!");    
        expect(screen.getByTestId("time_date")).toHaveTextContent("20 July 2025");    
        expect(screen.getByTestId("location")).toHaveTextContent("Royal Albert Hall");    
    });
    test("Has button to click to Favourite", () => {
        render (<Gig 
            />);
        expect(screen.getByTestId("favourite")).toHaveTextContent("Favourite 🤍");
        });
        test("When you click button it changes state to favourited", async () => {
            render (<Gig 
                />);
            await userEvent.click(screen.getByTestId("favourite"));
            expect(screen.getByTestId("favourite")).toHaveTextContent("Favourite 🖤");
            });
        test("When you click a favourited button it changes state back to unfavourited", async () => {
            render (<Gig 
                />);
            await userEvent.click(screen.getByTestId("favourite"));
            await userEvent.click(screen.getByTestId("favourite"));
            expect(screen.getByTestId("favourite")).toHaveTextContent("Favourite 🤍");
            });      
    })
