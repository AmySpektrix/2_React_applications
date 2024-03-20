import { render, screen } from "@testing-library/react";
import Profile from "../src/components/Profile";
describe("Testing Profile component", () =>{
    test("renders with the correct title, job and birthdate ", () => {
    render(<Profile 
        name="Quackie Makers"
        job="Makers' favourite rubber duck"
        birthdate={2023}
    />);
    expect(screen.getByRole("heading")).toHaveTextContent("Quackie Makers");
    expect(screen.getByTestId("job")).toHaveTextContent("Makers' favourite rubber duck");
    expect(screen.getByTestId("birthdate")).toHaveTextContent(2023);
    })
})