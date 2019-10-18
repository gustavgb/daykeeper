import React, { Component } from 'react';
import styled from 'styled-components';
import dateformat from 'dateformat';
import Datepicker from 'react-datepicker';
import moment from 'moment';

const Wrapper = styled.div`
  font-size: 12px;
  color: ${props => props.theme.appHoverColor};
  margin: 0 0 10px;
`;

class Timestamp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: moment(props.date),
    };
  }

  handleDateChange(value) {
    window.date = value;

    const date = value.toISOString();
    this.props.onEdit(date);

    this.setState({
      date: value,
    });
  }

  render() {
    const { date, editable } = this.props;
    return (
      <Wrapper>
        {!editable ? (
          dateformat(date, 'dddd, d. mmmm, yyyy, HH:MM')
        ) : (
          <Datepicker
            selected={this.state.date}
            onChange={this.handleDateChange.bind(this)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="LLL"
          />
        )}
      </Wrapper>
    );
  }
}

export default Timestamp;
