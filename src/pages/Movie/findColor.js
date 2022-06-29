const myImg = new Image();
myImg.crossOrigin = 'Anonymous';

myImg.onload = () => {
  const context = document.createElement('canvas').getContext('2d');
  context.drawImage(myImg, 0, 0);
  const { data } = context.getImageData(10, 10, 1, 1);
  console.log('이거임', data);
};

myImg.src =
  'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMjFfODAg%2FMDAxNjQ1NDIzMjUzNDQy.WGb74ekPWMw06Lbv-Upq6u7I7Q6LDHMTMs13NBlzemcg.7uVPQf_PVAB0FlAiyIAOvguKmQNAqI2UBCiTevAYTVUg.JPEG.wavetape%2FAdobeColor-%25BD%25C4%25B9%25B0_-_%25BB%25EF%25BB%25F6%25C1%25A6%25BA%25F1%25B2%25C9.jpeg&type=sc960_832';
