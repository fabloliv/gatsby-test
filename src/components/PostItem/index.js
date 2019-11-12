import React from "react"

import * as S from "./styled"

const PostItem = () => (
  <S.PostItemLink to="/slug/">
    <S.PostItemWrapper>
      <S.PostItemTag background="#e70388">Misc</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>30 de julho de 2019 - 4 min de leitura</S.PostItemDate>
        <S.PostItemTitle>Diga não ao Medium Lorem ipsum</S.PostItemTitle>
        <S.PostItemDescription>
          Algumas razões para Lorem ipsum dolor sit amet consectetur adipisicing
          elit.
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem
