const initialState = {
  sections: [
    {
      id: 1,
      title: 'Air Jordan',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Directory%2FJordan-background.jpeg?alt=media&token=12ea0f29-2404-4e8b-97b0-ec6c7d3616a6',
      linkUrl: 'shop/air jordan'
    },
    {
      id: 2,
      title: 'Nike',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Directory%2FNike-background.jpeg?alt=media&token=cc79325c-3300-4806-9c3c-1e5238389c2a',
      linkUrl: 'shop/nike'
    },
    {
      id: 3,
      title: 'Adidas',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Directory%2FAdidas-background.jpeg?alt=media&token=fe4df93f-549f-45c0-915b-e2da5455de60',
      linkUrl: 'shop/adidas'
    },
    {
      id: 4,
      title: 'Off-White',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Directory%2FOff-White-background.png?alt=media&token=4aa27459-13bd-4e3a-bac7-54ad1f0344e7',
      size: 'large',
      linkUrl: 'shop/off-white'
    },
    {
      id: 5,
      title: 'Yeezy',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/grails-42150.appspot.com/o/Directory%2FYeezy-background.jpeg?alt=media&token=95b5d663-8a35-46a6-9f16-963556d31df2',
      size: 'large',
      linkUrl: 'shop/yeezy'
    }
  ]
};

const directoryReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
