import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createVocabCard, loadDictionaryFB, createDictionaryFB } from "./redux/module/dictionary"



const AddVocab = (props) => {
    const history = useHistory();
    const VocabRef = React.useRef(null);
    const DefRef = React.useRef(null);
    const ExRef = React.useRef(null);

    const dispatch = useDispatch();



    const addVocabCard = () => {
        // dispatch(createVocabCard({vocabulary: VocabRef.current.value, definition: DefRef.current.value, example: ExRef.current.value}))
        dispatch(createDictionaryFB({vocabulary: VocabRef.current.value, definition: DefRef.current.value, example: ExRef.current.value}));
    }


    return (
        <div>
          <Title>단어 추가하기</Title>
          <InputContainer>
            <InputLabel>단어</InputLabel>
            <Input type="text" ref={VocabRef}/>
            <InputLabel>설명</InputLabel>
            <Input type="text" ref={DefRef}/>
            <InputLabel>예시</InputLabel>
            <Input type="text" ref={ExRef}/>  
          </InputContainer>
          <AddBtn onClick={addVocabCard}>추가하기</AddBtn>
        </div>
    );
};

// const Container = styled.div`
//   max-width: 350px;
//   min-height: 500px;
//   background-color: #fff;
//   padding: 16px;
//   margin: 20px auto;
//   border: 1px solid #ddd;
// `;

const Title = styled.h2`
  color: black;
  text-align: center;
`;

const Input = styled.input`
width: 300px;
height:40px;
display:block;
margin: 10px auto;
border-radius: 5px;
border: 1px solid skyblue;
`;

const InputContainer = styled.div`
width: 320px;
height:270px;
display:block;
margin: 30px auto;
padding: 15px;
background-color: aliceblue;
border-radius: 5px;
border: 1px aliceblue;
`;

const InputLabel = styled.h5`
margin:2px;
`;


const AddBtn = styled.button`
width: 320px;
height:45px;
display:block;
margin: 50px auto;
padding: 10px;
background-color: skyblue;
border-radius: 5px;
border: 1px skyblue;
font-size: 18px;
color: white;
font-weight: bold;
`;

export default AddVocab;