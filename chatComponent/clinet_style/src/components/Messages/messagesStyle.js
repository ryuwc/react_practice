import React from 'react';
import styled from 'styled-components';
import BasicScrollToBottom from "react-scroll-to-bottom";

export const ChatList = styled(BasicScrollToBottom)`
  padding: 16px 0 0 0;
  overflow: scroll;
  flex: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
`;

// export const ChatList = styled.div`
//   padding: 16px 16px 0 16px;
//   overflow: auto;
//   flex: auto;
//   &::-webkit-scrollbar {
//     display: none;
//   }
//   // 스크롤 자동으로 내리기
//   // https://stackoverflow.com/questions/37620694/how-to-scroll-to-bottom-in-react
// `;