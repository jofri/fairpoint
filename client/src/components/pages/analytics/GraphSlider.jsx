import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Polar from './graphs/Polararea';
import Radar from './graphs/Radar';
import Doughnut from './graphs/Doughnut';





// const Container = styled.div`
//   overflow:hidden;
// `;

// const StyledSlider = styled(Slider)`
//     .slick-slide div{
//       outline: none;
//     }
// `;

// export default class GrapghSlider extends Component {
//   render () {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <Container>
//         <StyledSlider {...settings}>
//           <div>
//             <Polar />
//             <Radar />
//             <Doughnut />
//           </div>
//         </StyledSlider>
//       </Container>
//     );
//   }
// }