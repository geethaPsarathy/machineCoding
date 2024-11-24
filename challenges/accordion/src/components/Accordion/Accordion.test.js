// create a test for the Accordion component
// - import the Accordion component

import { render, screen } from "@testing-library/react";
import { act } from "react";
import Accordion from "./Accordion";

const data = [
    {
        title: "Title 1",
        content: "Content 1",
    },
    {
        title: "Title 2",
        content: "Content 2",
    },
    {
        title: "Title 3",
        content: "Content 3",
    },
];

test("renders an accordion", () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
        render(<Accordion data={data} />);
    });
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(data.length);
});



// integration test for the Accordion component
// - import the Accordion component
test("renders sections", () => {
    // - render the Accordion component
    render(<Accordion data={data} />);
    // - get the accordion by role
    const accordion = screen.getByRole("button", { name: /title 1/i });
    // - assert that the accordion is in the document
    expect(accordion).toBeInTheDocument();
});
// - render the Accordion component
// - get the accordion by role
// - assert that the accordion is in the document
// - run the test
// - the test should pass
//- to run the test, run the following command in the terminal:
// npm test src/components/Accordion/Accordion.test.js
// The test should pass
// The test should fail

