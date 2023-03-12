export interface linkType {
  id: number,
  text: string,
  url: string,
}
export type linksType = Array<linkType>;  
export type RenderLinkType = () => JSX.Element[];