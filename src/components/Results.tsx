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

        <ResultsTable results={this.props.results} />
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

const ResultsTable = ({ results }: { results: number[] }) => (
  <table className="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
      {results.reverse().map((result, index) => (
        <tr key={results.length - index}>
          <th>{results.length - index}</th>
          <td>{result}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Results;
