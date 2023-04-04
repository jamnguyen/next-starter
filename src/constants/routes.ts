import { Route } from '@/interfaces';

export const ROUTES: Record<
  Pick<
    | 'HOME'
    | 'ABOUT'
    | 'OUR_TRIPS'
    | 'OUR_WEDDING'
    | 'NEW_TRIP'
    | 'EDIT_TRIP'
    | 'GALLERY'
    | 'ALBUM'
    | 'BUCKET_LIST'
    | 'FUNDBOXES'
    | 'WORLD_CUP_2022'
  >,
  Route
> = {
  HOME: {
    path: '/',
    name: 'Home',
  },
  ABOUT: {
    path: '/about',
    name: 'About',
  },
  OUR_TRIPS: {
    path: '/our-trips',
    name: 'Our trips',
  },
  OUR_WEDDING: {
    path: '/our-wedding',
    name: 'Wedding plan',
  },
  NEW_TRIP: {
    path: '/our-trips/new',
    name: 'New trip',
  },
  EDIT_TRIP: {
    path: '/our-trips/edit',
    name: 'Edit trip',
  },
  GALLERY: {
    path: '/gallery',
    name: 'Gallery',
  },
  ALBUM: {
    path: '/gallery/album',
    name: 'Album',
  },
  BUCKET_LIST: {
    path: '/bucket-list',
    name: 'The bucket list',
  },
  FUNDBOXES: {
    path: '/fundboxes',
    name: 'Fundboxes',
  },
  WORLD_CUP_2022: {
    path: '/world-cup-2022',
    name: 'World Cup 2022',
  },
};
