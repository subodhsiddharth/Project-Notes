import React from 'react';
import { Card } from 'antd';
import algo from "../Image/Algorithem.jpg"

const { Meta } = Card;

function CardData() {
    return (
        <div style={{display:"flex", marginLeft:"100px" , marginTop:"80px"}}>
             <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={algo} />}
  >
    <Meta title="Algorithm"  />
  </Card>,
  <Card
    hoverable
    style={{ width: 240 , marginLeft:"40px" }}
    cover={<img alt="example" src="" />}
  >
    <Meta title="Database" />
  </Card>,
  <Card
    hoverable
    style={{ width: 240 , marginLeft:"40px" }}
    cover={<img alt="example" src="" />}
  >
    <Meta title="Shell"  />
  </Card>,
        </div>
    )
}

export default CardData
