import * as React from 'react';

type Props = {
  results: number[];
};

class Results extends React.Component<Props, any> {
  static defaultProps: Props = {
    results: []
  };

  private average(results: number[]) {
    return (
      results.reduce((total, n) => total + n, 0) / results.length
    ).toFixed(3);
  }

  private averageLastFive() {
    return this.average(this.props.results.slice(-5));
  }

  private best() {
    return this.props.results.sort()[0];
  }

  render() {
    return (
      <div>
        <div className="level">
          <ResultStatistic title="Best" statistic={this.best()} />

          <ResultStatistic
            title="Average"
            statistic={this.average(this.props.results)}
          />
          <ResultStatistic
            title="Average (Last 5)"
            statistic={this.averageLastFive()}
          />
        </div>

        <div className="columns">
          <div className="column">
            <h2 className="subtitle">All</h2>
            <ResultsTable results={this.props.results} reverse={true} />
          </div>
          <div className="column">
            <h2 className="subtitle">Top 5</h2>
            <ResultsTable results={this.props.results.sort().slice(0, 5)} />
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
      <p className="title">{statistic}</p>
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
