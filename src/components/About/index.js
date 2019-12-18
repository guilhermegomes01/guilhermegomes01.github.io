import React from 'react'

import Icons from './icons'
import * as S from './styled'
import Items from './item'

const About = () => (
  <S.AboutWrapper>
    {Items.map((item, index) => {
      const Icon = Icons[item.label]
      // const Name = [item.name]
      
      return (
        <S.AboutList key={index}>
          <S.IconWrapper>
            <Icon />
          </S.IconWrapper>
          <S.AboutName>
            {item.name}
          </S.AboutName>
        </S.AboutList>
      )
    })}
  </S.AboutWrapper>
)

export default About