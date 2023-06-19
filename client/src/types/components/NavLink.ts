export interface NavlinkType {
  id: string,
  text: string,
  url: string,
}
export type NavlinksType = Array<NavlinkType>;  
export type RenderLinkType = () => JSX.Element[];