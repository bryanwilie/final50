import React, ( Component ) from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import AtoZListView from 'react-native-atoz-listview';
import Search from 'react-native-search-box';

const rowHeight = 40;

class SearchPage extends Component {

  state = {
    data: {
      "A": [
        {
          "name" : "Anh Tuan Nguyen",
          "age": 28
        },
        {
          "name": "An Nhien",
          "age": 2
        },
      ],
      "Z": [
        {
          "name": "Thanh Tu Pham",
          "age": 32
        },
        {
          "name": "Tien Thanh",
          "age": 24
        },
      ]
    }
  }

  renderRow = {item, sectionId, index} => {
    return(
      <TouchableHighLight
        style={{
          height: rowHeight,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>{item.name}</Text>
      </TouchableHighLight>
    );
  }

  // Important: You must return a Promise
  beforeFocus = () => {
    return new Promise((resolve, reject) => {
      console.log('beforeFocus');
      resolve();
    });
  }

  // Important: You must return a Promise
  onFocus = (text) => {
    return new Promise((resolve, reject) => {
      console.log('onFocus', text);
      resolve();
    });
  }

  // Important: You must return a Promise
  afterFocus = () => {
    return new Promise((resolve, reject) => {
      console.log('afterFocus');
      resolve;
    });
  }

  render() {
    // inside your render function
    return (
      <View style={{ flex: 1}}>
        <Search
          ref="search_box"
          /**
          * There are many customizable props!
          * See Docs!
          **/
        />

        <AtoZListView
          data={this.state.data}
          renderRow={this.renderRow}
          rowHeight={rowHeight}
          sectionHeaderHeight={40}
        />
      </View>
    );
  }
}
