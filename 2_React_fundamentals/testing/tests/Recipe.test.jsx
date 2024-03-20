import { render, screen } from "@testing-library/react";
import Recipe from "../src/components/Recipe"

describe("Testing Recipe component", () =>{
    test("Renders with the correct details", () =>{
        render(<Recipe
            title="Finnish cinnamon buns" 
            type="dessert" 
            duration={60}
            />);
        expect(screen.getByTestId("title")).toHaveTextContent("Finnish cinnamon buns");
        expect(screen.getByTestId("type")).toHaveTextContent("dessert");
        expect(screen.getByTestId("duration")).toHaveTextContent(60);
    })
})