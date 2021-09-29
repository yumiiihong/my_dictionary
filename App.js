import React from "react";
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import styled from "styled-components";
import {Route, Switch, useHistory} from 'react-router-dom';
import AddVocab from "./AddVocab";
import MyDictionary from "./MyDictionary";
import{db} from "./firebase";
import { collection, getDoc, getDocs, addDoc,deleteDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { loadDictionaryFB } from "./redux/module/dictionary"



// import { useDispatch } from "react-redux";
// import {createBucket} from "./redux/modules/bucket";

function App() {

const history = useHistory();
const dispatch = useDispatch();

React.useEffect( () => {
  dispatch(loadDictionaryFB());
}, []);

// React.useEffect(async() => {
//   const docRef = doc(db, "dictionary", "P5Oz4GbccEg9uaca8sJG");
//   await deleteDoc(docRef);

// }, []);

// React.useEffect(async()=> {
//   console.log(db);

//   addDoc(collection(db, "dictionary"),{vocabulary:"단어 여기에 ",definition:"뜻 여기에",example:"예시 여기에"})
  
// }, []);


return (
<div className="App">

<Container>
{/* 컴포넌트를 넣어줍니다. */}
{/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
<Switch>
  <Route path="/" exact>
    <Title>My Dictionary</Title>
    <AddVocabLink
    onClick = {() => { 
      history.push("/addvocab");
    }}
    > 단어 추가하기 </AddVocabLink>
    <MyDictionary/>
    
  </Route>

  <Route path="/addvocab" exact>
    <AddVocab/>
  </Route>
</Switch>
</Container>


{/* 인풋박스와 추가하기 버튼을 넣어줬어요. */}
{/* <Input>
<input type="text" ref={text} />
<button onClick={addBucketList}>추가하기</button>
</Input> */}
</div>
);
}

const Input = styled.div`
max-width: 350px;
min-height: 10vh;
background-color: #fff;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;
`;

const Container = styled.div`
max-width: 350px;
min-height: 700px;
background-color: lightpink;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid purple;
`;

const Title = styled.h1`
color: slateblue;
text-align: center;
margin-bottom: 10px;
`;

const Line = styled.hr`
margin: 16px 0px;
border: 1px dotted #ddd;
`;

const AddVocabLink = styled.button`
margin:3px;
margin-left: 120px;
margin-right: 120px;
padding: 4px;
background-color: skyblue;
color:white;
font-size: 16px;
border: solid 1px;
border-radius: 4px;
`;


export default App;