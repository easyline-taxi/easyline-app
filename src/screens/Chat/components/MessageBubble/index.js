import React from 'react'

import { StyleSheet, View, Text, Image } from 'react-native'

import styles from './styles';

import Svg, { Path } from 'react-native-svg'

import { moderateScale } from 'react-native-size-matters'

class MessageBubble extends React.Component {
  render() {
    return (

      <View style={[
        styles.message,
        this.props.mine ? styles.mine : styles.not_mine
      ]}
      >

        <View
          style={[
            styles.cloud,
            {
              backgroundColor: this.props.mine ? '#dddddd' : '#7D26E1'
            }
          ]}
        >

          {
            this.props.user
              ?
              <Text
                style={[
                  styles.user,
                  {
                    color: this.props.mine ? 'black' : 'white',
                    alignSelf: this.props.mine ? 'flex-start' : 'flex-end',
                  }
                ]}
              >
                {this.props.user}
              </Text>
              :
              null
          }
          {
            this.props.text
              ?
              <Text
                style={[
                  styles.text,
                  {
                    color: this.props.mine ? 'black' : 'white'
                  }
                ]}
              >
                {this.props.text}
              </Text>
              :
              null
          }
          {
            this.props.hourdate
              ?
              <Text
                style={[
                  styles.hourdate,
                  {
                    color: this.props.mine ? '#ACACAC' : '#ACACAC',
                    alignSelf: this.props.mine ? 'flex-start' : 'flex-end',
                  }
                ]}
              >
                {this.props.hourdate}
              </Text>
              :
              null
          }
          <View
            style={[
              styles.arrow_container,
              this.props.mine ? styles.arrow_left_container : styles.arrow_right_container
            ]}
          >
            <Svg
              style={this.props.mine ? styles.arrow_left : styles.arrow_right}
              width={moderateScale(15.5, 0.6)}
              height={moderateScale(17.5, 0.6)}
              viewBox="32.484 17.5 15.515 17.5"
              enable-background="new 32.485 17.5 15.515 17.5"
            >
              <Path
                d={this.props.mine
                  ?
                  "M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z"
                  :
                  "M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z"
                }
                fill={this.props.mine ? '#dddddd' : '#7D26E1'}
                x="0"
                y="0"
              />
            </Svg>
          </View>
        </View>
        {
          this.props.image
            ?
            <Image
              style={[
                styles.avatar_container,
                this.props.mine ? styles.avatar_left : styles.avatar_right
              ]}
              source={this.props.image}
            />
            :
            null
        }
      </View>
    )
  }
}

export default MessageBubble