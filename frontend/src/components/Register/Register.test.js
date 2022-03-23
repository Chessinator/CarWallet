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
            const firstnameInput = wrapper.find('input[name="firstname"]');
            expect(firstnameInput.prop("name")).toBe("firstname");
            expect(firstnameInput.prop("type")).toBe("text");
        });

        it("has lastname", () => {
            const lastnameInput = wrapper.find('input[name="lastname"]');
            expect(lastnameInput.prop("name")).toBe("lastname");
            expect(lastnameInput.prop("type")).toBe("text");
        });

        it("has password", () => {
            const pwInput = wrapper.find('input[name="password"]');
            expect(pwInput.prop("name")).toBe("password");
            expect(pwInput.prop("type")).toBe("password");
        });

        it("has password re-check", () => {
            const rePwInput = wrapper.find('input[name="repassword"]');
            expect(rePwInput.prop("name")).toBe("repassword");
            expect(rePwInput.prop("type")).toBe("password");
        });

        it("has email", () => {
            const emailInput = wrapper.find('input[name="email"]');
            expect(emailInput.prop("name")).toBe("email");
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
                expect(wrapper.find(".input-error-email").length).toBe(1);
            });

            it("has an error when invalid", () => {
                const submitButton = wrapper.find('button[type="submit"]');
                const emailInput = wrapper.find('input[name="email"]');
                emailInput.simulate('change', { target: { name: "email", value: "invalidMail" }});
                expect(wrapper.find(".input-error-email").length).toBe(1);
            });
    
            it("has no error when valid", () => {
                const submitButton = wrapper.find('button[type="submit"]');
                const emailInput = wrapper.find('input[name="email"]');
                emailInput.simulate('change', { target: { name: "email", value: "email@domain.test" }});
                expect(wrapper.find(".input-error-email").length).toBe(0);
            });
        });

        describe("password", () => {
            it("has an error when empty", () => {
                const submitButton = wrapper.find('button[type="submit"]');
                submitButton.simulate('click');
                expect(wrapper.find(".input-error-password").length).toBe(1);
            });

            it("has an error when too short", () => {
                const submitButton = wrapper.find('button[type="submit"]');
                const passwordInput = wrapper.find('input[name="password"]');
                passwordInput.simulate('change', { target: { name: "password", value: "pw" }});
                expect(wrapper.find(".input-error-password").length).toBe(1);
            });

            it("has an error when too weak", () => {
                const submitButton = wrapper.find('button[type="submit"]');
                const passwordInput = wrapper.find('input[name="password"]');
                passwordInput.simulate('change', { target: { name: "password", value: "pwpwpwpw" }});
                expect(wrapper.find(".input-error-password").length).toBe(1);
            });
        });

        describe("firstname", () => {
            it("has an error when empty", () => {
                const submitButton = wrapper.find('button[type="submit"]');
                submitButton.simulate('click');
                expect(wrapper.find(".input-error-firstname").length).toBe(1);
            });
        });

        describe("firstname", () => {
            it("has an error when empty", () => {
                const submitButton = wrapper.find('button[type="submit"]');
                submitButton.simulate('click');
                expect(wrapper.find(".input-error-lastname").length).toBe(1);
            });
        });
    });
});