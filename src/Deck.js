import React, { Component } from 'react';
import { Animated, Text, View } from 'react-native';
import { Button, Card } from 'react-native-elements';

class Deck extends Component {
  renderCard(item) {
    return (
      <Card key={ item.id }
        title={ item.text }        
        image={ { uri: item.uri } }>
        <Text>
          TODO: Display description
        </Text>
        <Button 
          icon={ { name: 'details', color: 'white' } }          
          color="white"
          backgroundColor="#03A9F4"
          title="View Now !">
        </Button>
      </Card>
    );
  }

  render() {
    const { data } = this.props;
    let cards = [];
    if (Array.isArray(data) && data.length > 0) {
      cards = data.map(item => this.renderCard(item));
    }
    
    return (
      <View>
        { cards }
      </View>
    );
  }
}

export default Deck;
