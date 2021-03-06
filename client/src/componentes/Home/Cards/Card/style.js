import styled from 'styled-components';

const DivStyle = styled.div
`
text-decoration:none;
.conteiner{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}
h3{
    margin:5px;
}
h4{
    margin:5px;
}
li{
    list-style:none;
}
ul{
    padding-inline-start:0;
    margin:0;
}
img{
    width:400px;
    heigth:400px;
}
.link{
    text-decoration:none;
    color:white;
text-shadow: 2px 2px black;
}
`

export default DivStyle;