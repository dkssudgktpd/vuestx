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
    axios.get('/data/news.json')
    .then(response => {
      commit('NEWS', response.data)
    })
    .catch(err => console.log(err))
  }
};
const mutations = {
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