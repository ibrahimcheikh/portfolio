import Spline from '@splinetool/react-spline';
import styled from 'styled-components';
import './styles.css'; // Import the CSS file
export default function App() {
  return (
    <Wrapper>
      <Spline className="spline" scene="https://prod.spline.design/C-CAjXRA9cJOnhpf/scene.splinecode" />
      <Content><h1>Hello and welcome to my Website</h1>
        <p>hellof dshfdsjf sdjl; sdj fjfjklsf djkls fjklsf jkls fjkl;sfjk; lsjkl sfdjkl;sfjkl sfdjklfsdjklsdjklfsd
          fdsjhkjks fdjlkfsd jklfsd jlsfd ljkfsd jklfsd lkfs djlsfd jlsf
        </p>

      </Content>
    </Wrapper>
  );
}


const Wrapper = styled.div`
  font-family: "Spline sans",sans-serif;  
  font-size: 24px;
  color: white;
  .spline {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

const Content = styled.div`
position:absolute;
top:30px;
display: flex;
flex-direction:column;

.h1{
  font-family: "Spline sans",sans-serif;  
  font-size: 100px;
  font-weight:bold;
  margin:0;
  max-width: 500px;
}

.p{
  font-weight:normal;
  line-height:150%;
  max-width:380px;
}

h1,p{
  margin: 0 30px 0 100px;
}

`;