import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Text = styled.textarea`
  width: 100%;
  max-width: 100%;
  min-height: 0px;
  padding: 10px;
  margin: 10px 0 0;
  color: ${props => props.theme.appPrimaryColor};
  border: ${props => !props.slim ? `1px solid ${props.theme.appPrimaryColor}` : 'none'};
  border-radius: 3px;
  background: transparent;
  resize: none;

  transition: min-height 0.2s linear;

  ${props => props.active && css`
    min-height: 150px;
  `}

  &:focus {
    outline: none;
  }
`;

class Textarea extends Component {
  componentDidMount() {
    if (this.props.getFocus) {
      this.textarea.focus();
    }

    this.updateHeight();
  }

  shouldComponentUpdate(next) {
    return next.value !== this.props.value;
  }

  componentDidUpdate() {
    if (this.props.active && this.props.value !== '') {
      this.updateHeight();
    } else if (!this.props.active) {
      this.textarea.style.height = null;
    }
  }

  updateHeight() {
    const desiredHeight = this.textarea.scrollHeight + 50;
    const actualHeight = this.textarea.offsetHeight + 50;

    if (actualHeight !== desiredHeight) {
      this.textarea.style.height = `${desiredHeight}px`;
    }
  }

  render() {
    const { onChange, active, value, onBlur, onFocus, slim } = this.props;
    return (
      <Text
        onChange={(e) => onChange(e.target.value)}
        active={active}
        value={value}
        onBlur={onBlur}
        onFocus={onFocus}
        innerRef={node => { this.textarea = node; }}
        slim={slim}
      />
    );
  }
}

export default Textarea;
