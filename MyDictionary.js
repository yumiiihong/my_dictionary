// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";
import { useParams,useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteVocabCard,deleteDictionaryFB } from "./redux/module/dictionary"

const MyDictionary = (props) => {

  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();
  const my_lists = useSelector((state) => state.dictionary.list);
  const dictionary_index = params.index;
  const dictionary_list = useSelector((state) => state.dictionary.list);
  


  return (

    <ListStyle>
      {my_lists.map((list, index) => {
        return (
          <ItemStyle key={index}>
            <DeleteButton
                onClick={()=> {
                    dispatch(deleteDictionaryFB(dictionary_list[dictionary_index] ? [dictionary_index].id : ""));     
                }}
            
            >삭제하기</DeleteButton>
            <Label>단어</Label> 
            <p>{list.vocabulary}</p>
            <Label>설명</Label>
            <p>{list.definition}</p>
            <Label>예시</Label>
            <p>{list.example}</p>
          </ItemStyle>
        );
      })}
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: aliceblue;
  border-radius: 4px;
`;

const Label = styled.h5`
  color: blueviolet;
  margin-bottom: 0px;
  text-decoration: underline;
  display: inline
  
`;

const DeleteButton = styled.button`
  float: right;
  display: inline;
  border: 1.5px solid skyblue;
  border-radius: 4px;
  padding: 4px;
  background-color: transparent;
  color: slategray;
  
`;

export default MyDictionary;