import Register from './'
import InputField from '../InputField'
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow, configure } from 'enzyme'

configure({ adapter: new Adapter() })

describe("Register", () => {

    let wrapper
    const mockFunc = jest.fn()

    beforeEach(() => {
        wrapper = mount(<Register />)
    })

    afterEach(() => {
        wrapper = null;
    })

    it("has the required inputs", () => {
        const input = wrapper.find('input');

        const firstnameInput = wrapper.find('input[name="firstname"]');
        const lastnameInput = wrapper.find('input[name="lastname"]');
        const pwInput = wrapper.find('input[name="password"]');
        const rePwInput = wrapper.find('input[name="repassword"]');
        const emailInput = wrapper.find('input[name="email"]');

        expect(firstnameInput.prop("name")).toBe("firstname");
        expect(firstnameInput.prop("type")).toBe("text");

        expect(lastnameInput.prop("name")).toBe("lastname");
        expect(lastnameInput.prop("type")).toBe("text");

        expect(pwInput.prop("name")).toBe("password");
        expect(pwInput.prop("type")).toBe("password");

        expect(rePwInput.prop("name")).toBe("repassword");
        expect(rePwInput.prop("type")).toBe("password");

        expect(emailInput.prop("name")).toBe("email");
        expect(emailInput.prop("type")).toBe("email");
    });
});