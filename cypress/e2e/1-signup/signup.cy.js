describe("회원가입 화면", () => {
    it("사용자는 이메일과 비밀번호를 사용해서 회원가입한다", () => {
        // given - 회원가입 페이지에 접근한다
        cy.visit("/signup");

        cy.get('[data-cy=emailInput]').as('emailInput');
        cy.get('[data-cy=passwordInput]').as('passwordInput');
        cy.get('[data-cy=confirmPasswordInput]').as('confirmPasswordInput');
        cy.get('[data-cy=signupButton]').as('signupButton');

        cy.get('@signupButton').should('be.disabled');

        // when - 아이디와 비밀번호, 비밀번호 확인값을 입력한다.
        cy.get('@emailInput').type('test@email.com');
        cy.get('@passwordInput').type('password');
        cy.get('@confirmPasswordInput').type('password');

        cy.get('@emailInput').invoke('val').should('eq', 'test@email.com');
        cy.get('@passwordInput').invoke('val').should('eq', 'password');

        // 비밀번호와 비밀번호 확인값이 일치하는지 확인한다.
        cy.get('[data-cy=passwordInput]').invoke('val').then((value1) => {
            cy.get('[data-cy=confirmPasswordInput]').invoke('val').then((value2) => {
                expect(value1).to.equal(value2);
                cy.get('@signupButton').should('not.be.disabled');
            });
          });
          
       
        cy.intercept(
            {
                method: 'POST',
                url: '/user/signup'
            },
            {msg: "SUCCESS"}
        ).as('signup')

        cy.get('[data-cy=signupButton]').should('exist').click();
        // then - 회원가입에 성공하고 로그인화면으로 이동한다
        cy.url().should('include', '/login');
    })
})