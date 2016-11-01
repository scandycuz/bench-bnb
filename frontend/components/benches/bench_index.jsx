import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestBenches();
  }

  render() {
    return (
      <div>
        <BenchIndexItem benches={ this.props.benches }/>
      </div>
    );
  }

};

export default BenchIndex;
