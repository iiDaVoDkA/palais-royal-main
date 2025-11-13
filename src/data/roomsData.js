// src/data/roomsData.js

export const roomsData = [
    {
      slug: "economy-single",
      title: "Economy Single Room",
      images: [
        require("../assets/images/Rooms/single-standard/1.JPG"),
        require("../assets/images/Rooms/single-standard/2.JPG"),
        require("../assets/images/Rooms/single-standard/3.JPG"),
        require("../assets/images/Rooms/single-standard/4.JPG"),
      ],
      description: `A cozy and well-equipped room with a queen bed, perfect 
  for solo travelers or business guests seeking comfort and convenience. 
  Enjoy private bathroom, complimentary Wi-Fi, flat-screen TV, and more.`,
  
      // Additional info
      roomInfo: {
        size: "300 Sq ft",
        beds: "1 Queen Bed",
        occupancy: "1 Person",
        view: "City View",
      },
    },
    {
      slug: "superior-single",
      title: "Superior Single Room",
      images: [
        require("../assets/images/Rooms/single-sup/1.JPG"),
        require("../assets/images/Rooms/single-sup/2.JPG"),
        require("../assets/images/Rooms/single-sup/3.JPG"),
        require("../assets/images/Rooms/single-sup/4.JPG"),
      ],
      description: `Offering additional space and comfort, this room 
  features a king bed and luxurious amenities for a relaxing stay. 
  Includes a private bathroom with bathtub and 24-hour room service.`,
  
      roomInfo: {
        size: "350 Sq ft",
        beds: "1 King Bed",
        occupancy: "1 Person",
        view: "City View",
      },
    },
    {
      slug: "economy-double",
      title: "Economy Double Room",
      images: [
        require("../assets/images/Rooms/double-standard/1.JPG"),
        require("../assets/images/Rooms/double-standard/2.JPG"),
        require("../assets/images/Rooms/double-standard/3.JPG"),
        require("../assets/images/Rooms/double-standard/4.JPG"),
      ],
      description: `Designed for couples or friends, this room includes either 
  two single beds or one queen bed, providing ample comfort and privacy. 
  Enjoy modern decor and convenient in-room facilities.`,
  
      roomInfo: {
        size: "400 Sq ft",
        beds: "1 Queen or 2 Singles",
        occupancy: "2 People",
        view: "City View",
      },
    },
    {
      slug: "superior-double",
      title: "Superior Double Room",
      images: [
        require("../assets/images/Rooms/double-sup/1.JPG"),
        require("../assets/images/Rooms/double-sup/2.JPG"),
        require("../assets/images/Rooms/double-sup/3.JPG"),
        require("../assets/images/Rooms/double-sup/4.JPG"),
      ],
      description: `Spacious and elegantly decorated, this room features a king bed 
  and superior amenities to enhance your stay. Perfect for those seeking 
  a bit more luxury and style.`,
  
      roomInfo: {
        size: "450 Sq ft",
        beds: "1 King Bed",
        occupancy: "2 People",
        view: "City View",
      },
    },
    {
      slug: "triple",
      title: "Triple Room",
      images: [
        require("../assets/images/Rooms/triple/1.JPG"),
        require("../assets/images/Rooms/triple/2.JPG"),
        require("../assets/images/Rooms/triple/3.JPG"),
        require("../assets/images/Rooms/triple/4.JPG"),
      ],
      description: `Ideal for small families or groups, the Triple Room offers three comfortable 
  beds and extra space to accommodate multiple guests. All modern amenities included.`,
  
      roomInfo: {
        size: "500 Sq ft",
        beds: "3 Single Beds (or 1 Queen + 1 Single)",
        occupancy: "3 People",
        view: "City View",
      },
    },
    {
      slug: "suite",
      title: "Suite",
      images: [
        require("../assets/images/Rooms/suite/1.JPG"),
        require("../assets/images/Rooms/suite/2.JPG"),
        require("../assets/images/Rooms/suite/3.JPG"),
        require("../assets/images/Rooms/suite/4.JPG"),
        require("../assets/images/Rooms/suite/5.JPG"),
      ],
      description: `The ultimate indulgence, our Suite provides a luxurious escape 
  with a separate living area, refined furnishings, and superior amenities. 
  Some suites include a private balcony with stunning views of the city.`,
  
      roomInfo: {
        size: "600 Sq ft",
        beds: "1 King Bed + Living Area",
        occupancy: "2 People",
        view: "Panoramic City View",
      },
    },
  ];