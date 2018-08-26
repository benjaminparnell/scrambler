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
      <div className="field has-addons">
        <div className="control is-expanded">
          <p className="input">{this.state.scramble}</p>
        </div>
        <div className="control">
          <a className="button is-info" onClick={this.generateScramble}>
            Generate
          </a>
        </div>
      </div>
    );
  }
}

export default Scrambler;
