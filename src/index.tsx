import 'reflect-metadata';

import * as React from 'react';
import { render } from 'react-dom';
import * as autobind from 'auto-bind';
import { lazyInject, ScrambleService } from './container';

import Scrambler from './components/Scrambler';
import Solver from './components/Solver';

render(
  <section className="section">
    <div className="container">
      <h1 className="title">scrambler</h1>
      <Scrambler />
      <Solver />
    </div>
  </section>,
  document.getElementById('root')
);
