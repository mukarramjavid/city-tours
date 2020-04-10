import React from "react";
import AvatarList from "./AvatarList";
import { Grid, Row, Col } from "react-bootstrap";

const Avatar = () => {
  const arr = [
    {
      id: 1,
      name: "Holy Kaabah",
      work: "Saudi Arabia",
      img:'./Images/kaaba.jpeg',
      info:'Pilgrimage to a holy site is a core principle of almost all faiths. The Kaaba, meaning cube in Arabic, is a square building elegantly draped in a silk and cotton veil. Located in Mecca, Saudi Arabia, it is the holiest shrine in Islam.'

    },
    {
      id: 2,
      name: "The Blue Mosque",
      work: "Istunbul-Turkey",
      img:'./Images/2018-08-28@14-49-53-986_shutterstock_313988669(1).jpg',
      info:"Sultan Ahmed Mosque is a historic mosque located in Istanbul, Turkey. It remains a functioning mosque, while also attracting large numbers of tourist visitors. It was constructed between 1609 and 1616 during the rule of Ahmed I. Its Külliye contains Ahmed's tomb, a madrasah and a hospice."

    },
    {
      id: 3,
      name: "Badshahi Mosque",
      work: "Lahore-Pakistan",
      img:'./Images/Badshahi-Mosque-Lahore-Pakistan.jpg',
      info:'The Badshahi Masjid is a Mughal era masjid in Lahore, capital of the Pakistani province of Punjab, Pakistan. The masjid is located west of Lahore Fort along the outskirts of the Walled City of Lahore.'

    },
    {
      id: 4,
      name: "Neelum-Valley",
      work: "Azad Kashmir",
      img:'./Images/Neelum-Valley.jpg',
      info:'Neelum District, is the northernmost district of Azad Kashmir, Pakistan. Taking up the larger part of the Neelam Valley, the district has a population of 191,000. It was badly affected by the 2005 Kashmir earthquake.'

    }
  ];
  return (
    <>
      <Grid>
        <Row>
          {arr.map((num, i) => {
            return <Col md={3} sm={4} xs={12} key={num.id}>
                <AvatarList name={arr[i].name} work={arr[i].work} img={arr[i].img} info={arr[i].info}/>
            </Col>;
          })}
        </Row>
      </Grid>
    </>
  );
};
export default Avatar;
