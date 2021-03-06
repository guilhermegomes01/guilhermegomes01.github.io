import styled from 'styled-components'
import media from 'styled-media-query'

export const AboutWrapper = styled.ul`
  list-style: none;
  padding-top: 20px;
  width: 250px;
`

export const AboutList = styled.li`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: baseline;
  margin-top: 5px;

  &.list-about:last-child .icon-about {
    visibility: hidden;
  }

  ${media.lessThan("991.98px")`
    font-size: 14px;
    margin-top: 0;
  `}

  ${media.between("992px", "1199.98px")`
    font-size: 15px;
  `}
`

export const IconWrapper = styled.div`
  width: 22px;
  height: 22px;
  color: #1EDFD5;
  padding-right: 6px;
`

export const AboutName = styled.span`
  color: #fff;
  grid-column: 2 / 12;
`