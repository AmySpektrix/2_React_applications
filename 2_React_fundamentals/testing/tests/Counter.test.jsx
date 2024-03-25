import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../src/components/Counter";

describe("Test Counter function", ()=>{
    test("When started renders with initial value of 0 ", () => {
        render(<Counter />);
        expect(screen.getByTestId("counter")).toHaveTextContent("0");
        });
    test("When started then increment button clicked twice renders with a new value of 2 ", async () => {
    // Setup
        render(<Counter />)
    // Act - click the button twice - getByText will search for just something which contains increment
        await userEvent.click(screen.getByTestId("up1"));
        await userEvent.click(screen.getByTestId("up1"));
    //the userEvent actions are async because they have to happen then wait for them to re-render to update
    // Assert
        expect(screen.getByTestId("counter")).toHaveTextContent("2");
        });
    test("When started then de-increment button clicked twice renders with a new value of -2 ", async () => {
        render(<Counter />)
        await userEvent.click(screen.getByTestId("down1"));
        await userEvent.click(screen.getByTestId("down1"));
        expect(screen.getByTestId("counter")).toHaveTextContent("-2");        
    })
});