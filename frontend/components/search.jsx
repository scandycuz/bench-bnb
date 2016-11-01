import React from 'react';
import BenchMap from './benches/bench_map';
import BenchIndex from './benches/bench_index';

class Search extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <BenchMap benches={this.props.benches}/>
        <BenchIndex benches={this.props.benches} requestBenches={this.props.requestBenches}/>
      </div>
    );
  }

}

export default Search;
