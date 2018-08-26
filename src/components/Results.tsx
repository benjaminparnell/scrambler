import * as React from 'react';
import StatisticsService from '../services/statistics';
import { lazyInject } from '../container';

type Props = {
  results: number[];
};

class Results extends React.Component<Props, any> {
  @lazyInject('StatisticsService')
  private statisticsService!: StatisticsService;

  static defaultProps: Props = {
    results: []
  };

  render() {
    const { results } = this.props;
    const statistics = this.statisticsService.getStatistics(results);
    return (
      <div>
        <div className="level">
          <ResultStatistic title="Best" statistic={statistics.best} />
          <ResultStatistic title="Average" statistic={statistics.average} />
          <ResultStatistic
            title="Average (Last 5)"
            statistic={statistics.averageLastFive}
          />
        </div>

        <div className="columns">
          <div className="column">
            <h2 className="subtitle">All</h2>
            <ResultsTable results={results} reverse={true} />
          </div>
          <div className="column">
            <h2 className="subtitle">Top 5</h2>
            <ResultsTable results={results.sort().slice(0, 5)} />
          </div>
        </div>
      </div>
    );
  }
}

const ResultStatistic = ({
  title,
  statistic
}: {
  title: string;
  statistic: number | string;
}) => (
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">{title}</p>
      <p className="title">
        {statistic && statistic !== 'NaN' ? statistic : 'N/A'}
      </p>
    </div>
  </div>
);

const ResultsTable = ({
  results,
  reverse
}: {
  results: number[];
  reverse?: boolean;
}) => {
  if (reverse) {
    results = results.reverse();
  }
  return (
    <table className="table is-fullwidth is-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => {
          const key = reverse ? results.length - index : index + 1;
          return (
            <tr key={key}>
              <th>{key}</th>
              <td>{result}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;
