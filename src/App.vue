<template>
    <!-- 안내창 -->
  <div>
    <Modal/>
    <div class="wrap">
      <!-- 상단 -->
      <Header :gnbdata="gnbData" />
      <!-- 비주얼 -->
      <Visual/>
      <!-- 업무파트 -->
      <Part/>
      <!-- 새소식 -->
      <News :ntdata="noticeData" :nsdata="newsData"/>
      <!-- 고객센터 -->
      <Cs></Cs>
      <!-- 소개 -->
      <About/>
      <!-- 하단  -->
      <Footer/>
    </div>  
  </div>
</template>

<script>
import Modal from '@/components/ModalView.vue';
import Header from '@/components/HeaderView.vue';
import Visual from '@/components/VisualView.vue';
import Part from '@/components/PartView.vue';
import News from '@/components/NewsView.vue';
import Cs from '@/components/CsView.vue';
import About from '@/components/AboutView.vue';
import Footer from '@/components/FooterView.vue';


export default {
  name: 'App',
  components: {
    Modal, Header, Visual, Part, News, Cs, About, Footer
  },
  setup(){
    // gnb 메뉴 데이터
    const gnbData = [
      {
        mainlink : 'a.html',
        maintxt : '회사소개',
        subdata : [
          {sublink : '1.html',subtxt : '인사말'},
          {sublink : '2.html',subtxt : 'STX건설'},
          {sublink : '3.html',subtxt : '기업문화'},
          {sublink : '4.html',subtxt : 'STX건설연혁'},
          {sublink : '5.html',subtxt : '조직안내'},
          {sublink : '6.html',subtxt : '윤리경영'},
          {sublink : '7.html',subtxt : '안전·환경·품질경영'},
          {sublink : '8.html',subtxt : '찾아오시는길'}
          ]
      },
      {
        mainlink : 'b.html',
        maintxt : '사업분야',
        subdata : [
          {sublink : '9.html',subtxt : '건축사업'},
          {sublink : '10.html',subtxt : '주택사업'},
          {sublink : '11.html',subtxt : '토목사업'},
          {sublink : '12.html',subtxt : '플랜트/공작기계사업'},
          {sublink : '13.html',subtxt : '해외사업'},
          ]
      },
      {
        mainlink : 'c.html',
        maintxt : '사회공헌',
        subdata : [
          {sublink : '14.html',subtxt : '나눔의생각'},
          {sublink : '15.html',subtxt : '주요활동분야'},
          {sublink : '16.html',subtxt : '활동현황'}
          ]
      },
      {
        mainlink : 'd.html',
        maintxt : '홍보센터',
        subdata : [
          {sublink : '17.html',subtxt : '홍보동영상'},
          {sublink : '18.html',subtxt : '홍보브로슈어'},
          {sublink : '19.html',subtxt : 'STX건설뉴스'}
          ]
      },
      {
        mainlink : 'e.html',
        maintxt : '고객지원',
        submenu : [
          {sublink : '20.html',subtxt : '자주묻는질문'},
          {sublink : '21.html',subtxt : '고객문의'}
          ]
      },
      {
        mainlink : 'f.html',
        maintxt : '채용정보',
        subdata : [
          {sublink : '22.html',subtxt : '채용안내'},
          {sublink : '23.html',subtxt : '채용공고'},
          {sublink : '24.html',subtxt : '채용FAQ'}
          ]
      },

    ];

    const noticeData = [
      {url: 'a.html', title :'에스티엑스건설자산관리 주식회사 해산결의에 따른 채권신고 안내 공고 (2차)'},
      {url: 'b.html', title :'에스티엑스건설자산관리 주식회사 해산결의에 따른 채권신고 안내 공고 (1차)'},
      {url: 'c.html', title :'2021년도 협력업체 모집공고'},
      {url: 'd.html', title :'STX건설 상호 사용 관련 안내'},
      
    ];
    const newsData = [
      {url: 'e.html', title:'STX건설, 춘천 레고랜드 테마파크 시공사 ‘선정’'},
      {url: 'f.html', title:"STX건설, 2018년 성장 '청신호' "}
    ];

    
    return{
      noticeData,newsData,gnbData
    }
  }
}
</script>

<style>
@charset "utf-8";
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul,
li {
  list-style: none;
}

a {
  color: #333;
  text-decoration: none;
}

img {
  vertical-align: middle;
  border: 0;
}

html {
  font-size: 16px;
}

body {
  font-family: 'Noto Sans KR', Helvetica, '맑은 고딕', 'malgun gothic', 'Apple SD Gothic Neo', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: -0.64px;
  color: #444;
}

/* 공통요소 */
.clearfix::after {
  content: '';
  position: relative;
  display: block;
  width: 100%;
  clear: both;
}

.inner {
  position: relative;
  display: block;
  max-width: 1200px;
  margin: 0 auto;
}








.wrap {
  padding-top: 80px;
}

/* 내용별 Section */

/* 비주얼 */


/* 업무파트 */



/* 새소식 */

/* 고객센터 */

/* 소개 */

/* 하단 */

</style>
