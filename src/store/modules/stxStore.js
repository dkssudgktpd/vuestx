import axios from 'axios';

const state = {
          // gnb 메뉴 데이터
          gnbData : [],
          noticeData : [],
          newsData : []
};
const actions = {
  fetchGnb({commit}){
    axios.get('/data/gnb.json')
    .then(response => {
      commit('GNB', response.data)
      //comit('mutation 메서드 이름', 전달할 값)
})
    .catch(err => console.log(err))
  },
  fetchNotice({commit}){
    axios.get('/data/notice.json')
    .then(response => {
      commit('NOTICE', response.data)
    })
    .catch(err => console.log(err))
  },
  fetchNews({commit}){
    // news.json을 axios로 호출
    axios.get('/data/news.json')
    .then(response => {
      console.log(response)
      // mutation으로 자료를 전송 commit 필요
      // axios는 받아온 자료를 .data에 보관
      commit('NEWS', response.data)
    })
    .catch(err => console.log(err))
  }
};
const mutations = {
  // mutation => state의 값을 업데이트 하기 위한 용도
  /*
  메서드이름 (state, 전달할 재료){
    store의 데이터(state) state.gnbData 업데이트
  }
  */ 
  GNB(state, payload){
    state.gnbData = payload
  },
  NOTICE(state, payload){
    state.noticeData = payload
  },
  NEWS(state, payload){
    state.newsData = payload
  }
};
const getters = {
  getGnbData(state){
    return state.gnbData
  },
  getNewsData(state){
    return state.newsData
  },
  getNoticeData(state){
    return state.noticeData
  }
};

export default {state, actions, mutations, getters}