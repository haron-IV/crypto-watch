const imgSource = (imageName: string) => `${__dirname}/images/${imageName}`

export const imageList = {
  top: {
    filename: 'top.png',
    path: imgSource('top.png'),
    cid: 'image-top',
  },
  mainImage: {
    filename: 'main_image.png',
    path: imgSource('main_image.png'),
    cid: 'main-image',
  },
  lightTop: {
    filename: 'light_top.png',
    path: imgSource('light_top.png'),
    cid: 'light-top-image',
  },
  lightBottom: {
    filename: 'light_bottom.png',
    path: imgSource('light_bottom.png'),
    cid: 'light-bottom-image',
  },
  iconBtc: {
    filename: 'icon-btc.png',
    path: imgSource('icon-btc.png'),
    cid: 'icon-btc-image',
  },
  iconAda: {
    filename: 'icon-ada.png',
    path: imgSource('icon-ada.png'),
    cid: 'icon-ada-image',
  },
  chartGreen: {
    filename: 'chart_green.png',
    path: imgSource('chart_green.png'),
    cid: 'chart-green-image',
  },
  bottom: {
    filename: 'bottom.png',
    path: imgSource('bottom.png'),
    cid: 'bottom-image',
  },
  twitter2x: {
    filename: 'twitter2x.png',
    path: imgSource('twitter2x.png'),
    cid: 'twitter2x-image',
  },
  instagram2x: {
    filename: 'instagram2x.png',
    path: imgSource('instagram2x.png'),
    cid: 'instagram2x-image',
  },
  medium2x: {
    filename: 'medium2x.png',
    path: imgSource('medium2x.png'),
    cid: 'medium2x-image',
  },
  linkedin2x: {
    filename: 'linkedin2x.png',
    path: imgSource('linkedin2x.png'),
    cid: 'linkedin2x-image',
  },
  bee: {
    filename: 'bee.png',
    path: imgSource('bee.png'),
    cid: 'bee-image',
  },
}

type ImageList = typeof imageList
export const mapToAttachments = (imageList: ImageList) =>
  Object.values(imageList)
