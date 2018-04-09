# ember-cli-bootstrap-4-components

This addon provides bootstrap components for use in your ember applications.

## Installation

* ember install ember-cli-bootstrap-4-components

### Usage
Insert components in your templates where necessary.
### Available components
* Modal
    ```handlebars
    {{#bs-modal}}
        <div class="modal-header>
        </div>
        <div class="modal-body">
        </div>
        <div class="modal-footer">
        </div>
    {{/bs-modal}}
    ```
    Modals can be made to open by default by setting the property `autoload` to true.
    **Note: Bootstrap does not allow multiple modals by default, so care has to be taken while using the autoload property.**

## Documentation
Check out documentation and usage examples at https://archferns.github.io/ember-cli-bootstrap-4-components

## To do
* Add more components
