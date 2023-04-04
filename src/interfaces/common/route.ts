export interface Route {
  path: string;
  name: string;
  parent?: Route;
}
