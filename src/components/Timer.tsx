import * as React from 'react';
import * as autobind from 'auto-bind';
import styled from 'styled-components';

const ONE_SECOND = 1000;

type State = {
  ticks: number;
  started: boolean;
};

type Props = {
  onReset: (ticks: number) => void;
};

const TimerTitle = styled.h1`
  font-size: 7em;
  text-align: center;
`;

class Timer extends React.Component<Props, State> {
  private interval!: number;

  static initialState: State = {
    ticks: 0,
    started: false
  };

  static TICK_SPEED: number = 5;

  state: State = Timer.initialState;

  constructor(props: Props) {
    super(props);
    autobind.react(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', ({ keyCode }) => {
      if (keyCode === 32) {
        this.onSpacePressed();
      }
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({ ticks: this.state.ticks + Timer.TICK_SPEED });
  }

  onSpacePressed() {
    if (!this.state.started) {
      this.interval = setInterval(this.tick, Timer.TICK_SPEED);
      this.setState({ started: true });
    } else {
      clearInterval(this.interval);
      this.props.onReset(this.state.ticks / ONE_SECOND);
      this.setState(Timer.initialState);
    }
  }

  render() {
    const ticks = this.state.ticks;
    return (
      <TimerTitle className="title">
        {Math.floor(ticks / ONE_SECOND)}.
        {(ticks % ONE_SECOND).toString().padStart(3, '0')}
      </TimerTitle>
    );
  }
}

export default Timer;
