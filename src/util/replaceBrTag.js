// \n을 <br/>로 바꿔주는
export const replaceBrTag = str => {
  if (str === undefined || str === null) return { __html: '내용이 없습니다' };
  str = str.replace(/\r\n/gi, '<br>');
  str = str.replace(/\\n/gi, '<br>');
  str = str.replace(/\n/gi, '<br>');
  return { __html: str };
};
