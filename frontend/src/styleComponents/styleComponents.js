import styled from 'styled-components';

export const Label = styled.div`
  width: ${props => props.size ? props.size : '100%'};
  margin-bottom: 15px;
`;

export const Placeholder = styled.div`
  // transform: ${props => props.placeholderPosition === null ? 'translate(5px,-50%)' : 'translate(5px,-200%)'};
  z-index:2;
  margin-bottom: 7px;
  // transition: transform 0.3s ease;
`;
export const styleSelectMenu = {
    menu: (provided, state) => ({
        ...provided,
        zIndex: 5,
    }),
};
export const Column = styled.div`
    flex: ${props => props.flex ? props.flex : '1'};
    margin: 0 0 0 5%;
`;
export const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 2% auto 0;
`;
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 5%;
`;
export const Input = styled.input`
    border: 1px solid #ccc;
    width: 100%;
    box-sizing: border-box;
    height: 38px;
    padding: 0 0 0 8px;
    font-size: .7em;
`;
export const colorOptions = (theme) => ({
    ...theme,
    borderRadius: 0,
    zIndex: 5,
    colors: {
        ...theme.colors,
        primary: '#b3b3b2',
        primary25:'#e6e6e6',
        primary50:'#e6e6e6',
    },
});
export const Address = styled.div`
    
    
`;
export const PrintDoc = styled.div`

`;
export const Header = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    width: 40%;
`;
export const MainText = styled.div`
    text-align:justify;
`;
export const Title = styled.h5`
    text-align: center;
`;
export const StylePrint = styled.div`
        font-size: 10pt;
        font-weight: 400;
        font-family: Arial;
        width: 17cm;
        margin-bottom: 5%;
        line-height: 12pt;
        box-sizing: border-box;
        p{
            margin:0;
        }
`;
export const Indent = styled.p`
    text-indent: 1.5em;
`;
export const BoldItalic = styled.span`
    font-weight:bold;
    font-style:italic;
`;
export const NameParties = styled(BoldItalic)`
    text-transform: uppercase;
`;
