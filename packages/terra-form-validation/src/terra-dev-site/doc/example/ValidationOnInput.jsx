/* eslint-disable class-methods-use-this */

import React from 'react';
import { Form, Field } from 'react-final-form';
import InputField from 'terra-form-input/lib/InputField';
import Button from 'terra-button';
import Spacer from 'terra-spacer';

const normalizeNumbers = (value) => {
  if (!value) return value;
  const numericValue = isNaN(value);
  if (!numericValue && Number(value) > 3 && Number(value) < 8) {
    return value.replace(/[^\d]/g, '');
  }

  return;
};

const required = value => (value ? undefined : 'Required');

export default class MainEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(values) {
    console.log("Submit Clicked!");
    this.setState({
      submittedValues: values,
    });
  }

  renderForm({ handleSubmit }) {
    return (
      <form
        onSubmit={handleSubmit}
      >
        <Field
          name="quantity"
          validate={required}
          parse={normalizeNumbers}
        >
          {({ input, meta }) => (
            <InputField
              inputId="quantity"
              label="Quantity"
              error={meta.error}
              isInvalid={!meta.valid}
              inputAttrs={{
                placeholder: 'Quantity',
                ...input,
              }}
              onChange={(e) => {
                input.onChange(e.target.value);
              }}
              value={input.value}
              required
            />
          )}
        </Field>
        <Button text="Submit" type={Button.Opts.Types.SUBMIT} />
      </form>
    );
  }

  render() {
    return (
      <Spacer marginBottom="small">
        <Form
          onSubmit={this.submitForm}
          render={this.renderForm}
        />
        {this.state.submittedValues
          && (
            <div>
              <p>Form Submitted Successfully With</p>
              <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>
            </div>
          )
        }
      </Spacer>
    );
  }
}
