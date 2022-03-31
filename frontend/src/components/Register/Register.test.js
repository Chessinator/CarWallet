import Register from './'
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

    describe("Form elements", () => {
        it("has firstname", () => {
            const firstnameInput = wrapper.find('input[id="firstname"]');
            expect(firstnameInput.prop("id")).toBe("firstname");
            expect(firstnameInput.prop("type")).toBe("text");
        });

        it("has lastname", () => {
            const lastnameInput = wrapper.find('input[id="lastname"]');
            expect(lastnameInput.prop("id")).toBe("lastname");
            expect(lastnameInput.prop("type")).toBe("text");
        });

        it("has password", () => {
            const pwInput = wrapper.find('input[id="password"]');
            expect(pwInput.prop("id")).toBe("password");
            expect(pwInput.prop("type")).toBe("password");
        });

        it("has password re-check", () => {
            const rePwInput = wrapper.find('input[id="repassword"]');
            expect(rePwInput.prop("id")).toBe("repassword");
            expect(rePwInput.prop("type")).toBe("password");
        });

        it("has email", () => {
            const emailInput = wrapper.find('input[id="email"]');
            expect(emailInput.prop("id")).toBe("email");
            expect(emailInput.prop("type")).toBe("email");
        });

        it("has submit button", () => {
            const submitButton = wrapper.find('button[type="submit"]');
            expect(submitButton.prop("type")).toBe("submit");
        });
    });

    describe("Behaviour", () => {
        describe("email", () => {
            it("has an error when empty", () => {
                const submitButton = wrapper.find('button[type="submit"]');
                submitButton.simulate('click');
                expect(wrapper.find(".property-error-email").length).toBe(1);
            });

            it("has an error when invalid", () => {
                const submitButton = wrapper.find('button[type="submit"]');
                const emailInput = wrapper.find('input[id="email"]');
                emailInput.simulate('change', { target: { id: "email", value: "invalidMail" }});
                expect(wrapper.find(".property-error-email").length).toBe(1);
            });
    
            it("has no error when valid", () => {
                const submitButton = wrapper.find('button[type="submit"]');
                const emailInput = wrapper.find('input[id="email"]');
                emailInput.simulate('change', { target: { id: "email", value: "email@domain.test" }});
                expect(wrapper.find(".property-error-email").length).toBe(0);
            });
        });

        describe("password", () => {
            it("has an error when empty", () => {
                const submitButton = wrapper.find('button[type="submit"]');
                submitButton.simulate('click');
                expect(wrapper.find(".property-error-password").length).toBe(1);
            });

            it("has an error when too short", () => {
                const submitButton = wrapper.find('button[type="submit"]');
                const passwordInput = wrapper.find('input[id="password"]');
                passwordInput.simulate('change', { target: { id: "password", value: "pw" }});
                expect(wrapper.find(".property-error-password").length).toBe(1);
            });

            it("has an error when too weak", () => {
                const submitButton = wrapper.find('button[type="submit"]');
                const passwordInput = wrapper.find('input[id="password"]');
                passwordInput.simulate('change', { target: { id: "password", value: "pwpwpwpw" }});
                expect(wrapper.find(".property-error-password").length).toBe(1);
            });
        });

        describe("firstname", () => {
            it("has an error when empty", () => {
                const submitButton = wrapper.find('button[type="submit"]');
                submitButton.simulate('click');
                expect(wrapper.find(".property-error-firstname").length).toBe(1);
            });
        });

        describe("firstname", () => {
            it("has an error when empty", () => {
                const submitButton = wrapper.find('button[type="submit"]');
                submitButton.simulate('click');
                expect(wrapper.find(".property-error-lastname").length).toBe(1);
            });
        });
    });
});