import React from 'react'
import styled from 'styled-components'

const Stylecomponent = () => {
    const H4 = styled.h4 `
    color:red;
    background-color:yellow;
    `

    const Wrapper = styled.section`
        padding: 4em;
        background: papayawhip;
        `;
    const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
      `;
      
  return (
    <div>
      <h3>My Style component Example</h3>
      <H4>Hello </H4>
      <Wrapper>
        <Title>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, cumque! Repudiandae explicabo quisquam ab hic officiis possimus amet. In odit tenetur esse nobis aperiam nam dolores laudantium maxime doloribus omnis!</Title>
      </Wrapper>
      
    </div>
  )
}

export default Stylecomponent
