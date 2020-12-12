import React from 'react';
import ReactDOM from 'react-dom';
import { Appointment, AppointmentsDaysView } from '../src/Appointment';
const { it, expect, beforeEach } = require('@jest/globals');

describe('Appointment', () => {
  let container;
  let customer;

  beforeEach(() => {
    container = document.createElement('div');
  });

  const render = (component) => ReactDOM.render(component, container);

  it('renders the customer first name', () => {
    customer = { firstName: 'Ashley' };
    render(<Appointment customer={customer}></Appointment>);
    expect(container.textContent).toMatch('Ashley');
  });

  it('renders another customer first name', () => {
    customer = { firstName: 'Jordan' };
    render(<Appointment customer={customer}></Appointment>);
    expect(container.textContent).toMatch('Jordan');
  });
});

describe('AppointmentsDaysView', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
  });

  const render = (component) => ReactDOM.render(component, container);

  it('renders a div with the right id', () => {
    render(<AppointmentsDaysView appointments={[]}></AppointmentsDaysView>);
    expect(container.querySelector('div#appointmentsDayView')).not.toBeNull();
  });
});
