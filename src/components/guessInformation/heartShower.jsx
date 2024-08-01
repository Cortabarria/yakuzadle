function HeartShower(count) {
  const total = count;
  const heartCount = 10 - total;
  const heart2Count = 10 - heartCount;

  return (
    <div>
      {Array.from({ length: heartCount }, (_, i) => (
        <img
          key={`heartFilled-${i}`}
          src={`${process.env.PUBLIC_URL}/images/assets/filledHeart.png`}
          alt={`heartFilled-${i}`}
          width={"20px"}
          style={{ marginRight: "2px" }}
        />
      ))}
      {Array.from({ length: heart2Count }, (_, i) => (
        <img
          key={`heartEmpty-${i}`}
          src={`${process.env.PUBLIC_URL}/images/assets/emptyHeart.png`}
          alt={`heartEmpty-${i}`}
          width={"20px"}
          style={{ opacity: 0.5, marginRight: "2px" }}
        />
      ))}
    </div>
  );
};

export default HeartShower;