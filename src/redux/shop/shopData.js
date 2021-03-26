const shopData = {
  'air jordan': {
    id: 1,
    title: 'Air Jordan',
    routeName: 'air jordan',
    items: [
      {
        id: 1,
        name: 'Air Jordan 1 "Shattered Backboard"',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Jordan%2Fshattered-backboard.webp?alt=media&token=b2875a01-af10-4f22-b56e-82813debfcf8',
        price: 160
      },
      {
        id: 2,
        name: 'Air Jordan 1 "Fragment" (2014)',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Jordan%2Ffragment.webp?alt=media&token=8f93249e-0503-4729-b9e3-d7a00dd79780',
        price: 165
      },
      {
        id: 3,
        name: 'Air Jordan 1 "Bred" (2016)',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Jordan%2Fbred-1.webp?alt=media&token=b515fce0-f18e-44f2-b18c-8067f1dcefb1',
        price: 160
      },
      {
        id: 4,
        name: 'Air Jordan 1 "Royal" (2017)',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Jordan%2Froyal.webp?alt=media&token=ed254533-12fb-43fa-8812-f092add59bbf',
        price: 160
      },
      {
        id: 5,
        name: 'Air Jordan 1 "Shadow" (2018)',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Jordan%2Fshadow.webp?alt=media&token=787a187c-7ac8-4e5d-8504-911c3ae31e33',
        price: 160
      },
      {
        id: 6,
        name: 'Air Jordan 3 "Black Cement" (2018)',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Jordan%2Fblack-cement.webp?alt=media&token=d907204c-2d46-4873-b792-a2cfa23dd67a',
        price: 200
      },
      {
        id: 7,
        name: 'Air Jordan 3 "True Blue" (2011)',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Jordan%2Ftrue-blue.webp?alt=media&token=33361b04-bc42-4931-9a55-b574d9c7a86f',
        price: 150
      },
      {
        id: 8,
        name: 'Air Jordan 4 "White Cement" (2016)',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Jordan%2Fwhite-cement.webp?alt=media&token=c359bb6a-1df9-4ce3-936d-a111f725fce6',
        price: 220
      },
      {
        id: 9,
        name: 'Air Jordan 7 "Bordeaux" (2011)',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Jordan%2Fbordeaux.webp?alt=media&token=f6f30e5a-f6a8-4750-be71-d80333d2a7c5',
        price: 150
      }
    ]
  },
  nike: {
    id: 2,
    title: 'Nike',
    routeName: 'nike',
    items: [
      {
        id: 10,
        name: 'Nike Air Jordan 1 "Travis Scott"',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Nike%2Ftravis-scott-1.webp?alt=media&token=538cc3f1-e6bb-450c-ad26-45c1824365e1',
        price: 175
      },
      {
        id: 11,
        name: 'Nike SB Dunk Low "Travis Scott"',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Nike%2Ftravis-scott-sb.webp?alt=media&token=55b96307-b2bf-4b30-a450-1f2b46b57bcc',
        price: 150
      },
      {
        id: 12,
        name: 'Nike Air Force 1 Low "Travis Scott"',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Nike%2Ftravis-scott-air-force.webp?alt=media&token=fc2852cb-37af-4eb1-8838-70f478007261',
        price: 150
      },
      {
        id: 13,
        name: 'Nike Air Max 1/97 "Sean Wotherspoon"',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Nike%2Fsean-wotherspoon.webp?alt=media&token=a6d6c815-758f-47b3-a3ad-a546157885ae',
        price: 160
      },
      {
        id: 14,
        name: 'Nike Sacai LD Waffle (Blue)',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Nike%2Fnike-sacai.webp?alt=media&token=f8c8ca64-0d75-46cc-b715-4986b1c11e8a',
        price: 160
      },
      {
        id: 15,
        name: 'Nike Kobe 6 "Grinch" (2010)',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Nike%2Fkobe-grinch.webp?alt=media&token=9d49e81d-b4c2-431f-a892-e2306c2dbe86',
        price: 130
      },
      {
        id: 16,
        name: 'Nike Kobe 6 "Prelude All Star MVP"',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Nike%2Fkobe-prelude.webp?alt=media&token=0ee5521f-eb7e-4036-8a08-c46b55ccd524',
        price: 200
      },
      {
        id: 17,
        name: 'Nike Kobe 8 "What The Kobe"',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Nike%2Fwhat-the-kobe.webp?alt=media&token=4408317d-3a24-4e91-8b92-bd21b06b1f34',
        price: 140
      }
    ]
  },
  adidas: {
    id: 3,
    title: 'Adidas',
    routeName: 'adidas',
    items: [
      {
        id: 18,
        name: 'Adidas Y3 Pureboost ZG-Knit',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Adidas%2Fy3-pureboost.webp?alt=media&token=2cf54d07-fe36-4e91-8337-a1ce7e5f2e0a',
        price: 350
      },
      {
        id: 19,
        name: 'Adidas Human Race "Scarlet"',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Adidas%2Fhuman-race-scarlet.webp?alt=media&token=8663b806-b974-4958-a0f2-9e897e7252a8',
        price: 240
      },
      {
        id: 20,
        name: 'Adidas Human Race "Yellow"',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Adidas%2Fhuman-race-yellow.webp?alt=media&token=bcb0c746-34d9-4405-9f52-b55c23bd589c',
        price: 240
      },
      {
        id: 21,
        name: 'Adidas Human Race "Green"',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Adidas%2Fhuman-race-green.webp?alt=media&token=bef138b2-f4cd-4209-94b8-34871d31e91a',
        price: 240
      },
      {
        id: 22,
        name: 'Adidas Human Race "Tangerine"',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Adidas%2Fhuman-race-tangerine.webp?alt=media&token=26df380f-9b64-43f4-84d4-cbfaece17e4a',
        price: 240
      }
    ]
  },
  'off-white': {
    id: 4,
    title: 'Off-White',
    routeName: 'off-white',
    items: [
      {
        id: 23,
        name: 'Nike Off-White Air Presto "OG"',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Off-White%2Fpresto-og.webp?alt=media&token=edec57bf-b7d0-4c65-8c67-353c338f9be3',
        price: 160
      },
      {
        id: 24,
        name: 'Nike Off-White Air Presto "White"',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Off-White%2Fpresto-white.webp?alt=media&token=98ba9d05-53d5-4f92-b5d2-d2a10de2672a',
        price: 160
      },
      {
        id: 25,
        name: 'Air Jordan 1 "Off-White University Blue"',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Off-White%2Func-1.webp?alt=media&token=320fb5e2-9ac9-4d3d-b000-ad8edfefb3a0',
        price: 190
      },
      {
        id: 26,
        name: 'Air Jordan 1 "Off-White Chicago"',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Off-White%2Fchicago-1.webp?alt=media&token=745b0a4c-92b8-41f8-bc4b-f87f2931382f',
        price: 190
      },
      {
        id: 27,
        name: 'Nike Blazer "All hallows Eve"',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Off-White%2Fall-hallows-eve.webp?alt=media&token=922f7bce-347e-4f49-8197-c90e4f618619',
        price: 130
      }
    ]
  },
  yeezy: {
    id: 5,
    title: 'Yeezy',
    routeName: 'yeezy',
    items: [
      {
        id: 28,
        name: 'Nike Air Yeezy 2 "Red October"',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Yeezy%2Fred-october.webp?alt=media&token=f5be2393-53e5-462b-9c4f-f9e767444e3c',
        price: 245
      },
      {
        id: 29,
        name: 'Nike Air Yeezy 2 "Pure Platinum"',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Yeezy%2Fpure-platinum.webp?alt=media&token=54ae7b9b-93fb-4068-8ac0-20d2626bc378',
        price: 245
      },
      {
        id: 30,
        name: 'Nike Air Yeezy 2 "Solar Red"',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Yeezy%2Fsolar-red.webp?alt=media&token=b02abf09-7154-421f-a646-3eaa45aceb05',
        price: 245
      },
      {
        id: 31,
        name: 'Adidas Yeezy Boost 350 "Turtledove"',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Yeezy%2Fturtledove.webp?alt=media&token=c5d682f1-84c4-42c2-9d40-abd1ed7de9ac',
        price: 200
      },
      {
        id: 32,
        name: '200',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Yeezy%2Fpirate-black.webp?alt=media&token=e81eed2d-633c-4041-b6de-f3ec9c1c8340',
        price: 200
      },
      {
        id: 33,
        name: 'Adidas Yeezy Boost 350 "Moonrock"',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Yeezy%2Fmoonrock.webp?alt=media&token=af2d572e-eaba-4cba-90ec-d24d9adfca12',
        price: 200
      },
      {
        id: 34,
        name: 'Adidas Yeezy Boost 350 "Oxford Tan"',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Yeezy%2Foxford-tan.webp?alt=media&token=df74fcbb-d193-4cb9-929c-7c238ca05dfa',
        price: 200
      },
      {
        id: 35,
        name: 'Adidas Yeezy Boost 350 V2 "Zebra"',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Yeezy%2Fzebra.webp?alt=media&token=6e00041a-0f66-4bcf-8f66-79e9820086a3',
        price: 220
      }
    ]
  }
};

export default shopData;
