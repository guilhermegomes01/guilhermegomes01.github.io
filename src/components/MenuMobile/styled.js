import styled from 'styled-components'
import media from 'styled-media-query'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const MenuMobWrapper = styled.nav`
    display: none;

    ${media.lessThan("991.98px")`
        display: block;
        position: fixed;
        background: #585858;
        width: 100%;
        bottom: 0;
    `}
`

export const MenuMobList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px 0;
    padding-right: 10px;
`

export const MenuMobItem = styled.li`
    color: #A5A5A5;
    &:nth-child(-n+4) {
        padding-right: 15px;
        border-right: 1px solid #A5A5A5;
    }

    &:nth-child(n+2) {
        padding-left: 15px;
        border-left: 1px solid #242424;
    }
`

export const MenuMobLink = styled(AniLink)`
    color: #A5A5A5;
    svg {
        width: 40px;
        height: 40px;
        path {
            fill: #A5A5A5;
        }
    }

    &.actived {
        svg {
            path {
                fill: #1edfd5;
            }
        }
    }
`