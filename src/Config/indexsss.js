import React, { Component } from 'react';

import * as S from './styles';

export default class SliderPage extends Component {

    state = {
        value: 20
    };

    render() {
        
        return (

            <S.Container>
                <S.ContainerText>
                    <S.Title>
                        Regule a distância da PA
                </S.Title>
                    <S.SubTitle>
                        distância em metros para o motorista entrar na fila
                </S.SubTitle>
                </S.ContainerText>
                <S.MySlider
                    style={{ width: 400,  paddingBottom: 10, }}
                    minimumValue={20}
                    maximumValue={400}
                    minimumTrackTintColor="#8E56FF"
                    maximumTrackTintColor="#C98DF1"
                    step={20}
                    value={20}
                    thumbImage={require('../../../../../assets/pin.png')}
                    value={this.state.value}
                    onValueChange={value => this.setState({ value })}
                    
                />

                <S.Value>
                    Ditância: {this.state.value} Mt
        </S.Value>
            </S.Container>

        );
    }
}