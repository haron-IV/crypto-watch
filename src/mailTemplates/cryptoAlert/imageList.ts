import { ImageListValue } from '@shared/types'

const imgSource = (imageName: string) => `${__dirname}/images/${imageName}`

export const imageList = {
  bee: {
    filename: 'bee.png',
    path: imgSource('bee.png'),
    cid: 'image-bee',
  },
  bitcoin: {
    filename: 'bitcoin.png',
    path: imgSource('bitcoin.png'),
    cid: 'image-bitcoin',
  },
  main: {
    filename: 'main.png',
    path: imgSource('main.png'),
    cid: 'image-main',
  },
}

type ImageList = typeof imageList
export const mapToAttachments = (
  imageList: ImageList,
  icon?: ImageListValue
): ImageListValue[] =>
  icon ? [...Object.values(imageList), icon] : Object.values(imageList)
