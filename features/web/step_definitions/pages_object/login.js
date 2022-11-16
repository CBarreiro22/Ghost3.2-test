class Login {
    constructor(msg) {
        this.msg = msg;
        
        this.txtEmail = '.email.ember-text-field.gh-input.ember-view';
        this.txtPassword = '.password.ember-text-field.gh-input.ember-view';
        this.btnLogin = '.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view';
        this.msgError = ".main-error";
    }

}
module.exports = {
    Login,
};