import React, { Component } from 'react';


class MusicTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="container" style="text-align: left">
        <table class="table table-striped">
          <thead title="Music Library"></thead>
          <tbody>
            <tr></tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MusicTable;
