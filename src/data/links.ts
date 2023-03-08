export interface linkType {
  id: number,
  text: string,
  url: string,
}

type linksType = Array<linkType>; 

export const links: linksType = [
 {
  id: 1,
  text: 'collections',
  url: '/collections'
 },
 {
  id: 2,
  text: 'men',
  url: '/men'
 },
 {
  id: 3,
  text: 'women',
  url: '/women'
 },
 {
  id: 4,
  text: 'about',
  url: '/about'
 },
 {
  id: 5,
  text: 'contact',
  url: '/contact'
 },
]