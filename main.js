const str = `
010-1234-5678
wlsdnjs156@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jimps over the lazy dog.
abbcccdddd
`

// const regexp = new RegExp('the','gi');
// console.log(regexp.test(str));
// str = str.replace(regexp, 'AAA'); // 원본 데이터를 손상시키지 않음
// console.log(str);

console.log(
  str.match(/(?<=\@).{1,}/g)
)

