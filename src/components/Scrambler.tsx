import * as React from 'react';
import { lazyInject } from '../container';
import * as autobind from 'auto-bind';
import ScrambleService from '../services/scramble';

type State = {
  scramble: string;
};

class Scrambler extends React.Component<any, State> {
  @lazyInject('ScrambleService')
  private scrambleService!: ScrambleService;

  constructor(props: any) {
    super(props);
    autobind.react(this);
    this.state = {
      scramble: this.scrambleService.generate()
    };
  }

  generateScramble() {
    this.setState({ scramble: this.scrambleService.generate() });
  }

  render() {
    return (
      <div>
        <h2 className="subtitle">{this.state.scramble}</h2>
        <button className="button" onClick={this.generateScramble}>
          generate
        </button>
      </div>
    );
  }
}

export default Scrambler;
