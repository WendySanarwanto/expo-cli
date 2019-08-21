import React, { Component } from 'react';
import { Animated, PanResponder, Text, View } from 'react-native';
import { Button, Card } from 'react-native-elements';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.position = new Animated.ValueXY();
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true, // Tell the app that this panResponder will be responsible for handling user's gestures
      onPanResponderMove: (event, gesture) => {
        // Update Animateds Position with gestures delta x,y
        this.position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: () => {} 
    });        
  }

  renderCard(item) {
    return (
      <Card key={ item.id }
        title={ item.text }        
        image={ { uri: item.uri } }>
        <Text style={ { marginBottom: 10 } }>
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
      <Animated.View 
        style={ this.position.getLayout() }
        {...this.panResponder.panHandlers}>
        { cards }
      </Animated.View>
    );
  }
}

export default Deck;
