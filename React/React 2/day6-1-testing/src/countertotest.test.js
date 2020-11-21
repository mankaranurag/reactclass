import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Counter from "./countertotest";

Enzyme.configure({ adapter: new Adapter() });

describe("counter Test Suite", () => {
  it("should start with count 0", () => {
    // create a Counter instance
    // check if count = 0

    // shallow goes back and instantiate only this component
    // this will not instantiate child components
    // internaly uses enzyme renderer
    const wrapper = shallow(<Counter />);
    var initialCount = wrapper.state().count;
    expect(initialCount).toBe(0);
  });

  it("increments count on click of button", () => {
    const wrapper = shallow(<Counter />); // wrapper has the final html
    var button = wrapper.find("button#incre");
    button.simulate("click");
    var pText = wrapper.find("p").text();
    expect(pText).toEqual("Count : 1");
  });
});
