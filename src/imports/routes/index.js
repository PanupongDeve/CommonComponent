
import HOC from 'imports/HOC/hoc';
import DashBoard from '@imports/pages/DashBoard';
import DataExample from '@imports/pages/DataExample';
import Notify from '@imports/pages/Notify';

const indexRoutes = [
    { path: '/', name: 'Page3', component: DashBoard },
    { path: '/table', name: 'table', component:DataExample },
    { path: '/notify', name: 'notifly', component: Notify}
];

export default indexRoutes;