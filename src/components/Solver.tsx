import * as React from 'react';
import * as autobind from 'auto-bind';

import Timer from './Timer';
import Results from './Results';

type State = {
  results: number[];
};

class Solver extends React.Component<any, State> {
  state: State = {
    results: []
  };

  constructor(props: any) {
    super(props);
    autobind.react(this);
  }

  onTimerReset(result: number) {
    this.setState({
      results: this.state.results.concat([result])
    });
  }

  render() {
    return (
      <div>
        <Timer onReset={this.onTimerReset} />
        <Results results={this.state.results} />
      </div>
    );
  }
}

export default Solver;
