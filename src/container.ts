import { Container, injectable, inject } from 'inversify';
import getDecorators from 'inversify-inject-decorators';
import ScrambleService from './services/scramble';

const container = new Container();

container.bind<ScrambleService>('ScrambleService').to(ScrambleService);

const { lazyInject } = getDecorators(container);

export { container, inject, injectable, lazyInject, ScrambleService };
