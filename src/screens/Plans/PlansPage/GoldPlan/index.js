import React, { useRef, useState } from 'react';
import { Modalize } from 'react-native-modalize'
import { color } from 'react-native-reanimated';
import * as S from './styles';


export default function PlansPage() {



    return (
        <S.Container>
            <S.ContainerIntro>
                <S.ContainerInfoPlan>
                    <S.TextInfoPlan>
                        Benefícios do plano
                        </S.TextInfoPlan>
                    <S.ContainerInfoPlanBall>
                        <S.ContainerPositionFree>
                            <S.BallUserLimit>
                                <S.TextNumBalls>
                                    5
                            </S.TextNumBalls>
                            </S.BallUserLimit>
                            <S.TextBalls>
                                 Usuários no App
                            </S.TextBalls>
                        </S.ContainerPositionFree>
                        <S.ContainerPositionFree2>
                            <S.BallTripLimit>
                                <S.TextNumBalls>
                                    25
                            </S.TextNumBalls>
                            </S.BallTripLimit>
                            <S.TextBalls>
                                 Tripulações por dia
                            </S.TextBalls>
                        </S.ContainerPositionFree2>
                        <S.ContainerPositionFree3>
                            <S.BallDaysLimit>
                                <S.TextNumBalls>
                                    15
                            </S.TextNumBalls>
                            </S.BallDaysLimit>
                            <S.TextBalls>
                                 Dias restantes de teste
                            </S.TextBalls>
                        </S.ContainerPositionFree3>
                        <S.ContainerPositionFree4>
                            <S.ButtonFree>
                                <S.TextButton>
                                    Contratar
                            </S.TextButton>
                            </S.ButtonFree>
                        </S.ContainerPositionFree4>
                    </S.ContainerInfoPlanBall>
                    <S.ContainerYourPlan>
                        <S.TextPlan>
                            GOLD
                        </S.TextPlan>
                        <S.SubTextPlan>
                            R$129,00
                        </S.SubTextPlan>
                    </S.ContainerYourPlan>
                </S.ContainerInfoPlan>
            </S.ContainerIntro>
        </S.Container>

    );
}