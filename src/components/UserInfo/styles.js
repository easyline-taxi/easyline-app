import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
  padding-top: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: row;

${ ({type})  => type === 'home'
    && css`

  flex-direction: row;
  
  
  `
}

${ ({type})  => type === 'user'
    && css`
  padding-top: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  `
}

${ ({type})  => type === 'plans'
    && css`
  flex-direction: row;

  `
}
${ ({type})  => type === 'admin'
    && css`
  justify-content: flex-start;
  align-items: center;
  
  
  `
}
`;

export const AvatarContainer = styled.View`
  width: 90px;
  height: 90px;
  border-radius: 45px;
  border-color: #34C759;
  border-width: 2px;
  justify-content: center;
  align-items: center;

${ ({type})  => type === 'home'
    && css`
  width: 63px;
  height: 63px;
  border-radius: 40px;
  border-color: #7F0DFF;
  margin-right: 10px;
  border-width: 1px;
  justify-content: center;
  align-items: center;
  `
}

${ ({type})  => type === 'user'
    && css`
  width: 85px;
  height: 85px;
  border-radius: 50px;
  border-color: #34C759;
  margin-right: 10px;
  border-width: 2px;
  justify-content: center;
  align-items: center;
  `
}

${ ({type})  => type === 'plans'
    && css`
  width: 65px;
  height: 65px;
  border-radius: 40px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  `
}
${ ({type})  => type === 'admin'
    && css`
  width: 63px;
  height: 63px;
  border-radius: 40px;
  border-color: #7F0DFF;
  margin-right: 10px;
  border-width: 1px;
  justify-content: center;
  align-items: center;
  `
}
`;


export const AvatarImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;

${ ({type})  => type === 'home'
    && css`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  `
}
  ${ ({type})  => type === 'user'
    && css`
  width: 76px;
  height: 76px;
  border-radius: 38px;
  `
}
  ${ ({type})  => type === 'plans'
    && css`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  `
}
${ ({type})  => type === 'admin'
    && css`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  `
}
`;

export const UserDataContainer = styled.View`
  justify-content: center;
  align-items: center;

  ${ ({type})  => type === 'home'
    && css`
  justify-content: center;
  align-items: flex-start;
  `
}
  ${ ({type})  => type === 'user'
    && css`
  justify-content: center;
  align-items: center;
  `
}
  ${ ({type})  => type === 'plans'
    && css`
  justify-content: center;
  align-items: flex-start;
  `
}
${ ({type})  => type === 'admin'
    && css`
  justify-content: center;
  align-items: center;
  padding-right: 15%;
  `
}
`;

export const Title = styled.Text`
  font-size: 18px;


  ${ ({type})  => type === 'plans'
    && css`
  font-size: 18px;
  color: #fff;
  `
}
`;

export const UserType = styled.Text`
  font-size: 14px;
  color: #999;

  ${ ({type})  => type === 'plans'
    && css`
  color: #fff;
  `
}
`;

export const Bottom = styled.TouchableOpacity`
  background-color: #964FDC;
  border-radius: 8px;
  height: 30px;
  width: 80px;
  justify-content: center;
  align-items: center;
`;

export const TextBottom = styled.Text`
  color: white;
  font-size: 10px;
`;

export const ContainerBottom = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  
  
`;
export const ContainerCam = styled.TouchableOpacity`
  top: -105px;
  right: -65px;
  align-items: center;
  justify-content: center;
  
`;
export const TextCam = styled.Text`
  font-size: 10px;
  
  
`;
