import { Container, injectable, inject } from 'inversify';
import getDecorators from 'inversify-inject-decorators';
import ScrambleService from './services/scramble';
import StatisticsService from './services/statistics';

const container = new Container();

container.bind<ScrambleService>('ScrambleService').to(ScrambleService);
container.bind<StatisticsService>('StatisticsService').to(StatisticsService);

const { lazyInject } = getDecorators(container);

export { container, inject, injectable, lazyInject, ScrambleService };
