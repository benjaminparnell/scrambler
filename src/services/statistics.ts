import { injectable } from '../container';

@injectable()
class StatisticsService {
  public getStatistics(results: number[]) {
    return {
      average: this.average(results),
      averageLastFive: this.averageLastFive(results),
      best: this.best(results)
    };
  }

  public average(results: number[]) {
    return (
      results.reduce((total, n) => total + n, 0) / results.length
    ).toFixed(3);
  }

  public averageLastFive(results: number[]) {
    return this.average(results.slice(-5));
  }

  public best(results: number[]) {
    return results.sort()[0];
  }
}

export default StatisticsService;
