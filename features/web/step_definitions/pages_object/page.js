class Page {
    constructor() {
        
        this.buttonPage = 'a[href="#/pages/"]';
        this.buttonNewPage = '.ember-view.gh-btn.gh-btn-green';
        this.btnTitlePage = '.gh-editor-title.ember-text-area.gh-input.ember-view';
        this.contentPage = '.koenig-editor__editor.__mobiledoc-editor.__has-no-content';
        this.clickExitPage = '.blue.link.fw4.flex.items-center.ember-view'
        this.msgError = ".main-error";
    }

}
module.exports = {
    Page,
};