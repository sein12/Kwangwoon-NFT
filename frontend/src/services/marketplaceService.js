// 가상의 NFT 목록 데이터
const nftData = [
  {
    id: 1,
    name: "광운대학교 로고 NFT",
    description: "광운대학교의 로고를 NFT로 만나보세요.",
    image:
      "https://via.placeholder.com/600x400.png?text=Kwangwoon+University+Logo+NFT",
    price: 0.1,
  },
  {
    id: 2,
    name: "광운대학교 마스코트 NFT",
    description: "광운대학교의 마스코트 '광운이'를 NFT로 소장해보세요.",
    image:
      "https://via.placeholder.com/600x400.png?text=Kwangwoon+University+Mascot+NFT",
    price: 0.2,
  },
  {
    id: 3,
    name: "광운대학교 기념품 NFT",
    description: "광운대학교의 다양한 기념품을 NFT로 간직해보세요.",
    image:
      "https://via.placeholder.com/600x400.png?text=Kwangwoon+University+Souvenir+NFT",
    price: 0.15,
  },
  // 더 많은 NFT 데이터 추가
];

// 가상의 NFT 목록 가져오기 함수
const getNFTs = async () => {
  // 실제로는 블록체인 네트워크나 데이터베이스에서 NFT 목록을 가져와야 합니다.
  // 여기서는 가상의 데이터를 사용하겠습니다.
  return nftData;
};

// 가상의 NFT 구매 함수
const purchaseNFT = async (nftId) => {
  // 실제로는 블록체인 네트워크에 NFT 구매 트랜잭션을 전송해야 합니다.
  // 여기서는 콘솔에 구매 정보를 출력하는 것으로 대체하겠습니다.
  const nft = nftData.find((item) => item.id === nftId);
  console.log(`Purchased NFT: ${nft.name}`);
};

export { getNFTs, purchaseNFT };
