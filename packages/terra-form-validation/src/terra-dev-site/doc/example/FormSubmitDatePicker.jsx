/* eslint-disable class-methods-use-this */

import React from 'react';
import { Form, Field } from 'react-final-form';
import DatePicker from 'terra-date-picker';
import TerraField from 'terra-form-field';
import Select from 'terra-form-select';
import Button from 'terra-button';
import Spacer from 'terra-spacer';
import Alert from 'terra-alert';

const required = value => (value ? undefined : 'Required');

const validateDate = (value) => {
  if (!value) {
    return 'Required';
  }

  if (value.search(/[0-9]{4}-[0-9]{2}-[0-9]{2}/i) >= 0) {
    return undefined;
  }

  if (value.search(/[0-1][0-9]\/([0-2][0-9]|3[0-1])\/[0-9]{4}/i) <= -1) {
    return 'Date is Invalid';
  }

  return undefined;
};

class MainForm extends React.Component {
  constructor(props) {
    super(props);

    console.log('Main Form Props');
    console.log(props);
    this.state = {
      healthPlans: [
        {
          objectIdentifier: '1135952527',
          name: 'Test 1'
        },
        {
          objectIdentifier: '1232342527',
          name: ' Test 2'
        },
        {
          objectIdentifier: '1932343223',
          name: ' Test 4'
        },
      ]
    };

    this.handleHealthPlanSearch = this.handleHealthPlanSearch.bind(this);
  }

  handleHealthPlanSearch(searchTxt) {
    console.log('Changing');
    const params = {
      name: searchTxt,
    };

    this.setState({
      healthPlans: [
        {
          objectIdentifier: '1231231423',
          name: 'Test 10'
        },
        {
          objectIdentifier: '1923432131',
          name: ' Test 12'
        },
        {
          objectIdentifier: '1234312342',
          name: ' Test 19'
        },
      ]
    });
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit}
      >
      {this.props.isClosing && this.props.dirty &&<Alert type="warning" title="Title">Title</Alert>}
      <Field
       name="healthPlans"
       type="select"
       validate={required}
       render={({ input, meta }) => (
         <TerraField
           label="Select health plan"
           isInvalid={meta.submitFailed && meta.error !== undefined}
           error={meta.error}
           required
         >
           <Select
             id="healthPlans"
             name={input.name}
             variant="search"
             value={input.value}
             onChange={(value) => {
               console.log('Changed');
               input.onChange(value);
             }}
             onSearch={this.handleHealthPlanSearch}
             placeholder="Select health plan"
           >
            {this.state.healthPlans && this.state.healthPlans.map(healthPlan => (
              <Select.Option value={healthPlan.objectIdentifier} display={healthPlan.name} key={`${healthPlan.objectIdentifier}`} />
            ))}
           </Select>
           <p>{JSON.stringify(meta, 0 ,2)}</p>
         </TerraField>
       )}
     />
        <Field
          name="user_date"
          validate={validateDate}
        >
          {({ input, meta }) => (
            <TerraField
              label="Enter your birthday"
              error={meta.error || meta.submitError}
              isInvalid={meta.submitFailed || (meta.error && meta.touched)}
              required
            >
              <DatePicker
                name="user_date"
                id="default"
                onChangeRaw={(event, date) => { console.log('raw change:' + date); input.onChange(date); }}
                onChange={(event, date) => { console.log('basic change:' + date); input.onChange(date); }}
                inputAttributes={{
                  ...input
                }}
              />
            </TerraField>
          )}
        </Field>
        <Button text="Submit" type={Button.Opts.Types.SUBMIT} />
      </form>
    );
  }
}

export default class MainEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submittedValues: {}
    };

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(values) {
    this.setState({
      submittedValues: values,
    });
  }

  render() {
    return (
      <Spacer marginBottom="small">
        <Form
          onSubmit={this.submitForm}
          component={MainForm}
          isClosing
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
