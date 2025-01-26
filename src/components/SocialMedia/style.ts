import styled from 'styled-components'
const SocialMediaContainer = styled.div`
  ul {
    li {
      a {
        display: inline-block;
        svg {
          transition: fill 0.3s ease;

          &:hover {
            fill: #fff; /* color on hover */
          }
        }
      }
    }
  }
`

export { SocialMediaContainer }
