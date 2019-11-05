import React, { Component } from 'react'
import {
  View, Text, Image,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'
import { getDinosaurs } from '../actions'

class Details extends Component {
  componentDidMount() {
    this.props.getDinosaurs()
  }
  static navigationOptions = {
    title: 'DINOSAURS APP',
  };
  constructor(props) {
    super(props);
    this.state = {
      currentImageUrl: '',
      currentDinosaurName: '',
      currentDinosaurIndex: 0,
      allDinosaurs: []
    };
  }

  onImageChange = () => {
    let length = this.state.allDinosaurs.length
    let currentIndex = this.state.currentDinosaurIndex
    if ((currentIndex + 1) < length) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    this.setState({
      currentDinosaurIndex: currentIndex,
    })
  }



  componentWillReceiveProps(nextProps) {
    //changing local state without page rerender, this is called before render()
    let index = this.state.currentDinosaurIndex
    this.setState({
      allDinosaurs: nextProps.dinosaursState,
      currentImageUrl: nextProps.dinosaursState[index].dinosaurPic,
      currentDinosaurName: nextProps.dinosaursState[index].dinosaurName
    })

  }


  render() {
    console.log('dinosaurs state', this.props.dinosaursState)
    const index = this.state.currentDinosaurIndex
    return (
      <View style={{ flex: 1 }}>
        <Text>Dinosaur: {this.props.dinosaursState[index].dinosaurName}</Text>
        <TouchableOpacity onPress={this.onImageChange}>
          <Image className='img' source={{ uri: this.props.dinosaursState[index].dinosaurPic }} style={{ width: '100%', height: '100%' }} />
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  console.log('mapStateToProps', state)

  return {
    dinosaursState: state.dinosaursReducer
  }
}
export default connect(mapStateToProps, { getDinosaurs })(Details)
